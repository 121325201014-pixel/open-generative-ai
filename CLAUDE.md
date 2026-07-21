# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Open Generative AI is a free/open-source alternative to Higgsfield/Freepik/Krea — an AI image, video, lip-sync, cinema, marketing, workflow, and agent studio. It is a thin, well-designed UI in front of the [Muapi.ai](https://muapi.ai) model gateway (200+ image/video/audio models), with an optional local inference path for Mac/Linux/Windows desktop users.

The project ships as **two separate frontends that share one model catalog**, plus two vendored git submodules. Understanding which frontend you're editing is the single most important thing before making a change.

## Repo layout: two frontends, one API pattern

| | Hosted / web app | Desktop app |
|---|---|---|
| Framework | Next.js 15 (App Router) | Vite + vanilla JS, wrapped in Electron |
| Entry point | `app/` (`app/studio/[[...slug]]/page.js` → `components/StandaloneShell.js`) | `index.html` → `src/main.js`, packaged by `electron/main.js` |
| Component library | `packages/studio/src/components/*.jsx` (React) | `src/components/*.js` (vanilla JS, DOM built by hand — no framework) |
| Run | `npm run dev` | `npm run electron:dev` |
| Feature parity | Full: Image, Video, Lip Sync, Cinema, Marketing, Workflows, Agents, Apps | Image, Video, Lip Sync, Cinema, MCP CLI. **Workflows and Agents are intentionally stub screens** (`src/components/WorkflowStudio.js`, `src/components/AgentStudio.js`) that just point users at the hosted web app — they are not "TODO", don't try to wire them up without checking with the user first |

`src/lib/models.js` and `packages/studio/src/models.js` are meant to be **the same file duplicated in two places** (the model catalog — 200+ model definitions, ~8,300 lines). They can drift (there is currently a naming inconsistency: `src/lib/models.js` still says `"SD 2"` / `"SD 2 Extend"` / `"SD 2 I2V"` where `packages/studio/src/models.js` says `"Seedance 2.0"` etc.). **When adding or editing a model, update both files identically** unless the change is desktop- or web-only.

Everything else in `src/` vs `packages/studio/src/components` follows the same pattern: matching filenames (`ImageStudio`, `VideoStudio`, `LipSyncStudio`, `CinemaStudio`, `UploadPicker`, etc.) implement the same feature twice — once in plain JS/DOM, once in React/JSX. A feature change usually means editing both, unless it's specific to one shell.

### Submodules

```
.gitmodules
├── packages/Vibe-Workflow   → github.com/SamurAIGPT/Vibe-Workflow.git   (workflow-builder package)
└── packages/Open-Poe-AI     → github.com/Anil-matcha/Open-Poe-AI.git   (ai-agent package)
```

