/**
 * DuPont Hyderabad Photography Benchmark Study
 * Screenshot capture automation using Playwright
 * Targets: 16 global companies across 5 page types per company
 */

const { chromium } = require('../node_modules/playwright');
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, 'screenshots');
const REPORT_DIR = path.join(__dirname, 'report');

const CATEGORIES = {
  homepage: '01_Hero_Banners',
  leadership: '02_Leadership',
  careers: '04_Careers',
  culture: '03_Collaboration',
  diversity: '07_Diversity',
};

const COMPANIES = [
  // BIG 4
  {
    name: 'Deloitte',
    slug: 'deloitte',
    urls: {
      homepage: 'https://www2.deloitte.com/us/en.html',
      leadership: 'https://www2.deloitte.com/us/en/pages/about-deloitte/articles/leadership.html',
      careers: 'https://www2.deloitte.com/us/en/pages/careers/articles/life-at-deloitte.html',
      culture: 'https://www2.deloitte.com/us/en/pages/about-deloitte/topics/inclusion.html',
      diversity: 'https://www2.deloitte.com/us/en/pages/about-deloitte/articles/diversity-equity-inclusion.html',
    },
  },
  {
    name: 'PwC',
    slug: 'pwc',
    urls: {
      homepage: 'https://www.pwc.com/us/en.html',
      leadership: 'https://www.pwc.com/gx/en/about/global-annual-review.html',
      careers: 'https://www.pwc.com/us/en/careers.html',
      culture: 'https://www.pwc.com/us/en/about-us/purpose-and-values.html',
      diversity: 'https://www.pwc.com/us/en/about-us/diversity.html',
    },
  },
  {
    name: 'EY',
    slug: 'ey',
    urls: {
      homepage: 'https://www.ey.com/en_us',
      leadership: 'https://www.ey.com/en_us/about-us',
      careers: 'https://www.ey.com/en_us/careers',
      culture: 'https://www.ey.com/en_us/careers/experienced-professionals/a-better-working-world',
      diversity: 'https://www.ey.com/en_us/diversity-inclusiveness',
    },
  },
  {
    name: 'KPMG',
    slug: 'kpmg',
    urls: {
      homepage: 'https://kpmg.com/us/en/home.html',
      leadership: 'https://kpmg.com/us/en/home/about.html',
      careers: 'https://kpmg.com/us/en/careers.html',
      culture: 'https://kpmg.com/us/en/home/about/values.html',
      diversity: 'https://kpmg.com/us/en/home/about/diversity-and-inclusion.html',
    },
  },
  // GLOBAL CORPORATE BENCHMARKS
  {
    name: 'Microsoft',
    slug: 'microsoft',
    urls: {
      homepage: 'https://www.microsoft.com/en-us/',
      leadership: 'https://www.microsoft.com/en-us/about',
      careers: 'https://careers.microsoft.com/us/en',
      culture: 'https://www.microsoft.com/en-us/about/values',
      diversity: 'https://www.microsoft.com/en-us/diversity/',
    },
  },
  {
    name: 'Accenture',
    slug: 'accenture',
    urls: {
      homepage: 'https://www.accenture.com/us-en',
      leadership: 'https://www.accenture.com/us-en/about/leadership/leadership-index',
      careers: 'https://www.accenture.com/us-en/careers',
      culture: 'https://www.accenture.com/us-en/about/inclusion-diversity/us-workforce',
      diversity: 'https://www.accenture.com/us-en/about/inclusion-diversity/index',
    },
  },
  {
    name: 'Honeywell',
    slug: 'honeywell',
    urls: {
      homepage: 'https://www.honeywell.com/us/en',
      leadership: 'https://www.honeywell.com/us/en/company',
      careers: 'https://careers.honeywell.com/us/en',
      culture: 'https://www.honeywell.com/us/en/company/responsibility',
      diversity: 'https://www.honeywell.com/us/en/company/esg/inclusion-and-diversity',
    },
  },
  {
    name: 'PepsiCo',
    slug: 'pepsico',
    urls: {
      homepage: 'https://www.pepsico.com/',
      leadership: 'https://www.pepsico.com/our-company/leadership',
      careers: 'https://www.pepsico.com/our-company/careers',
      culture: 'https://www.pepsico.com/our-impact/esg-topics-a-z/diversity-equity-and-inclusion',
      diversity: 'https://www.pepsico.com/our-impact/esg-topics-a-z/diversity-equity-and-inclusion',
    },
  },
  {
    name: 'IBM',
    slug: 'ibm',
    urls: {
      homepage: 'https://www.ibm.com/us-en',
      leadership: 'https://www.ibm.com/about',
      careers: 'https://www.ibm.com/careers',
      culture: 'https://www.ibm.com/policy/be-equal/',
      diversity: 'https://www.ibm.com/impact/be-equal',
    },
  },
  {
    name: 'SAP',
    slug: 'sap',
    urls: {
      homepage: 'https://www.sap.com/index.html',
      leadership: 'https://www.sap.com/about/company/leadership.html',
      careers: 'https://www.sap.com/about/careers.html',
      culture: 'https://www.sap.com/about/company/diversity.html',
      diversity: 'https://www.sap.com/about/company/diversity.html',
    },
  },
  {
    name: 'Adobe',
    slug: 'adobe',
    urls: {
      homepage: 'https://www.adobe.com/',
      leadership: 'https://www.adobe.com/about-adobe/fast-facts.html',
      careers: 'https://www.adobe.com/careers.html',
      culture: 'https://www.adobe.com/diversity/equity-inclusion.html',
      diversity: 'https://www.adobe.com/diversity/equity-inclusion.html',
    },
  },
  // INDUSTRY COMPETITORS
  {
    name: 'DuPont',
    slug: 'dupont',
    urls: {
      homepage: 'https://www.dupont.com/',
      leadership: 'https://www.dupont.com/about.html',
      careers: 'https://www.dupont.com/careers.html',
      culture: 'https://www.dupont.com/careers.html',
      diversity: 'https://www.dupont.com/about/inclusion-diversity.html',
    },
  },
  {
    name: 'BASF',
    slug: 'basf',
    urls: {
      homepage: 'https://www.basf.com/us/en.html',
      leadership: 'https://www.basf.com/us/en/who-we-are.html',
      careers: 'https://www.basf.com/us/en/careers.html',
      culture: 'https://www.basf.com/us/en/who-we-are/sustainability/employees.html',
      diversity: 'https://www.basf.com/us/en/who-we-are/sustainability/employees/diversity.html',
    },
  },
  {
    name: 'Dow',
    slug: 'dow',
    urls: {
      homepage: 'https://www.dow.com/en-us.html',
      leadership: 'https://www.dow.com/en-us/about-dow.html',
      careers: 'https://careers.dow.com/',
      culture: 'https://careers.dow.com/content/life-at-dow/',
      diversity: 'https://www.dow.com/en-us/about-dow/inclusion-diversity.html',
    },
  },
  {
    name: 'Bayer',
    slug: 'bayer',
    urls: {
      homepage: 'https://www.bayer.com/en/',
      leadership: 'https://www.bayer.com/en/company/executive-committee',
      careers: 'https://career.bayer.com/en/',
      culture: 'https://www.bayer.com/en/commitment/we-are-bayer',
      diversity: 'https://www.bayer.com/en/commitment/diversity-and-inclusion',
    },
  },
  {
    name: 'Syngenta',
    slug: 'syngenta',
    urls: {
      homepage: 'https://www.syngenta.com/',
      leadership: 'https://www.syngenta.com/en/about-syngenta',
      careers: 'https://www.syngenta.com/en/careers',
      culture: 'https://www.syngenta.com/en/about-syngenta/our-people',
      diversity: 'https://www.syngenta.com/en/about-syngenta/diversity-and-inclusion',
    },
  },
];

