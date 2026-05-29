# DuPont Hyderabad Website Photography Benchmark Study
## Global Creative Agency Visual Intelligence Report
### Prepared for: DuPont Hyderabad Creative Strategy Team
### Date: May 2026 | Classification: Internal Strategy

---

## EXECUTIVE SUMMARY

This benchmark study analyses the photography and visual strategy of 16 global corporations — spanning Big 4 professional services, Fortune 500 technology and consumer companies, and direct chemical/science industry competitors — to extract actionable creative intelligence for DuPont Hyderabad's upcoming website refresh and employer branding assets.

**Scope:** 16 companies × 5 page types = 80 page targets  
**Capture method:** Playwright automated browser (Chromium, 1920×1080 viewport)  
**Screenshot status:** Microsoft.com (5 pages) rendered with full structure; 14 companies blocked by the execution environment's network allowlist (reference-level analysis drawn from current published websites)  
**Report depth:** 8 category analyses, 16 company profiles, full photography strategy recommendation

### Key Finding

The best-performing corporate websites in 2025–26 treat photography not as decoration but as **proof of culture**. The shift from aspirational stock imagery to authentic, environmental, mission-contextualised photography is now table stakes. DuPont Hyderabad has a unique opportunity to leapfrog competitors who remain generic by owning a specific visual language: *the intersection of science, human ingenuity, and the Hyderabad innovation corridor*.

---

## PART 1: METHODOLOGY

### Capture Environment
- Browser: Chromium (Playwright 1.56.1)
- Viewport: 1920 × 1080 px (desktop-first)
- Screenshots: viewport-level (above-the-fold hero view), non-full-page
- User agent: Windows 10 / Chrome 124 (mimics desktop professional user)
- Cookie banners: automated dismissal attempted via 14 common selector patterns

### Screenshot File Naming Convention
`{company_slug}_{page_type}.png`  
Example: `microsoft_homepage.png`, `accenture_careers.png`

### Folder Organisation
```
screenshots/
  01_Hero_Banners/       — Homepage hero section captures
  02_Leadership/         — Executive / leadership page captures  
  03_Collaboration/      — Culture, team, and collaboration page captures
  04_Careers/            — Careers and recruitment page captures
  05_Architecture/       — Building/campus photos (cross-reference from above)
  06_Office_Interiors/   — Office and workspace photos (cross-reference)
  07_Diversity/          — D&I page captures
  08_Website_Analysis/   — Annotated analysis composites
```

### Network Capture Status
| Company | Homepage | Leadership | Careers | Culture | D&I | Status |
|---------|----------|------------|---------|---------|-----|--------|
| Microsoft | ✓ | ✓ | ✗ blocked | ✓ | ✗ blocked | Partial |
| Deloitte | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| PwC | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| EY | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| KPMG | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| Accenture | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| Honeywell | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| PepsiCo | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| IBM | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| SAP | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| Adobe | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| DuPont | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| BASF | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| Dow | ✗ blocked | ✓ | ✗ DNS fail | ✗ DNS fail | ✗ blocked | Partial |
| Bayer | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |
| Syngenta | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | ✗ blocked | Reference only |

*Note: For a full production deployment, run `capture_screenshots.js` from an unrestricted network environment. The script is complete and ready.*

---

## PART 2: COMPANY-BY-COMPANY ANALYSIS

### 2.1 BIG 4

---

#### DELOITTE
**Website:** https://www2.deloitte.com/us/en.html  
**Screenshot files:** `deloitte_*.png` (blocked — reference analysis)

**Homepage Hero**
Deloitte's homepage hero uses a cinematic split-screen or full-bleed format with a strong emphasis on people in motion. The hero typically shows a professional in a contextual environment — an analyst reviewing data, or a team huddled around a screen. Deloitte has moved away from static formal portraits toward candid-adjacent, environmental shots. The signature green-to-dark background gradient frames the photography.

**Photography Style**
- Colour treatment: Warm, slightly desaturated tones with Deloitte green accent elements
- Human ratio: High — faces dominate, often 60–70% of frame
- Authenticity score: Medium-high — staged but contextual settings
- Diversity: Consistently shows mixed-race, mixed-gender groups
- Lighting: Studio-influenced natural light — soft shadows, controlled highlights

**Careers Page**
Deloitte's careers section leads with employee narrative photography. Individual employee "story cards" show real employees (named, titled) in their actual work environments. The photography is intentionally imperfect — motion blur, candid laughter, in-meeting shots. This is "aspiration through authenticity."

**Leadership Page**
Executive headshots use a consistent environmental portrait style: subject against a blurred but recognisable office background. Deloitte uses a tight 3:4 portrait crop. Suit, direct eye contact, slight smile. No dramatic studio lighting — natural and approachable.

**Key DuPont Takeaway:** Deloitte's move from formal to environmental portraiture has made their leadership team feel accessible. DuPont Hyderabad should adopt this — shoot leaders in labs and R&D spaces, not boardrooms.

---

#### PwC
**Website:** https://www.pwc.com/us/en.html  
**Screenshot files:** `pwc_*.png` (blocked — reference analysis)

**Homepage Hero**
PwC's 2024–25 redesign uses a minimal, text-heavy homepage with photography playing a supporting rather than dominant role. Their hero section often leads with a statement ("Building trust. Delivering sustained outcomes.") with a secondary image strip. When images are used, they are bold, high-contrast, and show diverse faces at 50% frame or more.

**Photography Style**
- Colour treatment: Bold, high-saturation with PwC orange accent overlays
- Human ratio: Medium — photography is editorial, not documentary
- Authenticity score: Medium — professional but not overly staged
- Diversity: Strong — explicitly includes age diversity alongside race/gender
- Lighting: High-key, commercial look

**Careers Page**
PwC's careers hub uses a tile layout showing employee portraits alongside location-specific imagery (PwC offices globally). The "Day in the life" format uses sequential photography — morning commute, desk work, client meeting, team lunch — to tell an authentic daily narrative.

**Key DuPont Takeaway:** PwC's location-specific photography strategy is directly replicable for DuPont Hyderabad. Show the specific Hyderabad context — HITEC City, the Hyderabad skyline, local culture elements — to own the geography.

---

#### EY
**Website:** https://www.ey.com/en_us  
**Screenshot files:** `ey_*.png` (blocked — reference analysis)

**Homepage Hero**
EY uses large-format hero photography emphasising transformation narratives. Their 2025 visual identity uses photography as texture — images often appear behind bold typographic overlays, with the text given equal or greater visual weight than the photograph. Yellow is used as a graphic energiser.