These are **not populated by a plain checkout** — they show up as empty directories until `git submodule update --init --recursive` runs (this repo's clone has them empty). `npm run setup` runs that plus `npm install` plus building all workspace packages. If `workflow-builder` or `ai-agent` imports fail, this is almost always why — re-run `npm run setup`, not a dependency fix.

Both packages are consumed as `file:` dependencies (`workflow-builder`, `ai-agent` in `package.json` and `packages/studio/package.json`) and are in `transpilePackages` in `next.config.mjs`.

## Commands

```bash
# First-time setup (submodules + install + build workspace packages) — required, npm install alone is not enough
npm run setup

# Hosted web app (Next.js) — http://localhost:3000
npm run dev

# Desktop app (Electron + Vite)
npm run electron:dev

# Production web build
npm run build && npm run start

# Lint (Next.js/ESLint)
npm run lint

# Rebuild an individual workspace package after editing it
npm run build:studio     # packages/studio (React components + Tailwind CSS)
npm run build:workflow   # packages/Vibe-Workflow workflow-builder
npm run build:agent      # packages/Open-Poe-AI agents
npm run build:packages   # all three, in dependency order

# Desktop installers (electron-builder), output to release/
npm run electron:build          # macOS (dmg, x64+arm64)
npm run electron:build:win      # Windows (nsis)
npm run electron:build:linux    # Linux (AppImage + deb)
npm run electron:build:all      # all platforms
```

There is no unit test suite/runner configured (`npm test` is not defined). `scripts/test_minimax_provider.js` is a standalone Node script for spot-checking a model entry in `models.js`, run directly: `node scripts/test_minimax_provider.js` (set `MUAPI_KEY` to also hit the live API).

When you change anything under `packages/studio/src/`, changes are picked up live by Next.js dev via `transpilePackages`, but the Electron/Vite build and any consumer relying on `packages/studio/dist` need `npm run build:studio` re-run.

## API integration pattern

All generation goes through Muapi.ai using a **submit → poll** pattern, authenticated with an `x-api-key` header (never `Authorization: Bearer`):

1. `POST /api/v1/{model-endpoint}` with prompt/params → returns a `request_id`.
2. Poll `GET /api/v1/predictions/{request_id}/result` until `status` is `completed`/`succeeded`/`failed`.

`models.js` is the single source of truth mapping a model's internal `id` to its real API `endpoint` (e.g. `flux-schnell` → `flux-schnell-image`) plus its input schema (aspect ratio, resolution/quality enums, which image field it expects, multi-image support via `images_list`).

### Hosted app: server-side proxy, not a direct client

The Next.js app never calls `api.muapi.ai` directly from the browser for authenticated calls that need to hide the key — it proxies through Next.js route handlers under `app/api/`:

- `app/api/api/v1/[[...path]]/route.js` → `https://api.muapi.ai/api/v1/*` (the double `/api/api` exists because the vendored `ai-agent` library hardcodes that path — don't "fix" the duplication without checking upstream)
- `app/api/app/[[...path]]/route.js` → `https://api.muapi.ai/app/*`, plus a special case rewriting `get_upload_file`/`get_file_upload_url` responses to route uploads through `/api/upload-binary` instead of a direct S3 URL
- `app/api/workflow/[[...path]]/route.js`, `app/api/agents/[[...path]]/route.js` — same proxy shape for those subsystems
- `middleware.js` rewrites `/api/v1/*` at the edge to `https://api.muapi.ai` directly (separate from the route-handler proxies above — both exist, don't assume only one path is live)

The API key travels as either the `x-api-key` request header or a `muapi_key` cookie (set by `StandaloneShell.js` on save so background/proxied requests still authenticate); proxy routes always strip the incoming `cookie` header before forwarding to Muapi to avoid leaking browser cookies upstream.

### Desktop app: direct client + local Vite dev proxy

`src/lib/muapi.js` calls `api.muapi.ai` directly (via `import.meta.env.DEV` switch between the Vite proxy path and the full URL). `vite.config.mjs` proxies `/api` → `https://api.muapi.ai` only for local dev; the built Electron app calls the real domain directly since there's no Next.js server to proxy through in production.

### Key storage (BYOK)

The API key is bring-your-own, stored in `localStorage` (`muapi_key` in the hosted app, see `StandaloneShell.js`), never sent anywhere except Muapi. It is not persisted server-side.

## Local inference (desktop app only)

Electron-only feature, irrelevant to the hosted web app or `packages/studio`. Two independent engines, both wired through `electron/preload.js` (`window.localAI`) and `electron/main.js`:

- **sd.cpp** (`electron/lib/localInference.js`) — bundles a native `sd-cli` binary per-platform (downloaded from GitHub releases, matched by platform/arch in `pickBinaryAsset`), runs SD 1.5/SDXL/Z-Image fully offline with Metal/CUDA/Vulkan/ROCm.
- **Wan2GP** (`electron/lib/wan2gpProvider.js`) — HTTP client to a user-run Wan2GP Gradio server (CUDA-only runtime, so it must run on a separate machine from a Mac client) for Flux/Qwen-Image/video models.

Both surface through `src/components/LocalModelManager.js` (Settings → Local Models) in the vanilla-JS desktop UI only — this has no React/`packages/studio` equivalent.

## Conventions worth knowing before editing

- **Dual-mode studios**: Image/Video Studio (in both frontends) switch their entire model list and prompt requirement based on whether a reference/start-frame image is present (text-to-X vs image-to-X). This mode-switch logic lives at the top of each `ImageStudio`/`VideoStudio` component — check it before adding a model that should appear in only one mode.
- **Multi-image models**: models accepting more than one reference image declare their max count in `models.js`; the upload UI (`UploadPicker.jsx` / `src/components/UploadPicker.js`) automatically switches to a multi-select picker with order badges for those models. Don't hardcode per-model upload UI elsewhere.
- **Electron security**: `webSecurity: false` is set intentionally in `electron/main.js` (needed to load remote model assets cross-origin) — `contextIsolation: true` / `nodeIntegration: false` are the actual security boundary, enforced via `electron/preload.js`. Don't relax those without understanding why.
- Two `package.json` files matter for dependencies: root (`Next.js`, `Electron`, workspaces) and `packages/studio/package.json` (React component library deps). Add a dependency to the one the code you're touching actually lives under.