// Cookie/consent banner selectors to dismiss
const COOKIE_SELECTORS = [
  '[id*="accept"]', '[id*="cookie"]', '[class*="accept-all"]',
  '[class*="cookie-accept"]', 'button[data-testid*="accept"]',
  '#onetrust-accept-btn-handler', '.cc-btn.cc-accept-all',
  '[aria-label*="Accept all"]', '[aria-label*="accept cookies"]',
  'button:has-text("Accept all")', 'button:has-text("Accept All")',
  'button:has-text("Accept Cookies")', 'button:has-text("I Agree")',
  'button:has-text("Allow all")', 'button:has-text("Allow All")',
  '.optanon-allow-all', '#CybotCookiebotDialogBodyButtonAccept',
];

const results = [];

async function dismissCookieBanner(page) {
  for (const selector of COOKIE_SELECTORS) {
    try {
      const el = page.locator(selector).first();
      const visible = await el.isVisible({ timeout: 1500 }).catch(() => false);
      if (visible) {
        await el.click({ timeout: 2000 }).catch(() => {});
        await page.waitForTimeout(800);
        return;
      }
    } catch {
      // continue trying other selectors
    }
  }
}

async function captureScreenshot(page, url, outputPath, label) {
  try {
    console.log(`  → Capturing: ${label}`);
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2500);
    await dismissCookieBanner(page);
    await page.waitForTimeout(1000);

    // Scroll slightly to trigger lazy-load
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    await page.screenshot({ path: outputPath, fullPage: false });

    const title = await page.title().catch(() => label);
    console.log(`  ✓ Saved: ${path.basename(outputPath)} — "${title}"`);
    return { success: true, url, title, file: path.basename(outputPath) };
  } catch (err) {
    console.log(`  ✗ Failed: ${label} — ${err.message.split('\n')[0]}`);

    // Save a placeholder screenshot showing the error
    try {
      await page.setContent(`
        <html style="background:#1a1a2e;color:#e0e0e0;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0">
          <div style="text-align:center;max-width:600px;padding:40px">
            <h2 style="color:#ff6b6b">Screenshot Capture Failed</h2>
            <p><strong>Company:</strong> ${label}</p>
            <p><strong>URL:</strong> ${url}</p>
            <p style="color:#aaa;font-size:14px">The website likely uses bot-detection. Manual capture required.</p>
          </div>
        </html>`);
      await page.screenshot({ path: outputPath });
    } catch {
      // ignore placeholder failure
    }
    return { success: false, url, title: label, file: path.basename(outputPath), error: err.message.split('\n')[0] };
  }
}

