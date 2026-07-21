# Raya by The House of Namya — Concept Website Demo

A standalone, dependency-free concept website built as a **portfolio/pitch demo** for a freelance web development proposal to the brand [@raya_by.the.house.of.namya](https://www.instagram.com/raya_by.the.house.of.namya) — a small Instagram-first label selling premium, personalised/monogrammed embroidered towels.

This is not the brand's real website — they currently sell exclusively via Instagram DMs. It's meant to show what a real website could look like and how it would solve their actual problem: right now every sale depends on a manual DM conversation, there's no catalog, no way to browse collections, and no credibility signal for new customers landing from an IG bio link.

## What's here

- `index.html` — full one-page site
- `css/style.css` — theme, layout, all animation keyframes
- `js/main.js` — scroll reveals, counters, slider, cursor, nav behaviour (vanilla JS, no build step, no dependencies)

Just open `index.html` in a browser, or serve the folder with any static server.

```bash
cd demo-sites/raya-by-house-of-namya
python3 -m http.server 8080
# visit http://localhost:8080
```

## Content basis

Instagram itself blocks unauthenticated scraping, so this was built from screenshots of the brand's real profile (bio, grid, highlights) rather than guesswork:

- **Product**: premium, personalised/monogrammed towels — not clothing
- **Bio**: "Towels? Why not make our most used product a bit personalised?? DM to place your order" — ordering is currently 100% DM-based, no cart
- **Real collections seen in the grid**: *Temple Collection* ("Sacred. Pure. Timeless." — Nandi/trishul motifs), *Jaipuri Collection* ("A Touch of Everyday Luxury" — floral embroidery), personalised monogram initials, festive/gifting content (Diwali gift boxes, Ganesh Chaturthi)
- **Palette**: deep maroon/brown, warm cream, rust/marigold, forest green, soft gold — taken directly from their logo and packaging
- **Voice**: personal, founder-led, "we keep things simple, personal & effortless"
- Stats (towels made, cities shipped, dispatch time) are **placeholder numbers scaled to a small, growing account** (961 followers, 41 posts) — swap for real figures before presenting live sales data.

## Imagery note

No real product photos were used or fabricated. All "photo" placeholders are abstract line-art motifs (paisley, floral rings) rendered live in CSS/SVG using the brand's own colour palette — they hint at the mood without claiming to be actual product photography. **Before this goes to the client, swap these gradient/motif blocks for real product photography** (they already have strong reels/photo content — the rocking-chair shots, the ornate mirror shot, and the Diwali gift-box unboxing are all ready to use).

## Animation / UX inventory

- Preloader with brand mark + loading bar
- Custom cursor (dot + trailing ring) on desktop, auto-disabled on touch
- Sticky header that shrinks + blurs on scroll, hides on scroll-down / reappears on scroll-up
- Full-screen mobile nav with slide transition
- Hero: staggered letter-mask title reveal, mouse + scroll parallax on background motifs, animated scroll cue
- Infinite marquee ticker (pauses on hover)
- Scroll-triggered reveal animations (staggered) via `IntersectionObserver` throughout every section
- Animated count-up stats
- Hover-zoom collection cards and masonry gallery with caption reveal
- Self-filling animated timeline for the "how it's made" process
- Auto-rotating testimonial slider with manual dots
- Floating "back to top" button
- Demo contact + newsletter forms with inline success state (no real submission — clearly labelled as a demo)
- Full `prefers-reduced-motion` support — every animation is disabled/simplified for users who request it
- Fully responsive: desktop, tablet, and mobile breakpoints

## Suggested next steps if this becomes the real build

1. Swap placeholder motifs for real product photography + a proper logo asset
2. Wire the contact form to a real backend (Formspree/Resend) or keep it WhatsApp-first with a `wa.me` deep link (already stubbed in)
3. Add a lightweight product catalog / lookbook CMS (e.g. Sanity, Notion-as-CMS, or simple JSON) so new drops don't need a redeploy
4. Add basic analytics + an Instagram Graph API feed so the "Follow the Journey" grid pulls real posts automatically
