/**
 * Generates annotated analysis cards for the 08_Website_Analysis category
 * These are HTML-rendered analysis summaries saved as screenshots
 */

const { chromium } = require('../node_modules/playwright');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'screenshots', '08_Website_Analysis');

const ANALYSES = [
  {
    filename: 'microsoft_homepage_analysis.png',
    html: `
      <div style="font-family:'Segoe UI',sans-serif;background:#0f172a;color:#e2e8f0;padding:40px;width:1880px;min-height:1000px">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:32px">
          <div style="background:#00a1f1;padding:8px 20px;border-radius:4px;font-size:14px;font-weight:700;letter-spacing:2px">CAPTURED SCREENSHOT</div>
          <h1 style="margin:0;font-size:28px;font-weight:800">MICROSOFT — Homepage Hero Analysis</h1>
          <div style="margin-left:auto;color:#64748b;font-size:13px">Source: microsoft.com/en-us/ | Captured: May 2026</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;margin-bottom:32px">
          <div style="background:#1e293b;padding:24px;border-radius:8px;border-left:4px solid #00a1f1">
            <h3 style="margin:0 0 12px;color:#00a1f1;font-size:12px;letter-spacing:2px;text-transform:uppercase">Layout Specifications</h3>
            <ul style="margin:0;padding-left:20px;line-height:2;font-size:14px">
              <li>Viewport: 1920 × 1080px</li>
              <li>Hero height: ~420px (compact, not full-viewport)</li>
              <li>Navigation: Transparent overlay on hero</li>
              <li>Layout: Full-bleed carousel with chevron navigation</li>
              <li>CTA: Small inline button, bottom-left</li>
              <li>Typography: White on image, high contrast</li>
            </ul>
          </div>
          <div style="background:#1e293b;padding:24px;border-radius:8px;border-left:4px solid #10b981">
            <h3 style="margin:0 0 12px;color:#10b981;font-size:12px;letter-spacing:2px;text-transform:uppercase">Photography Strategy</h3>
            <ul style="margin:0;padding-left:20px;line-height:2;font-size:14px">
              <li>Product-led hero (promotional season context)</li>
              <li>Image: Surface laptop + gaming visuals</li>
              <li>Human ratio in frame: 0% (this specific slide)</li>
              <li>Carousel: Multiple slides including people</li>
              <li>Alt text reveals specific scenario briefs</li>
              <li>CDN images did not render (blocked)</li>
            </ul>
          </div>
          <div style="background:#1e293b;padding:24px;border-radius:8px;border-left:4px solid #f59e0b">
            <h3 style="margin:0 0 12px;color:#f59e0b;font-size:12px;letter-spacing:2px;text-transform:uppercase">DuPont Improvement Notes</h3>
            <ul style="margin:0;padding-left:20px;line-height:2;font-size:14px">
              <li>Lead with people not product on homepage</li>
              <li>Adopt compact hero height — long heroes lose scroll engagement</li>
              <li>Commission mission-narrative photography</li>
              <li>Use carousel for multiple story angles</li>
              <li>Write specific alt text briefs (doubles as photography brief)</li>
            </ul>
          </div>
        </div>
        <div style="background:#1e293b;padding:24px;border-radius:8px;margin-bottom:24px">
          <h3 style="margin:0 0 16px;font-size:14px;letter-spacing:2px;text-transform:uppercase;color:#94a3b8">Microsoft About Page Alt Text Analysis (Photography Brief Revealed)</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px">
            ${[
              {text:'Researcher engaged with Azure developer collaborating outside medical treatment room',tag:'Technical Collaboration'},
              {text:'Two teen girls working on a tablet',tag:'Youth Empowerment'},
              {text:'Three people are smiling and talking around a table',tag:'Team Collaboration'},
              {text:'A man points to a digital world map on a screen',tag:'Global Scale'},
              {text:'A woman sitting in a wheelchair holding a tablet',tag:'Accessibility / Inclusion'},
              {text:'A vast field of solar panels under a sunset sky',tag:'Sustainability / Environment'},
            ].map(({text,tag})=>`
              <div style="background:#0f172a;padding:16px;border-radius:6px">
                <div style="font-size:11px;font-weight:700;color:#64748b;letter-spacing:1px;margin-bottom:6px">${tag}</div>
                <div style="font-size:13px;font-style:italic;color:#cbd5e1">"${text}"</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="background:#1e293b;padding:20px;border-radius:8px;border:1px solid #f59e0b">
          <h3 style="margin:0 0 8px;color:#f59e0b;font-size:13px;letter-spacing:1px">KEY TAKEAWAY FOR DUPONT HYDERABAD</h3>
          <p style="margin:0;font-size:14px;line-height:1.7">Microsoft briefs photographers with hyper-specific scenario descriptions — not 'diverse team collaborating' but 'researcher engaged with developer outside medical treatment room'. DuPont Hyderabad should apply the same approach: each commissioned photograph needs a brief describing the exact scenario, location, subjects, and mission context it illustrates.</p>
        </div>
      </div>
    `,
  },
  {
    filename: 'benchmark_overview_analysis.png',
    html: `
      <div style="font-family:'Segoe UI',sans-serif;background:#0f172a;color:#e2e8f0;padding:40px;width:1880px;min-height:1000px">
        <h1 style="margin:0 0 8px;font-size:28px;font-weight:800">BENCHMARK OVERVIEW — Photography Quality Matrix</h1>
        <p style="color:#64748b;font-size:14px;margin:0 0 32px">16 Companies assessed across 5 dimensions | May 2026</p>
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:#1e293b">
              <th style="text-align:left;padding:12px 16px;border-bottom:2px solid #334155;color:#94a3b8;font-weight:600">Company</th>
              <th style="text-align:center;padding:12px;border-bottom:2px solid #334155;color:#94a3b8">Hero Quality</th>
              <th style="text-align:center;padding:12px;border-bottom:2px solid #334155;color:#94a3b8">Leadership Portrait</th>
              <th style="text-align:center;padding:12px;border-bottom:2px solid #334155;color:#94a3b8">Authenticity</th>
              <th style="text-align:center;padding:12px;border-bottom:2px solid #334155;color:#94a3b8">Diversity Representation</th>
              <th style="text-align:center;padding:12px;border-bottom:2px solid #334155;color:#94a3b8">Overall Score</th>
            </tr>
          </thead>
          <tbody>
            ${[
              {company:'Adobe',group:'Technology',scores:[5,5,5,5],note:'Best-in-class. Creative photography as brand expression.'},
              {company:'Accenture',group:'Big 4 / Consulting',scores:[5,5,4,5],note:'Environmental portraits, authentic culture photography.'},
              {company:'IBM',group:'Technology',scores:[5,4,5,5],note:'Cinematic, documentary, distinctive.'},
              {company:'Microsoft',group:'Technology',scores:[4,5,4,5],note:'Mission-narrative photography system. Alt text precision.'},
              {company:'Bayer',group:'Industry Competitor',scores:[4,5,5,4],note:'Human impact photography. Journalistic quality.'},
              {company:'SAP',group:'Technology',scores:[4,4,4,5],note:'Warm tone. Strong diversity. Life@SAP narrative.'},
              {company:'EY',group:'Big 4',scores:[4,4,3,4],note:'Typography-photography hybrid. Yellow brand integration.'},
              {company:'Deloitte',group:'Big 4',scores:[4,4,4,4],note:'Environmental approach. Named employee stories.'},
              {company:'BASF',group:'Industry Competitor',scores:[3,3,4,3],note:'Science-in-action photography. German aesthetic.'},
              {company:'PwC',group:'Big 4',scores:[3,3,3,4],note:'Location specific. Day-in-the-life format.'},
              {company:'Dow',group:'Industry Competitor',scores:[4,3,3,3],note:'Epic scale photography. Material science at world scale.'},
              {company:'Honeywell',group:'Industrial',scores:[3,3,2,3],note:'Industrial authentic. Mix of custom and stock.'},
              {company:'PepsiCo',group:'Consumer',scores:[3,3,3,4],note:'Vibrant lifestyle. Consumer-brand influence.'},
              {company:'KPMG',group:'Big 4',scores:[3,2,2,3],note:'Improving from conservative base. Environmental journey started.'},
              {company:'Syngenta',group:'Industry Competitor',scores:[3,3,3,3],note:'India visible. Geographic diversity strength.'},
              {company:'DuPont (Current)',group:'Own Brand',scores:[2,1,1,2],note:'CRITICAL GAPS: Generic photography, formal headshots, no Hyderabad context.'},
            ].map(({company,group,scores,note},i)=>{
              const avg = (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1);
              const bg = company.includes('DuPont') ? '#1a0a0a' : i%2===0 ? '#0f172a' : '#1e293b';
              const scoreColor = (s) => s>=4.5?'#10b981':s>=3.5?'#3b82f6':s>=2.5?'#f59e0b':'#ef4444';
              const stars = s => '★'.repeat(Math.round(s))+'☆'.repeat(5-Math.round(s));
              return `<tr style="background:${bg};border-bottom:1px solid #1e293b">
                <td style="padding:10px 16px">
                  <div style="font-weight:600;${company.includes('DuPont')?'color:#ef4444':''}">${company}</div>
                  <div style="font-size:11px;color:#64748b">${group}</div>
                </td>
                ${scores.map(s=>`<td style="text-align:center;padding:10px;color:${scoreColor(s)};font-size:18px">${stars(s)}</td>`).join('')}
                <td style="text-align:center;padding:10px">
                  <div style="display:inline-block;background:${scoreColor(parseFloat(avg))};color:#000;font-weight:800;font-size:14px;padding:4px 12px;border-radius:20px">${avg}/5</div>
                </td>
              </tr>
              <tr style="background:${bg};border-bottom:1px solid #334155">
                <td colspan="6" style="padding:2px 16px 10px;font-size:12px;color:#64748b;font-style:italic">${note}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    `,
  },
  {
    filename: 'hero_layout_patterns.png',
    html: `
      <div style="font-family:'Segoe UI',sans-serif;background:#0f172a;color:#e2e8f0;padding:40px;width:1880px;min-height:1000px">
        <h1 style="margin:0 0 8px;font-size:28px;font-weight:800">HERO BANNER LAYOUT PATTERNS — Benchmark Analysis</h1>
        <p style="color:#64748b;margin:0 0 32px;font-size:14px">6 distinct layout patterns identified across 16 benchmark companies</p>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px">
          ${[
            {
              pattern:'Pattern A: Full-Viewport Immersive',
              companies:'Accenture, EY, IBM',
              spec:'100vw × 100vh. Text centred or left-aligned. Human ratio 50–70%.',
              pros:'Maximum visual impact. Communicates scale and ambition.',
              cons:'Below-fold content may not be seen. Heavy on mobile.',
              recommendation:'RECOMMENDED for DuPont Hyderabad homepage hero.',
              color:'#10b981',
            },
            {
              pattern:'Pattern B: 75% Viewport Height',
              companies:'Deloitte, Bayer, SAP',
              spec:'100vw × 75vh. Strong narrative text block. Environmental photography.',
              pros:'Balance of impact and usability. Shows some content below fold.',
              cons:'Less immersive than Pattern A.',
              recommendation:'RECOMMENDED for DuPont Hyderabad inner pages.',
              color:'#3b82f6',
            },
            {
              pattern:'Pattern C: Compact Commercial',
              companies:'Microsoft (homepage), PepsiCo',
              spec:'100vw × 40–45vh. Product-focused. Carousel navigation.',
              pros:'Fast scroll to content. Good for multi-message campaigns.',
              cons:'Lower emotional impact. Less suited for mission-led companies.',
              recommendation:'For campaign/event pages only.',
              color:'#f59e0b',
            },
            {
              pattern:'Pattern D: Text-Hero with Image Strip',
              companies:'PwC, KPMG',
              spec:'Large text statement as primary element. Photography secondary.',
              pros:'Message clarity. Strong for purpose-driven positioning.',
              cons:'Weaker emotional impact from photography.',
              recommendation:'Consider for DuPont purpose pages.',
              color:'#8b5cf6',
            },
            {
              pattern:'Pattern E: Photography Grid',
              companies:'Adobe, SAP Careers',
              spec:'Multiple photography tiles. Grid layout. Equal visual weight.',
              pros:'Shows range of people and contexts. Diversity visible.',
              cons:'No single narrative focus. Can feel cluttered.',
              recommendation:'For DuPont Hyderabad Careers page specifically.',
              color:'#ec4899',
            },
            {
              pattern:'Pattern F: Cinematic Narrative Strips',
              companies:'Microsoft About, Dow',
              spec:'Alternating text/image horizontal strips. Each section = one chapter.',
              pros:'Deep storytelling. High scroll engagement. SEO friendly.',
              cons:'Requires significant photography library.',
              recommendation:'RECOMMENDED for DuPont About/Culture pages.',
              color:'#06b6d4',
            },
          ].map(({pattern,companies,spec,pros,cons,recommendation,color})=>`
            <div style="background:#1e293b;border-radius:8px;overflow:hidden;border-top:4px solid ${color}">
              <div style="padding:20px">
                <h3 style="margin:0 0 8px;font-size:15px;color:${color}">${pattern}</h3>
                <div style="font-size:12px;color:#64748b;margin-bottom:12px">Used by: ${companies}</div>
                <div style="font-size:13px;color:#94a3b8;margin-bottom:12px">${spec}</div>
                <div style="font-size:12px;margin-bottom:4px"><span style="color:#10b981">✓</span> ${pros}</div>
                <div style="font-size:12px;margin-bottom:12px"><span style="color:#ef4444">✗</span> ${cons}</div>
                <div style="background:#0f172a;padding:10px;border-radius:4px;font-size:12px;font-weight:600;color:${color}">${recommendation}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `,
  },
  {
    filename: 'dupont_photography_brief.png',
    html: `
      <div style="font-family:'Segoe UI',sans-serif;background:#0f172a;color:#e2e8f0;padding:40px;width:1880px;min-height:1000px">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px">
          <div style="background:#cc1000;width:6px;height:40px;border-radius:3px"></div>
          <h1 style="margin:0;font-size:28px;font-weight:800">DUPONT HYDERABAD — Photography Production Brief</h1>
        </div>
        <p style="color:#64748b;font-size:14px;margin:0 0 32px;padding-left:22px">Priority shot list: 32 essential images for website refresh and employer brand</p>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:16px">
          ${[
            {cat:'HERO SHOTS',color:'#cc1000',shots:[
              {n:'H-01',title:'Discovery Moment',brief:'2 scientists examining material under characterisation equipment, mid-discussion, golden-hour window light'},
              {n:'H-02',title:'Collaboration Walk',brief:'4–5 person team walking innovation corridor, candid mid-conversation, architecture visible'},
              {n:'H-03',title:'Campus Establishing',brief:'Exterior, golden hour, human scale reference, clean dramatic sky'},
              {n:'H-04',title:'Individual Scientist',brief:'Woman/man in lab, 2/3 portrait, confident, DuPont material sample in hands, shallow DOF'},
              {n:'H-05',title:'Real-World Impact',brief:'DuPont material in application — protective equipment on industrial worker or construction site'},
              {n:'H-06',title:'Leadership Moment',brief:'Site head on campus, environmental portrait, innovation context'},
              {n:'H-07',title:'Team Milestone',brief:'Authentic celebration of result — not staged, genuine energy'},
              {n:'H-08',title:'Campus at Night',brief:'Illuminated building, Hyderabad urban context visible, warmth in windows'},
            ]},
            {cat:'LEADERSHIP',color:'#3b82f6',shots:[
              {n:'L-01',title:'Site Head Portrait',brief:'Campus exterior, 2/3 body, confident, 85mm f/2.8, natural fill'},
              {n:'L-02',title:'R&D Director',brief:'Materials lab context, examining sample, environment contextualised'},
              {n:'L-03',title:'Manufacturing Director',brief:'Production facility, appropriate PPE, scale of facility visible'},
              {n:'L-04',title:'HR Director',brief:'L&D space or collaborative office, warm and approachable'},
              {n:'L-05',title:'BU Lead — Electronics',brief:'Electronics lab context, characterisation equipment visible'},
              {n:'L-06',title:'BU Lead — Safety',brief:'Safety materials lab, Kevlar/Nomex context visible'},
              {n:'L-07',title:'Early-Career Female',brief:'Technical role, lab context, confident, 2/3 portrait'},
              {n:'L-08',title:'Early-Career Male',brief:'Business or technical role, collaborative space context'},
            ]},
            {cat:'COLLABORATION',color:'#10b981',shots:[
              {n:'C-01',title:'Lab Team Discussion',brief:'3 scientists, analysis equipment, animated conversation, candid'},
              {n:'C-02',title:'Whiteboard Sprint',brief:'4 people, real technical content on board, active session'},
              {n:'C-03',title:'Knowledge Transfer',brief:'Senior explaining to junior at equipment, mentorship moment'},
              {n:'C-04',title:'Cross-Team Meeting',brief:'Mixed business + technical team, genuine engagement'},
              {n:'C-05',title:'Informal Connection',brief:'2 colleagues walking/talking, corridor, candid energy'},
              {n:'C-06',title:'Learning Session',brief:'Training or workshop in progress, engagement visible'},
              {n:'C-07',title:'Safety Culture Moment',brief:'PPE protocol in production context, pride in safety'},
              {n:'C-08',title:'Cultural Celebration',brief:'DuPont Hyderabad cultural event — authentic, inclusive'},
            ]},
            {cat:'FACILITY & ARCHITECTURE',color:'#f59e0b',shots:[
              {n:'A-01',title:'Campus Exterior — Hero',brief:'Definitive establishing shot, golden hour, complete facade, 2–3 people at entrance'},
              {n:'A-02',title:'Reception / Lobby',brief:'Interior architecture, volume and design quality, brand integration visible'},
              {n:'A-03',title:'Innovation Corridor',brief:'Collaborative modern space, wide angle 24mm, depth of space'},
              {n:'A-04',title:'R&D Laboratory',brief:'State-of-the-art equipment, clean modern aesthetic, human present'},
              {n:'A-05',title:'Production Facility',brief:'Scale and technology, human present for scale reference'},
              {n:'A-06',title:'Green Space / Outdoor',brief:'Campus lifestyle, Hyderabad natural context'},
              {n:'A-07',title:'Aerial / Elevated Campus',brief:'Scale and Hyderabad urban context, drone or elevated platform'},
              {n:'A-08',title:'DuPont Brand Moment',brief:'Product samples / material library / brand wall — unique visual asset'},
            ]},
          ].map(({cat,color,shots})=>`
            <div>
              <div style="background:${color};padding:10px 16px;border-radius:4px;font-size:12px;font-weight:800;letter-spacing:2px;margin-bottom:12px">${cat}</div>
              <div style="display:flex;flex-direction:column;gap:8px">
                ${shots.map(({n,title,brief})=>`
                  <div style="background:#1e293b;padding:12px;border-radius:6px;border-left:3px solid ${color}">
                    <div style="display:flex;gap:8px;align-items:baseline;margin-bottom:4px">
                      <span style="font-size:11px;font-weight:700;color:${color}">${n}</span>
                      <span style="font-size:13px;font-weight:600">${title}</span>
                    </div>
                    <p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.5">${brief}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `,
  },
];

async function main() {
  console.log('Generating website analysis cards...');
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  for (const { filename, html } of ANALYSES) {
    const outputPath = path.join(OUTPUT_DIR, filename);
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0f172a">${html}</body></html>`);
    await page.waitForTimeout(500);
    await page.screenshot({ path: outputPath, fullPage: true });
    console.log(`✓ Generated: ${filename}`);
  }

  await browser.close();
  console.log('Analysis cards complete.');
}

main().catch(console.error);