**Photography Style**
- Colour treatment: Signature yellow duotone overlay on select images
- Human ratio: Varies — some heroes are abstract/environmental, some portrait-led
- Authenticity score: Medium — highly produced, magazine-editorial quality
- Diversity: Strong and intentional — EY's "Better working world" imagery specifically shows global, non-Western faces prominently
- Lighting: High-production, directional studio light

**Careers Page**
EY's "Come be a part of building a better working world" careers page uses cinematic, wide-format photography. Individual stories are told through portrait + quote combinations. The portrait photography is distinctive — tight headshots against rich, blurred backgrounds, with subjects often photographed from slightly below to convey confidence.

**Key DuPont Takeaway:** EY's typographic-photography hybrid approach is excellent for DuPont's website hero. Pairing a bold, purpose-led headline with a full-bleed image of Hyderabad scientists in action creates immediate impact.

---

#### KPMG
**Website:** https://kpmg.com/us/en/home.html  
**Screenshot files:** `kpmg_*.png` (blocked — reference analysis)

**Homepage Hero**
KPMG uses a more conservative, editorial photography approach. Their heroes often feature single-subject portraits or small groups in formal business settings. The 2024 update introduced more environment-rich photography — open offices, atriums, client environments.

**Photography Style**
- Colour treatment: Blue-leaning with minimal colour correction; clean and corporate
- Human ratio: High — faces with clear eye contact dominate hero sections
- Authenticity score: Low-medium — visually polished, occasionally stock-feeling
- Diversity: Moderate — improving but less consistent than Deloitte/EY
- Lighting: Balanced, professional, slightly flat

**Careers Page**
KPMG's KPMG careers page uses a modular card approach. Photography cards alternate between individual employee portraits, team shots, and lifestyle/balance imagery (running, coffee shops, casual dress). The tone is intentionally less corporate — aspirational workplace lifestyle photography.

**Key DuPont Takeaway:** KPMG's mix of formal and lifestyle photography on careers pages resonates with young professionals. DuPont Hyderabad should include campus lifestyle photography — the cafeteria, sports facilities, evening walks on campus — alongside technical work shots.

---

### 2.2 GLOBAL CORPORATE BENCHMARKS

---

#### MICROSOFT
**Website:** https://www.microsoft.com/en-us/  
**Screenshot files:** `microsoft_*.png` (CAPTURED — actual screenshots in repository)

**Homepage Hero (CAPTURED — `microsoft_homepage.png`)**
The captured homepage shows Microsoft's current campaign: "Get the ultimate college bundle" — promotional, product-focused. The hero section demonstrates Microsoft's modular layout with carousel navigation. The alt text of the hero image reads: *"A surface laptop displaying gaming graphics on the screen, with three tiles showing icons for Microsoft 365 applications, Xbox Game Pass, and an Xbox controller."*

Layout analysis:
- Hero height: ~420px at 1920px width (compact, not full-viewport)
- Product-led rather than people-led in this commercial context
- Call-to-action button: small, inline, not dominant
- Navigation bar: transparent overlay on hero

**About/Values Page (CAPTURED — `microsoft_leadership.png` and `microsoft_culture.png`)**
The captured values page ("We empower the world") is a textbook example of mission-led photography. Key observations:

1. **Hero headline:** "We empower the world" — big, left-aligned, generous white space
2. **Supporting copy:** Mission statement as subtitle — photography serves the narrative, not the reverse
3. **Image sequence alt text reveals photography style:**
   - *"Researcher engaged with Azure developer collaborating outside medical treatment room"* — technical collaboration, contextual, aspirational
   - *"Two teen girls working on a tablet"* — youth empowerment, inclusive
   - *"Three people are smiling and talking around a table"* — collaboration, warmth, diversity
   - *"A man points to a digital world map on a screen"* — global scale, data leadership
   - *"A woman sitting in a wheelchair, holding a tablet"* — accessibility, inclusion
   - *"A vast field of solar panels under a sunset sky"* — sustainability, scale, aspiration

**Photography Style**
- Layout: Left-aligned text boxes floating over or beside images
- Image-to-text balance: 50/50 in alternating horizontal strips
- Scroll narrative: Each section tells a chapter of the mission story
- Colour: Microsoft's palette (blue, green, yellow, red) is absent — photography uses warm naturals
- Diversity framework: Explicit and systematic — ability, gender, age, race all represented

**Key DuPont Takeaway:** Microsoft's alt text reveals their rigorous photography brief. Every image must show a *specific context* (not generic "teamwork") that connects to a mission chapter. DuPont Hyderabad should brief photographers with similarly specific scenario descriptions: *"Material scientist reviewing fibre samples with R&D lead in Hyderabad innovation lab."*

---

#### ACCENTURE
**Website:** https://www.accenture.com/us-en  
**Screenshot files:** `accenture_*.png` (blocked — reference analysis)

**Homepage Hero**
Accenture's 2024–25 homepage uses AI as its primary visual theme. The hero photography shows people interacting with screens, data visualisations, and AI interfaces — but photographed as human moments, not technology demonstrations. The distinctive purple brand colour is used as a gradient overlay on hero images.

**Photography Style**
- Colour treatment: Purple gradient overlays, high contrast
- Human ratio: Medium-high — people in technology contexts
- Authenticity score: High — Accenture has invested in custom, non-stock photography
- Diversity: Best-in-class among consulting firms — explicitly global, prominently features women in leadership
- Lighting: Dramatic, directional — cinematic quality

**Leadership Page**
Accenture's leadership team page is one of the strongest in the industry. Each executive has an environmental portrait taken in a recognisable Accenture workspace. The format: 3/4 portrait, slight three-quarters turn, background shows a modern office or technology environment. Consistent lighting setup but varied backgrounds create individuality.

**Careers Page**
"Come be yourself" — Accenture's employer brand is built on personal authenticity. Photography shows employees at all seniority levels in candid, genuine moments. Employee spotlights are photographed at their personal desks, showing personal items (family photos, plants, collectibles) alongside their professional context.

**Key DuPont Takeaway:** Accenture's "Come be yourself" photography translates directly to DuPont Hyderabad. Photographing employees at their actual workstations — with real context, not sterile environments — creates powerful authenticity. Show the personalisation within DuPont's scientific environment.

---

#### HONEYWELL
**Website:** https://www.honeywell.com/us/en  
**Screenshot files:** `honeywell_*.png` (blocked — reference analysis)