async function main() {
  console.log('\n=== DuPont Hyderabad Photography Benchmark — Screenshot Capture ===\n');
  console.log(`Targeting ${COMPANIES.length} companies across ${Object.keys(CATEGORIES).length} page types\n`);

  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920,1080',
    ],
  });

  for (const company of COMPANIES) {
    console.log(`\n[${company.name}]`);

    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      ignoreHTTPSErrors: true,
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      extraHTTPHeaders: {
        'Accept-Language': 'en-US,en;q=0.9',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      },
    });

    const page = await context.newPage();

    for (const [pageType, categoryDir] of Object.entries(CATEGORIES)) {
      const url = company.urls[pageType];
      if (!url) continue;

      const fileName = `${company.slug}_${pageType}.png`;
      const outputPath = path.join(BASE_DIR, categoryDir, fileName);

      const result = await captureScreenshot(page, url, outputPath, `${company.name} — ${pageType}`);
      result.company = company.name;
      result.category = categoryDir;
      result.pageType = pageType;
      results.push(result);

      // Polite delay between requests
      await page.waitForTimeout(1500);
    }

    await context.close();
  }

  await browser.close();

  // Write results JSON for report generation
  fs.writeFileSync(
    path.join(REPORT_DIR, 'capture_results.json'),
    JSON.stringify(results, null, 2)
  );

  const success = results.filter((r) => r.success).length;
  const failed = results.filter((r) => !r.success).length;

  console.log(`\n=== Capture Complete ===`);
  console.log(`✓ Successful: ${success}`);
  console.log(`✗ Failed/Blocked: ${failed}`);
  console.log(`Total: ${results.length}`);
  console.log(`\nResults saved to: ${path.join(REPORT_DIR, 'capture_results.json')}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