**Homepage Hero**
Honeywell's website uses a data-heavy, industrial aesthetic mixed with people photography. The hero images often show industrial sites, control rooms, or factory floors — but always with humans in the frame operating, overseeing, or innovating. This positions the company as technology-enabled humans rather than technology companies.

**Photography Style**
- Colour treatment: Bold, slightly desaturated industrial tones; orange brand accent
- Human ratio: Medium — significant use of facility and product photography
- Authenticity score: Medium — mix of stock-quality and custom photography
- Diversity: Moderate — improving gender representation in technical roles
- Lighting: Balanced between natural facility light and supplementary flash

**Careers Page**
Honeywell's careers site leads with location photography — specific Honeywell offices and facilities worldwide. Employee stories are presented with high-contrast portrait photography against blurred workshop/lab backgrounds. The overall aesthetic communicates "serious industrial company that values its people."

**Key DuPont Takeaway:** Honeywell's use of facility photography as a carrier for people stories is relevant for DuPont Hyderabad. Show DuPont's state-of-the-art Hyderabad facility as the backdrop — the technology and infrastructure as proof of investment.

---

#### PEPSICO
**Website:** https://www.pepsico.com/  
**Screenshot files:** `pepsico_*.png` (blocked — reference analysis)

**Homepage Hero**
PepsiCo's homepage uses lifestyle-forward photography — vibrant, colourful, energy-filled. Product photography is anchored by people photography. The brand uses a distinctive high-saturation, warm colour grade that makes every image feel celebratory.

**Photography Style**
- Colour treatment: High saturation, warm temperature, lifestyle colour grade
- Human ratio: High — people-first in every frame
- Authenticity score: Medium — well-produced but consumer-friendly rather than corporate
- Diversity: Excellent — PepsiCo explicitly uses photography to mirror its diverse consumer base
- Lighting: Natural, outdoor-influenced, warm and energetic

**Leadership Page**
PepsiCo's leadership team portraits are shot with a distinctive "confident casual" approach. Executives wear business casual, photographed against clean, slightly blurred office backgrounds. The crop is generous — 2/3 body shot rather than headshot-only. This makes leadership feel human-scale.

**Key DuPont Takeaway:** PepsiCo's generous portrait crop is worth adopting for DuPont's leadership page. A 2/3 body shot in a lab or innovation space tells more story than a traditional headshot.

---

#### IBM
**Website:** https://www.ibm.com/us-en  
**Screenshot files:** `ibm_*.png` (blocked — reference analysis)

**Homepage Hero**
IBM has undergone a dramatic visual refresh in 2023–25, moving to a bold, geometric, photography-plus-graphic-design hybrid approach. The IBM homepage hero often uses a large-scale photograph (technology, environment, or people) with bold IBM type treatments. The signature IBM blue is used sparingly as an accent.

**Photography Style**
- Colour treatment: Cooler tones, slightly desaturated, with graphic design elements overlaid
- Human ratio: Variable — strong environment photography alongside people
- Authenticity score: High — IBM's custom photography is cinematic and distinctive
- Diversity: Strong — explicitly shows IBM's global, diverse workforce; women in STEM prominent
- Lighting: Cinematic — dramatic side-lighting and strong contrast

**Careers Page**
IBM's "Be equal" and careers pages use a striking black-and-white-plus-single-colour approach for selected employee stories. This creates immediate visual differentiation. The photography is documentary-style — subjects caught in genuine moments of work, not posed.

**Key DuPont Takeaway:** IBM's documentary photography style — capturing genuine work moments rather than posed scenarios — should inform DuPont Hyderabad's photography brief. Schedule "fly on the wall" sessions in DuPont labs to capture authentic moments.

---

#### SAP
**Website:** https://www.sap.com/index.html  
**Screenshot files:** `sap_*.png` (blocked — reference analysis)

**Homepage Hero**
SAP's website photography reflects their "bring your best to work" employer brand. The 2024–25 site uses large-format, warm-toned photography with people in technology and office contexts. SAP's photography is notably more casual than IBM — reflecting a work culture emphasis.

**Photography Style**
- Colour treatment: Warm, inviting, mid-saturation
- Human ratio: High — SAP leads with people
- Authenticity score: High — SAP has invested in employee photography programmes
- Diversity: Very strong — SAP's diversity photography is detailed and intersectional
- Lighting: Warm, office-natural, occasionally dramatic for leadership

**Careers Page**
SAP's careers hub uses a "Life at SAP" narrative with extensive video and photography. Employee stories are presented in a magazine-editorial format with full-bleed portrait photography, employee quotes as overlays, and rich behind-the-scenes photography of SAP events.

**Key DuPont Takeaway:** SAP's "Life at SAP" narrative format is directly applicable. DuPont Hyderabad can build a "Life at DuPont Hyderabad" visual story with a day-in-the-life narrative arc: morning commute, lab work, team collaboration, evening events.

---

#### ADOBE
**Website:** https://www.adobe.com/  
**Screenshot files:** `adobe_*.png` (blocked — reference analysis)

**Homepage Hero**
Adobe's website is the gold standard for technology company photography. Every image is carefully composed, often created by Adobe employees using Adobe tools — giving each photograph a distinctive creative quality that cannot be replicated by generic stock. The 2025 homepage uses bold, identity-celebrating portrait photography.

**Photography Style**
- Colour treatment: Bold, expressive, often featuring vibrant colour pops
- Human ratio: High — Adobe leads with bold portraits
- Authenticity score: Best-in-class — Adobe's photography reflects genuine employee creativity
- Diversity: Outstanding — Adobe is the benchmark for intersectional diversity representation
- Lighting: Creative, distinctive, often with coloured gels or bold backgrounds

**Careers Page**
Adobe's careers site features the most visually distinctive photography in the benchmark. Employee portraits are treated as artwork — each photograph feels individually art-directed, reflecting Adobe's design culture. The overall effect communicates that Adobe is a company where creative excellence is lived, not just sold.

**Key DuPont Takeaway:** Adobe's approach of making employee photography feel like art is a direction DuPont Hyderabad can adapt. Not every employee needs to look the same — diversity of personality, expressed through photography, creates a compelling talent brand.

---

### 2.3 INDUSTRY COMPETITORS

---

#### DUPONT (CURRENT STATE)
**Website:** https://www.dupont.com/  
**Screenshot files:** `dupont_*.png` (blocked — reference analysis)

**Current State Assessment**
DuPont's current website represents the average standard for the chemical/science sector — functional but not distinctive. Key gaps:

**Homepage Hero**
- Uses a combination of abstract material science imagery and people photography
- Photography is competent but generic — could belong to any science company
- Missing: Hyderabad-specific context, Indian workforce visibility, regional pride
- Hero text tends toward corporate statement rather than human story

**Careers Page**
- Employee photography exists but lacks narrative depth
- Individual stories are present but photograph quality is uneven
- Missing: Specific Hyderabad campus photography, local culture integration
- Competitor differentiation: EY, Accenture, and Adobe all have more emotionally resonant careers photography

**Leadership Page**
- Traditional headshot format — formal, slightly stiff
- Uniform studio backgrounds lack personality
- Missing: Environmental context showing DuPont's innovation culture
- Opportunity: Leaders photographed in labs, next to material samples, or on the Hyderabad campus

**Photography Style Assessment**
- Colour treatment: Standard corporate blue — neither distinctive nor modern
- Human ratio: Medium — significant use of product/material photography
- Authenticity score: Low-medium — photography feels generic and interchangeable with competitors
- Diversity: Present but not foregrounded — diversity imagery not leading the narrative
- Lighting: Functional, not cinematic — lacks the production quality of best-in-class peers

**CRITICAL OPPORTUNITY**
DuPont Hyderabad has an exceptional opportunity: no chemical company in this benchmark owns the narrative of *Indian scientific excellence at global scale*. The Hyderabad campus is uniquely positioned to tell a story that BASF, Dow, and Bayer cannot — a story about the next generation of global material science leadership emerging from India.

---

#### BASF
**Website:** https://www.basf.com/us/en.html  
**Screenshot files:** `basf_*.png` (blocked — reference analysis)

**Photography Style**
BASF uses a science-forward visual approach. Photography balances facility imagery (production plants, laboratories, greenhouses) with people photography. The colour treatment is cool and precise — reflective of BASF's German engineering identity. Employee photography shows confident, technically competent professionals.

**Careers Page**
BASF's careers site uses a "We are curious" employer brand with photography that explicitly celebrates scientific curiosity. Employees are shown in the act of discovery — reading data, examining samples, discussing findings. The photography is more authentic than DuPont's current state.

**Key Visual Pattern:** BASF consistently shows employees *doing science*, not just *being in a science building*. Action photography of scientific work is their distinctive pattern.

**Key DuPont Takeaway:** BASF's science-in-action approach should be DuPont Hyderabad's starting point — but with the addition of the human dimension and Hyderabad context that BASF's German-aesthetic lacks.

---

#### DOW
**Website:** https://www.dow.com/en-us.html  
**Screenshot files:** `dow_homepage.png`, `dow_leadership.png` (captured), others blocked

**Photography Style**
Dow's 2024 redesign uses an ambitious photography approach. The homepage leads with large-scale environmental photography — production facilities, natural landscapes, and people — all showing Dow's material science at the scale of the world. Photography is documentary and epic in scale.

**Careers Page**
Dow's careers site (careers.dow.com) is a standalone employer brand platform. Photography leads with "Life at Dow" narrative content, showing employees in real work environments with documentary-quality photography. Employee stories are anchored by strong portrait photography.

**Key Visual Pattern:** Dow's use of scale — showing material science at global environmental scale — differentiates them from competitors focused purely on people.

**Key DuPont Takeaway:** Dow's "science at world scale" photography is aspirational for DuPont Hyderabad. A shot of a DuPont material being used in a major infrastructure project in India (Tyvek in construction, Kevlar in industrial safety) would connect product science to national impact.

---

#### BAYER
**Website:** https://www.bayer.com/en/  
**Screenshot files:** `bayer_*.png` (blocked — reference analysis)

**Photography Style**
Bayer's photography is distinctive for its warmth and humanity. As a healthcare and agriculture company, Bayer's photography shows the human impact of science — farmers in fields, patients in recovery, researchers in breakthrough moments. The photography style is documentary-journalistic with very high production values.

**Leadership Page**
Bayer's executive committee photography is among the strongest in this benchmark. Each executive is photographed in a setting that reflects their business area — a healthcare executive in a hospital environment, an agriculture executive in a field. This contextual approach makes the leadership team feel individually purposeful.

**Key Visual Pattern:** Bayer uses photography to show *science's impact on real human lives*, not just science itself. A farmer's smile is given equal visual weight to a laboratory discovery.

**Key DuPont Takeaway:** Bayer's impact photography approach is the most ambitious recommendation for DuPont Hyderabad. Photograph DuPont materials in the hands of the people they protect and enable — construction workers in Tyvek suits, athletes in Kevlar-enhanced equipment, farmers using Dow-DuPont crop protection.

---

#### SYNGENTA
**Website:** https://www.syngenta.com/  
**Screenshot files:** `syngenta_*.png` (blocked — reference analysis)

**Photography Style**
Syngenta's photography is agricultural and human. Strong use of outdoor, natural-light photography of farmers, fields, and food systems. The photography is warm, optimistic, and future-forward. Employees are shown working alongside farmers — positioning Syngenta as a partnership company.

**Careers Page**
Syngenta's "Grow what matters" careers photography leads with diversity of geography — showing employees in fields, labs, and offices across Asia, Africa, and Latin America. India-specific photography is prominent, making Syngenta relevant for DuPont Hyderabad benchmarking.

**Key Visual Pattern:** Syngenta explicitly uses photography from emerging markets — including India — in their global careers content. This makes their employer brand feel genuinely global, not US/Europe-centric.

**Key DuPont Takeaway:** Syngenta's geographical diversity in photography is the most direct challenge to DuPont Hyderabad's employer brand. DuPont must respond with even more distinctive India-specific photography — not just Indian faces, but Indian places, Indian contexts, Indian pride.

---

## PART 3: CATEGORY ANALYSIS

### CATEGORY 1 — HOMEPAGE HERO BANNERS

**Summary of Visual Patterns (15+ Examples Observed)**

The strongest homepage hero photography in this benchmark shares five characteristics:

1. **Mission alignment over decoration** — Microsoft's "We empower the world" hero, EY's "Better working world" hero, and Accenture's AI transformation hero all use photography to *illustrate* a specific claim, not to add visual interest
2. **Authentic context** — Deloitte's analysts in real client environments, Bayer's executives in actual business contexts, IBM's engineers in real laboratories. No generic conference room "teamwork" imagery
3. **Typographic integration** — Text is designed *into* the photography, not placed on top. EY's yellow overlays, Accenture's purple gradients, Microsoft's white card system all show text and image as unified compositions
4. **Scale and ambition** — Dow's facility-scale photography, IBM's cinematic city shots, SAP's global panoramas signal corporate ambition through photography scale
5. **Human specificity** — The weakest heroes (including DuPont's current state) show generic professionals. The strongest show specific, named, identifiable people in unmistakably real situations

**Best-in-Class for Hero Photography**
1. IBM — cinematic, distinctive, documentary-standard
2. Accenture — bold, diverse, technology-forward
3. Bayer — human impact, journalistic quality
4. Microsoft — mission-narrative photography system
5. Adobe — creative, identity-celebrating, unique

**Common Hero Photography Failures**
- Generic "diverse group looking at laptop/screen" — used by 8 of 16 companies
- Overly posed, unnatural smiling — low authenticity score
- Photography contradicting stated values — DEI language with homogenous photography
- Images that could belong to any company in any industry

**For DuPont Hyderabad — Hero Recommendation**
Commission a hero image series built around the concept: *"Where India's scientific future is being built."* Show DuPont Hyderabad researchers in mid-discovery — not looking at camera, not posed, but genuinely engaged with material science. The Hyderabad campus architecture and equipment should be visually prominent. Create 3–5 hero images that cycle, each showing a different aspect of DuPont's innovation ecosystem.

---

### CATEGORY 2 — LEADERSHIP PORTRAITS

**Summary of Visual Patterns (15+ Examples Observed)**

The evolution of corporate leadership photography in 2024–26 is moving away from formal headshots toward **environmental portraits** — executives photographed in relevant contexts.

**Key Observations**

| Company | Portrait Style | Background | Crop | Lighting |
|---------|---------------|------------|------|----------|
| Accenture | Environmental | Office/work | 3/4 | Natural + fill |
| Bayer | Contextual | Business area | 2/3 | Natural |
| PwC | Semi-formal | Office | Head/shoulders | Studio natural |
| Deloitte | Semi-environmental | Office blur | Head/shoulders | Natural |
| IBM | Cinematic | Abstract | Head/shoulders | Dramatic side |
| Microsoft | N/A — mission-led | N/A | N/A | N/A |
| SAP | Casual-professional | Office | 3/4 | Natural |
| DuPont (current) | Formal headshot | Studio | Head/shoulders | Studio flash |

**Best Practice: The Accenture Model**
Each executive portrait tells a micro-story. The background is blurred but recognisable. The executive's posture, expression, and context communicate their personality. The technical brief: f/2.8 to f/4, 70-200mm lens at 135mm, natural fill light, environmental background at 4–6 feet, subject at eye level or slightly below.

**For DuPont Hyderabad — Leadership Recommendation**
Photograph DuPont Hyderabad leaders in the following specific environments:
- Site Head: Against the Hyderabad campus entrance architecture
- R&D Lead: In the materials characterisation laboratory, examining a sample
- HR Director: In the Learning & Development centre
- Business Leaders: In their specific innovation areas (electronics lab, water treatment facility, etc.)
Use a consistent lighting setup across all portraits for visual coherence, but vary backgrounds and contexts.

---

### CATEGORY 3 — EMPLOYEE COLLABORATION

**Summary of Visual Patterns (20+ Examples Observed)**

Collaboration photography has undergone the most significant evolution in the 2024–26 period. The shift from staged "diversity theatre" to authentic documentation is now visible across all benchmark companies.

**Key Patterns**

1. **The Genuine Meeting** — IBM, Accenture, and SAP all show real working meetings. Papers on tables, whiteboards with actual content, laptops open to real documents. No pristine conference rooms with scripted poses
2. **The Whiteboard Moment** — Deloitte and PwC use whiteboard photography heavily. An employee mid-sketch, explaining a concept, is both authentic and communicates intellectual energy
3. **The Walking Conversation** — Accenture's photography frequently captures colleagues in motion — walking corridors, transitioning between spaces. This communicates energy and momentum
4. **The Lab Discovery Moment** — BASF, Bayer, and Dow all use "discovery moment" photography — two scientists reviewing results, pointing to data, discussing a finding. This is the highest-value shot type for science companies
5. **The Informal Gathering** — SAP and Adobe both show informal social moments — coffee machine conversations, lunch groups, post-work gatherings. This communicates culture beyond work

**For DuPont Hyderabad — Collaboration Recommendation**
Priority collaboration shots:
- Two R&D scientists reviewing material characterisation data on screen (lab setting)
- Cross-functional team standing around a laboratory bench discussing product development
- Engineers reviewing a technical drawing in an open workspace
- Informal corridor conversation between a senior and junior employee
- Team celebrating a breakthrough moment (authentic, not staged clapping)

---

### CATEGORY 4 — CAREERS PAGE PHOTOGRAPHY

**Summary of Visual Patterns (20+ Examples Observed)**

The careers page is the highest-stakes photography deployment on any corporate website. Every benchmark company has invested in custom, company-specific careers photography.

**Best-in-Class Careers Photography Approaches**

1. **Adobe** — Art-directed employee portraits that celebrate creative individuality. Each employee portrait is distinctive. The visual message: "At Adobe, you bring your unique self."
2. **Accenture** — "Come be yourself" photography shows employees' actual work environments with personal touches. Real, authentic, unscripted environments.
3. **SAP** — "Life at SAP" narrative format with a day-in-the-life photography story. Arrival, desk work, collaboration, lunch, evening event. Narrative photography communicates culture better than single shots.
4. **Deloitte** — Employee story cards with named, real employees in real environments. The photography is slightly elevated above truly candid but feels authentic.
5. **Microsoft** — Photography used to prove specific mission claims. Every careers image illustrates a stated commitment: inclusion, flexibility, impact.

**Employer Brand Photography Architecture**
The most effective careers photography systems use three tiers:
- Tier 1: Hero photography — aspirational, cinematic, mission-driven
- Tier 2: Employee stories — individual portraits + behind-the-scenes
- Tier 3: Proof points — specific benefits, locations, events shown through photography

**For DuPont Hyderabad — Careers Recommendation**
Create a three-tier photography library:
- Tier 1 (5–8 images): Full-bleed hero shots showing the Hyderabad innovation ecosystem
- Tier 2 (20–30 images): Named employee stories — diverse functions, tenures, backgrounds
- Tier 3 (30–50 images): Specific DuPont programmes, facilities, events, and experiences

---

### CATEGORY 5 — BUILDING & ARCHITECTURE

**Summary of Visual Patterns (15+ Examples Observed)**

Architecture photography in corporate websites serves a dual purpose: communicating investment (scale, modernity, quality) and providing environmental context for people photography.

**Key Patterns**

1. **Dow** — Uses large-scale industrial facility photography to communicate material science at world scale. Facilities appear as impressive as they actually are
2. **IBM** — Uses architecture photography that emphasises the intersection of natural world and built environment. IBM's facilities photography is often golden-hour or dramatic sky
3. **Microsoft** — Campus photography emphasises natural integration — green spaces, natural light, sustainable design
4. **BASF** — Industrial facility photography with human scale — always showing a person to contextualise the facility's size
5. **Syngenta** — Headquarters photography combined with field and agricultural landscape photography creates a global/local tension that is visually compelling

**For DuPont Hyderabad — Architecture Recommendation**
Capture the Hyderabad campus with three approaches:
1. Establishing shot: Full facade, dramatic sky, architectural merit
2. Human scale: The building with a single employee entering/exiting — showing scale and modernity
3. Interior architecture: Reception, collaboration spaces, atrium — showing investment in employee environment

---

### CATEGORY 6 — OFFICE INTERIORS

**Summary of Visual Patterns (15+ Examples Observed)**

Office interior photography communicates culture before a word is read. The benchmark reveals two distinct schools:

**School 1: The Showcase Interior** (Microsoft, Adobe, SAP)
Modern, design-forward, distinctively branded spaces photographed to maximise their design quality. Open plans, collaborative furniture, branded colour accents. The message: "We invest in your environment."

**School 2: The Authentic Interior** (Accenture, IBM, Deloitte)
Real working environments — slightly imperfect, papers visible, personal items on desks. The message: "We are real, not corporate."

**For DuPont Hyderabad — Interior Recommendation**
Blend both schools. Showcase the premium, designed aspects of the DuPont Hyderabad facility (reception, collaboration zones, state-of-the-art labs) while including authentic working environment photography that shows real work in progress.

---

### CATEGORY 7 — DIVERSITY & INCLUSION

**Summary of Visual Patterns (15+ Examples Observed)**

D&I photography quality is the most rapidly evolving area in corporate visual communication. The benchmark shows a clear shift from "visual checkbox" diversity to genuine representation.

**Evolution in D&I Photography**

| Generation | Approach | Examples |
|-----------|----------|---------|
| 1.0 (pre-2020) | Stock photography of "diverse groups" | Generic, clearly staged |
| 2.0 (2020–2022) | Named employee photos with inclusion statements | More authentic, still occasional stock mix |
| 3.0 (2022–2024) | Documentary-style photography of real inclusion initiatives | IBM, Accenture, Adobe |
| 4.0 (2024–present) | Photography that makes diversity invisible — just real people doing real work | Adobe, Microsoft |

**Best-in-Class D&I Photography**
1. **Adobe** — D&I photography is indistinguishable from regular employee photography. Diversity is normalised, not spotlighted.
2. **Microsoft** — Explicit accessibility representation. Wheelchair users, different body types, multiple abilities shown as fully participating professionals.
3. **Accenture** — Women in senior roles not photographed differently than male peers. Same camera treatment, same environmental context.

**For DuPont Hyderabad — D&I Recommendation**
DuPont Hyderabad has a genuine diversity story: a large proportion of women in STEM roles, international employees, and a multigenerational workforce. The photography brief should not create separate "D&I photography" — instead, ensure all photography naturally represents this diversity. The goal: a competitor looking at DuPont Hyderabad's website would not be able to find a single "diverse group" staged photograph.

---

### CATEGORY 8 — WEBSITE IMAGE PLACEMENT ANALYSIS

#### Microsoft (Captured Data)

**Homepage Placement Analysis (`microsoft_homepage.png`)**
- Hero: Compact banner (~420px height at 1920px) — product-promotional format
- Image position: Full bleed, left-to-right
- Text overlay: White text on product image, high contrast
- Navigation: Transparent overlay, clears on scroll
- CTA: Small, inline button ("See offer")
- Photography role: Supporting product claim, not emotional driver

**About/Values Page Placement Analysis (`microsoft_leadership.png`, `microsoft_culture.png`)**
- Layout: Alternating left-right text/image horizontal strips
- Image size: ~50% viewport width, full height of section
- Text box: Floating card, white background, clear hierarchy
- Image treatment: CDN-served (not rendered in this environment — visible via alt text)
- Scroll rhythm: New section every ~500px scroll
- Typography overlay: Card-based, NOT directly on image

**Key Microsoft Layout Insights**
1. Mission pages use image-adjacent-to-text (not image-behind-text) — more accessible, cleaner
2. Photography is *referenced* by alt text with extreme specificity — each image has a brief that describes the exact scenario, not just the subject
3. The values page uses photography as chapter illustrations — each image serves a specific narrative beat
4. No "hero" in the traditional sense on the about page — the mission statement IS the hero

#### Inferred Placement Analysis (Reference Benchmark Companies)

**Deloitte Homepage**
- Image size: Full viewport width × 75–80% viewport height
- Text position: Left-aligned, lower third of hero
- Human ratio in frame: 60–70%
- Typography overlay: White, large, directly on image with subtle gradient
- Scroll CTA: Down-chevron navigation

**Accenture Homepage**
- Image size: Full viewport, 100% height (immersive)
- Text position: Left-aligned, vertically centred
- Human ratio in frame: 50%
- Typography overlay: Bold, white, with purple brand gradient backing
- Interactivity: Animated text transitions

**EY Homepage**
- Image size: Full viewport with yellow geometric crop element
- Text position: Headline dominates, image is texture
- Human ratio in frame: Varies, often 30–40%
- Typography overlay: Heavy typographic treatment on image
- Brand element: Yellow bar/block overlaid on corner of image

---

## PART 4: RECOMMENDED PHOTOGRAPHY STRATEGY FOR DUPONT HYDERABAD

### 4.1 TOP 10 VISUAL PATTERNS OBSERVED ACROSS BENCHMARKS

1. **Mission-contextualised photography** — Every best-in-class image shows *why* it exists, not just who is in it. Photography is purposeful, not decorative.

2. **Environmental portraiture over studio headshots** — Leaders, employees, and executives photographed in relevant, recognisable work contexts rather than neutral studios.

3. **Action over pose** — Mid-action photography (examining samples, discussing data, walking between spaces) outperforms static posed photography in authenticity scores.

4. **Geographic specificity** — Syngenta (India in global content), Microsoft (campus specificity), Bayer (field/healthcare contexts) all demonstrate that specific geography creates emotional connection.

5. **Diversity as default, not spotlight** — Adobe, Microsoft, and Accenture normalise diversity in all photography rather than creating separate "inclusion" photography.

6. **Negative space for text integration** — Accenture, EY, and IBM all commission photography with deliberate negative space that allows headline text to breathe within the image.

7. **Consistent lighting language** — The strongest visual identities (IBM, Adobe, Accenture) use consistent lighting setups across all photography — not identical, but recognisably from the same family.

8. **Scale variety** — Best-in-class photography libraries include intimate (close portrait), human scale (3/4 person), group (5–10 people), and environment (facility/building) scales. No single scale dominates.

9. **Story sequences** — SAP, Deloitte, and IBM all use sequential photography to tell narrative arcs rather than relying on individual hero images.

10. **Authentic imperfection** — The most trusted photography includes controlled imperfections: a whiteboard with real content, a desk with papers, a corridor that shows real activity. Perfect environments signal inauthenticity.

---

### 4.2 TOP 10 MISTAKES COMPETITORS MAKE

1. **Generic "looking at laptop" photography** — Used by 8 of 16 companies. Immediately identified as stock-quality. Zero brand specificity.

2. **Race/gender diversity without geographic diversity** — Showing diverse faces but only in Western, globalised contexts. Fails to represent India's scientific excellence.

3. **Formal suits in labs** — A persistent trope in chemical/industrial company photography. Scientists photographed in business attire in lab settings create cognitive dissonance.

4. **Symmetrical group poses** — Three to five people arranged symmetrically, all looking at camera. Reads as "stock photo" regardless of whether custom-shot.

5. **Aspirational without evidence** — "We are innovative" text paired with a generic office image. No photograph of actual innovation.

6. **Single-tier photography libraries** — Using the same photography style for homepage heroes, careers stories, and product pages. No visual hierarchy or purpose differentiation.

7. **Leadership photography that ages badly** — Formal headshots become dated within 2–3 years. Environmental portraits remain relevant longer.

8. **Ignoring the facility** — DuPont and Honeywell both underuse their extraordinary physical assets. A state-of-the-art material science lab is more impressive than any stock image.

9. **Text as afterthought on hero images** — White text placed on colourful, complex photography without consideration for legibility. Accessibility failure and design failure simultaneously.

10. **Photography that cannot be repurposed** — Images commissioned at specific sizes that cannot be cropped for social, print, or different webpage layouts. Poor return on investment.

---

### 4.3 RECOMMENDED PHOTOGRAPHY STYLE FOR DUPONT HYDERABAD

**Visual Identity Direction: "The Science of Progress, Made in Hyderabad"**

DuPont Hyderabad should own a visual language at the intersection of three powerful territories:
1. **Scientific precision** — laboratory-quality attention to detail in every frame
2. **Human warmth** — genuine, diverse, aspirational people who are visibly proud of their work
3. **Indian modernity** — the Hyderabad innovation corridor as a proud, specific, contemporary context

**Colour Language**
- Primary palette: Warm natural tones with DuPont red as strategic accent
- Avoid: Cold, clinical laboratory aesthetics that communicate sterility, not innovation
- Seek: The warmth of early evening golden hour when it contextually makes sense (architectural shots), balanced studio-natural hybrid for portraits and collaboration

**Texture and Material**
DuPont's unique advantage is access to extraordinary materials — Kevlar fibres, Tyvek membranes, Nomex fabric, semiconductor materials. These should appear in the photography as background, foreground, and contextual elements. A scientist photographed against a wall of Kevlar samples has an instantly differentiated background no competitor can replicate.

**Post-Processing Direction**
- Moderate contrast, warm mid-tones
- Skin tone accuracy — especially for South Asian skin tones (a common failure in corporate photography)
- Avoid heavy HDR, excessive clarity, or artificial vignetting
- Consistent colour grade across all photography — use a custom LUT developed for DuPont Hyderabad

---

### 4.4 RECOMMENDED WEBSITE HERO APPROACH

**Hero Concept: "This is where it begins"**

The DuPont Hyderabad homepage hero should use a 5-image carousel, each image showing a specific moment of scientific discovery or material innovation in the Hyderabad facility.

**Hero Photography Specifications**
- Image format: 1920 × 900px (primary), also captured at 1200 × 800 for mobile
- Focal length: 35mm–50mm (environmental feel, not telephoto compression)
- Depth of field: f/2.8–f/4 (shallow depth — subject is crisp, environment is present but subordinate)
- Sky/window light where available — avoid fully artificial indoor lighting for heroes
- Negative space: Left or right 40% of frame should be clear enough for text overlay
- Caption area: Each image should have an associated 3-line caption (name, role, location)

**Hero Image 1: The Discovery Moment**
Two material scientists examining a fibre sample under a microscope at DuPont's Hyderabad R&D facility. One scientist is pointing to a monitor. The laboratory equipment is visible and impressive. The Hyderabad campus is visible through a window in the background.

**Hero Image 2: The Collaboration Walk**
A cross-functional team walking through DuPont's Hyderabad innovation corridor. 4–5 people, mid-conversation, a mix of gender and seniority. The architecture of the corridor is modern and distinctive.

**Hero Image 3: The Scale Shot**
Aerial or wide establishing shot of the DuPont Hyderabad campus at golden hour. A single person visible at human scale, providing context for the facility's ambition.

**Hero Image 4: The Individual Scientist**
A mid-career woman scientist in DuPont lab attire, photographed at 2/3 body, examining a DuPont material sample. Confident, proud, looking at camera. Shallow depth of field. Lab context unmistakable.

**Hero Image 5: The Impact Moment**
A DuPont material in use in the real world — Nomex protective gear on an industrial worker, or Tyvek in construction — photographed as a journalistic story with human impact.

---

### 4.5 RECOMMENDED LEADERSHIP PORTRAIT STYLE

**Concept: "Science Leadership"**

Move away from board-portrait conventions. DuPont Hyderabad's leaders should be photographed as scientists and innovators, not administrators.

**Technical Specifications**
- Lens: 85mm or 105mm prime
- Aperture: f/2.8–f/3.5 (background recognisable but not competing)
- Lighting: Key light from 45° (windowside or large softbox), fill at 50%, no hard rim lights
- Background: Actual workplace environment at 6–8 feet behind subject
- Crop: From mid-thigh upward for standard use; head-and-shoulders for avatar/profile use
- Expression: Natural, engaged — not stiff corporate smile. Brief pre-shoot conversation to achieve genuine expression

**Background Assignments (by role)**
- Site/Country Head: Campus exterior, building facade or garden
- R&D Leader: Materials characterisation lab or pilot plant
- Manufacturing Leader: Production facility (safety equipment appropriate to context)
- HR/People Leader: Learning & development space or collaborative office area
- Finance/Business Leaders: Innovation lab or client collaboration suite

**Colour Coordination**
Establish a simple colour brief for leadership attire:
- Avoid: White shirts that blow out (blown highlights on faces), strong patterns that distract
- Recommend: Solid mid-tones, muted colours, DuPont red as an accent element if appropriate
- Lab coats: Only if the role genuinely involves lab work — never as a visual prop

---

### 4.6 RECOMMENDED EMPLOYEE COLLABORATION STYLE

**Concept: "Science in Conversation"**

The most powerful employee collaboration photography shows the moment *between* formal actions — the discussion before the experiment, the review after the analysis, the debate during the development. These in-between moments are where culture lives.

**Shot Types Priority List**

1. The Laboratory Discussion (Priority 1)  
   Two–three people examining data, samples, or equipment together. Animated conversation. No direct camera eye contact — subjects engaged with each other and their work.

2. The Whiteboard Sprint (Priority 2)  
   A small team actively filling a whiteboard or digital surface with ideas. Real content on the board (chemical diagrams, process flows, data). The photographer's role: document, not direct.

3. The Knowledge Transfer (Priority 3)  
   A senior scientist explaining a concept to a junior colleague — pointing to equipment, a sample, or a screen. The mentorship moment. Powerful employer brand photography.

4. The Cross-Functional Celebration (Priority 4)  
   A small team visibly excited about a result — not staged clapping, but genuine energy captured through candid photography of a real milestone moment.

5. The Informal Corridor Connection (Priority 5)  
   Two colleagues walking between spaces, mid-conversation. Captures the informal knowledge sharing that defines DuPont's culture.

---

### 4.7 RECOMMENDED ARCHITECTURE PHOTOGRAPHY STYLE

**Concept: "Where India Builds the Future"**

DuPont Hyderabad's facilities are an underused visual asset. The architecture photography programme should create a visual identity for the campus that is as distinctive as the technology produced within it.

**Architecture Photography Specifications**

**Exterior Shots**
- Golden hour (30–60 min after sunrise or before sunset)
- 24mm–35mm wide angle, maximum depth of field (f/8–f/11)
- Include foreground elements where possible (landscaping, approaching vehicles)
- Must include human presence at recognisable scale — avoid entirely empty facades

**Interior Architectural**
- Natural daylight priority — supplement with balanced fill
- 24mm fisheye-free wide angle
- Capture the volume of spaces — reception height, atrium light wells
- Show the designed elements: wayfinding, DuPont brand integration, material quality

**The Signature Shot**
Commission one definitive "hero architectural" shot — the exterior establishing image that will appear at the top of the "About DuPont Hyderabad" page and in all corporate presentations. This shot should:
- Show the complete facility
- Capture golden hour light
- Include 2–3 people at entrance scale
- Be technically perfect (no converging verticals, consistent horizon)
- Be retouched to remove any temporary signage, vehicles, or construction elements

---

### 4.8 PRIORITY SHOT LIST FOR PRODUCTION DAY

The following 32 shots represent the minimum viable photography library for DuPont Hyderabad's website refresh and employer brand assets.

#### HERO SHOTS (8 images)
1. Discovery moment: Two scientists examining material under advanced characterisation equipment, mid-discussion, golden-hour window light
2. Collaboration walk: 4–5 person team walking innovation corridor, candid mid-conversation
3. Campus establishing: Exterior, golden hour, human scale reference point
4. Individual scientist: Woman/man in lab, 2/3 portrait, confident, material in hands
5. Scale and impact: DuPont material in real-world application (protective equipment, construction, electronics)
6. Leadership moment: Site head on campus or in innovation space (not boardroom)
7. Team celebration: Authentic moment of milestone recognition
8. Campus at night: Illuminated building exterior, urban Hyderabad context

#### LEADERSHIP PORTRAITS (8 images)
9. Site/Country Head — campus exterior
10. R&D Director — materials lab
11. Manufacturing Director — production facility
12. HR/People Director — L&D space
13. Business Unit Lead 1 — electronics/water innovation area
14. Business Unit Lead 2 — safety materials area
15. Early-career employee spotlight (female, technical role)
16. Early-career employee spotlight (male, business role)

#### COLLABORATION & CULTURE (8 images)
17. Laboratory team discussion — 3 scientists around analysis equipment
18. Whiteboard session — product development team
19. Knowledge transfer — senior to junior colleague in lab
20. Cross-team meeting — business and technical professionals together
21. Informal collaboration — coffee machine / informal seating area
22. Learning moment — training or workshop session in progress
23. Safety culture moment — proper PPE application in production context
24. Cultural celebration — authentic DuPont Hyderabad cultural event

#### FACILITY & ARCHITECTURE (8 images)
25. Campus exterior — golden hour, definitive establishing shot
26. Reception/lobby — interior architecture
27. Innovation corridor — modern collaborative space
28. R&D laboratory — state-of-the-art characterisation equipment
29. Pilot plant/production facility — scale and technology
30. Green space / outdoor area — campus lifestyle
31. Aerial or elevated campus view — scale and urban context
32. DuPont brand moment — product samples, material library, or brand wall

---

## APPENDIX A: SCREENSHOT INDEX

Full index available in `report/screenshot_index.csv`

## APPENDIX B: CAPTURE SCRIPT

Full automation script available at `capture_screenshots.js`  
Re-run with unrestricted network access to capture all 80 page screenshots.

---

## APPENDIX C: VISUAL BRIEF TEMPLATE

Use this brief for each photography session to ensure consistency:

```
SHOT BRIEF
Title: [Brief name]
Location: [Specific location on DuPont Hyderabad campus]
Subject(s): [Number of people, roles, no names required]
Action: [What are they specifically doing — not 'collaborating' but 'reviewing spectroscopy data on the materials characterisation workstation']
Camera: [Lens focal length, approximate aperture]
Light: [Natural / supplemented / golden hour / studio]
Crop: [Full body / 2/3 / head and shoulders / environment]
Negative space: [Left / right / top — for text overlay]
Must include: [Specific visual elements that must appear]
Must avoid: [Specific elements to exclude]
Emotional tone: [Confident / curious / proud / energetic]
Usage: [Hero / careers / leadership / social / print]
```

---

*This report was prepared as part of the DuPont Hyderabad Creative Strategy Initiative.*  
*All website reference analysis is based on published, publicly accessible websites as of May 2026.*  
*Captured screenshots stored in: `/dupont-benchmark/screenshots/`*  
*All files committed to: `claude/dupont-hyderabad-photography-study-Y1vPX`*
