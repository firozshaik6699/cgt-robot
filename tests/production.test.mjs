import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function readText(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), 'utf8');
}

describe('1. Domain Migration & Technical SEO (cgtofficial.com)', () => {
  it('index.html has canonical, Open Graph, non-blocking font stylesheet, and valid JSON-LD pointing strictly to https://cgtofficial.com', () => {
    const html = readText('index.html');
    assert.ok(!html.includes('cgt-robot.vercel.app'), 'Legacy vercel domain must not appear in index.html');
    assert.match(html, /<link rel="canonical" href="https:\/\/cgtofficial\.com\/"\s*\/>/);
    assert.match(html, /<meta property="og:url" content="https:\/\/cgtofficial\.com\/"\s*\/>/);
    assert.match(html, /scene\.splinecode[\s\S]*as="fetch"/);
    assert.match(html, /fonts\.googleapis\.com\/css2\?family=Inter/);

    // Ensure render-blocking @import was removed from CSS
    const css = readText('src/styles/index.css');
    assert.ok(!css.includes('@import url('), 'Render-blocking CSS @import must be removed from index.css');

    const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    assert.ok(ldMatch, 'JSON-LD script block must exist in index.html');
    const parsedLd = JSON.parse(ldMatch[1]);
    assert.ok(Array.isArray(parsedLd['@graph']), 'JSON-LD must contain @graph');
    const org = parsedLd['@graph'][0];
    assert.equal(org.url, 'https://cgtofficial.com');
    assert.equal(org.logo.url, 'https://cgtofficial.com/logo.png');
  });

  it('robots.txt and sitemap.xml reference https://cgtofficial.com for all routes', () => {
    const robots = readText('public/robots.txt');
    assert.match(robots, /Sitemap:\s*https:\/\/cgtofficial\.com\/sitemap\.xml/);
    assert.ok(!robots.includes('cgt-robot.vercel.app'));

    const sitemap = readText('public/sitemap.xml');
    assert.ok(!sitemap.includes('cgt-robot.vercel.app'));
    for (const route of ['/', '/partnership/syncrobiz', '/blog', '/privacy', '/terms']) {
      assert.ok(
        sitemap.includes(`<loc>https://cgtofficial.com${route}</loc>`),
        `Missing ${route} in sitemap.xml`
      );
    }
  });

  it('every route page mounts dynamic <SEO /> metadata and NotFound sets noindex', () => {
    for (const page of [
      'src/pages/HomePage.tsx',
      'src/pages/SyncrobizPartnership.tsx',
      'src/pages/Blog.tsx',
      'src/pages/PrivacyPolicy.tsx',
      'src/pages/TermsOfService.tsx',
      'src/pages/NotFound.tsx',
    ]) {
      const content = readText(page);
      assert.ok(content.includes('<SEO'), `${page} must include <SEO />`);
    }
    assert.match(readText('src/pages/NotFound.tsx'), /noindex/);
  });

  it('zero legacy cgt-robot.vercel.app references remain in source code', () => {
    const scanDir = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          scanDir(full);
        } else if (/\.(ts|tsx|js|json|html|xml|txt)$/.test(entry.name)) {
          const txt = fs.readFileSync(full, 'utf8');
          assert.ok(!txt.includes('cgt-robot.vercel.app'), `Legacy domain found in ${full}`);
        }
      }
    };
    scanDir(path.join(rootDir, 'src'));
    scanDir(path.join(rootDir, 'public'));
  });
});

describe('2. Brand Logo, Compressed Case-Study Assets & Dead-Code Cleanup', () => {
  it('transparent PNG logo assets exist with valid RGBA header (colorType = 6) and no stray unnamed.jpg', () => {
    assert.equal(fs.existsSync(path.join(rootDir, 'unnamed.jpg')), false, 'Raw unnamed.jpg must be removed');

    for (const rel of ['src/assets/logo_metallic_transparent.png', 'public/logo.png']) {
      const buf = fs.readFileSync(path.join(rootDir, rel));
      assert.ok(buf.length > 20_000, `${rel} must be non-trivial size`);
      assert.equal(buf[0], 0x89);
      assert.equal(buf[1], 0x50);
      assert.equal(buf[2], 0x4e);
      assert.equal(buf[3], 0x47);
      assert.equal(buf[25], 6, `${rel} must have RGBA alpha channel`);
    }

    const favicon = readText('public/favicon.svg');
    assert.match(favicon, /<svg[\s\S]*#F4751E/);
  });

  it('29+ MB of unused assets, dead component barrels, sparkles demos, and unused packages are purged', () => {
    assert.equal(fs.existsSync(path.join(rootDir, 'public/images')), false, 'Unused public/images/ directory must be deleted');
    assert.equal(fs.existsSync(path.join(rootDir, 'src/components/ui/sparkles.tsx')), false, 'Unused sparkles.tsx must be deleted');
    assert.equal(fs.existsSync(path.join(rootDir, 'src/components/ui/sparkles-demo.tsx')), false, 'Unused sparkles-demo.tsx must be deleted');

    const rootComponentEntries = fs.readdirSync(path.join(rootDir, 'src/components'), { withFileTypes: true });
    const strayBarrels = rootComponentEntries.filter((e) => e.isFile() && e.name.endsWith('.tsx'));
    assert.equal(strayBarrels.length, 0, 'All unused 1-line barrel files in src/components/*.tsx must be removed');

    const pkg = JSON.parse(readText('package.json'));
    for (const deadPkg of ['@tsparticles/engine', '@tsparticles/react', '@tsparticles/slim', 'cloudinary']) {
      assert.equal(deadPkg in (pkg.dependencies || {}), false, `${deadPkg} must be removed from dependencies`);
    }

    // Verify all 5 case-study images are optimized JPGs (< 150 KB each) and uncompressed PNGs are gone
    for (const base of ['fleet-master-msmt', 'muhasib', 'nexora', 'pizza', 'toonhub']) {
      assert.equal(fs.existsSync(path.join(rootDir, `src/assets/${base}.png`)), false, `Uncompressed ${base}.png must be removed`);
      const jpgPath = path.join(rootDir, `src/assets/${base}.jpg`);
      assert.equal(fs.existsSync(jpgPath), true, `Optimized ${base}.jpg must exist`);
      const stat = fs.statSync(jpgPath);
      assert.ok(stat.size > 10_000 && stat.size < 160_000, `${base}.jpg size (${stat.size}B) must be optimized under 160 KB`);
    }
  });
});

describe('3. Contact API Resilience, Security & Custom Currency Budget UX', () => {
  it('validates payloads (including INR/custom currencies & JSON string body), escapes HTML, and returns clean 503 instead of crashing 500 when RESEND_API_KEY is absent', async () => {
    const contactMod = await import('../api/contact.ts');
    const { escapeHtml, validateContactPayload, default: handler } = contactMod;

    // HTML escaping
    assert.equal(
      escapeHtml('<script>alert("xss")</script> & \'quote\''),
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; &#39;quote&#39;'
    );

    // Payload validation
    assert.equal(validateContactPayload(null).valid, false);
    assert.equal(validateContactPayload('{bad-json').valid, false);
    assert.equal(validateContactPayload({ name: 'A' }).valid, false);
    assert.equal(
      validateContactPayload({
        name: 'Firoz',
        email: 'not-an-email',
        service: 'AI Automation',
        budget: '₹75,000 INR',
        message: 'Build AI agent',
      }).valid,
      false
    );

    // Supports INR / global user-filled currency budget & stringified JSON payload
    const validRes = validateContactPayload(
      JSON.stringify({
        name: '  Firoz Shaik  ',
        email: 'firoz@cgtofficial.com',
        service: 'AI Automation & Custom Agents',
        budget: '  ₹1,50,000 INR  ',
        message: 'Need autonomous workflow system.',
      })
    );
    assert.equal(validRes.valid, true);
    assert.equal(validRes.data.name, 'Firoz Shaik');
    assert.equal(validRes.data.budget, '₹1,50,000 INR');

    let statusCode = 0;
    let jsonBody = null;
    const headers = {};
    const mockRes = {
      setHeader(k, v) {
        headers[k] = v;
      },
      status(code) {
        statusCode = code;
        return this;
      },
      json(payload) {
        jsonBody = payload;
        return this;
      },
    };

    // Handler 405 check + Cache-Control header
    await handler({ method: 'GET', body: {} }, mockRes);
    assert.equal(statusCode, 405);
    assert.equal(headers['Cache-Control'], 'no-store, max-age=0');
    assert.ok(jsonBody.error);

    // Handler 400 check on invalid payload
    await handler({ method: 'POST', body: { name: '', email: 'bad' } }, mockRes);
    assert.equal(statusCode, 400);
    assert.equal(jsonBody.code, 'VALIDATION_ERROR');

    // Handler 503 graceful check when RESEND_API_KEY is missing (must NOT throw unhandled 500)
    const prevKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;
    try {
      await handler(
        {
          method: 'POST',
          body: {
            name: 'Firoz Shaik',
            email: 'firoz@cgtofficial.com',
            service: 'AI Automation & Custom Agents',
            budget: '₹85,000 INR',
            message: 'Production inquiry check',
          },
        },
        mockRes
      );
      assert.equal(statusCode, 503);
      assert.equal(jsonBody.ok, false);
      assert.equal(jsonBody.code, 'MAILER_UNCONFIGURED');
    } finally {
      if (prevKey !== undefined) process.env.RESEND_API_KEY = prevKey;
    }
  });

  it('ContactModal replaces hardcoded dollar dropdown with user-fillable budget input, currency notice, sessionStorage draft persistence, and Direct Dispatch fallback', () => {
    const modalCode = readText('src/components/layout/ContactModal.tsx');
    assert.ok(!modalCode.includes('Under $5,000'), 'Hardcoded USD dropdown options must be removed');
    assert.ok(!modalCode.includes('$5,000 - $15,000'), 'Hardcoded USD dropdown options must be removed');
    assert.match(modalCode, /Mention currency with your budget/i, 'Currency notice above budget blank must be present');
    assert.match(modalCode, /type="text"[\s\S]*name="budget"/, 'Budget field must be a user-fillable text input');
    assert.ok(modalCode.includes('cgt_contact_draft_v1'), 'ContactModal must persist draft in sessionStorage');
    assert.ok(modalCode.includes('Send Pre-Filled Brief via WhatsApp'), 'Direct Dispatch fallback must be present');
  });
});

describe('4. SessionStorage, Scroll-Lock Reference Counting, Cache Headers & iOS WebGL Guardrails', () => {
  it('storage.ts reference-counted scroll lock prevents multi-overlay clobbering', async () => {
    const prevDoc = globalThis.document;
    globalThis.document = {
      body: { style: { overflow: '' } },
      documentElement: { style: { overflow: '' } },
    };
    try {
      const { acquireBodyScrollLock } = await import('../src/lib/storage.ts');
      const releasePreloader = acquireBodyScrollLock();
      assert.equal(globalThis.document.body.style.overflow, 'hidden');

      const releaseModal = acquireBodyScrollLock();
      assert.equal(globalThis.document.body.style.overflow, 'hidden');

      // Releasing modal while preloader is still active MUST keep overflow hidden
      releaseModal();
      assert.equal(globalThis.document.body.style.overflow, 'hidden');

      // Double-calling releaseModal is idempotent
      releaseModal();
      assert.equal(globalThis.document.body.style.overflow, 'hidden');

      // Releasing final lock restores scrolling cleanly
      releasePreloader();
      assert.equal(globalThis.document.body.style.overflow, '');
    } finally {
      globalThis.document = prevDoc;
    }
  });

  it('vercel.json sets Cache-Control headers and rewrites SPA routes without intercepting /api or static files', () => {
    const vercelConfig = JSON.parse(readText('vercel.json'));
    assert.ok(Array.isArray(vercelConfig.headers) && vercelConfig.headers.length >= 3, 'Cache-Control headers must be configured');
    assert.equal(vercelConfig.rewrites.length, 1);
    const pattern = vercelConfig.rewrites[0].source;
    const regex = new RegExp(`^${pattern}$`);

    assert.ok(regex.test('/partnership/syncrobiz'));
    assert.ok(regex.test('/blog'));
    assert.ok(regex.test('/privacy'));

    assert.equal(regex.test('/api/contact'), false);
    assert.equal(regex.test('/robots.txt'), false);
    assert.equal(regex.test('/sitemap.xml'), false);
    assert.equal(regex.test('/logo.png'), false);
    assert.equal(regex.test('/favicon.svg'), false);
  });

  it('SplineScene and Preloader enforce iOS WebKit WebGL, VRAM & sessionStorage warm-boot invariants', () => {
    const splineCode = readText('src/components/ui/SplineScene.tsx');
    assert.ok(!splineCode.includes('_renderer.setPixelRatio'), 'Must not mutate internal _renderer.setPixelRatio on iOS');
    assert.ok(!splineCode.includes('layout paint'), 'Must not apply contain: layout paint over WebGL canvas');
    assert.ok(splineCode.includes('webglcontextlost'), 'Must handle iOS webglcontextlost recovery');

    const preloaderCode = readText('src/components/ui/Preloader.tsx');
    assert.ok(!preloaderCode.includes("filter: 'blur"), 'Must not animate fullscreen CSS blur filter over WebGL');
    assert.ok(preloaderCode.includes('cgt-spline-loaded'), 'Preloader must wait for cgt-spline-loaded');
    assert.ok(preloaderCode.includes('cgt_robot_warm_v1'), 'Preloader must track warm session in sessionStorage');
  });

  it('dist/ production bundle contains all required static, lazy-chunked, and compressed JPG artifacts', () => {
    const distDir = path.join(rootDir, 'dist');
    assert.ok(fs.existsSync(distDir), 'dist/ directory must exist (run npm run build first)');
    assert.equal(fs.existsSync(path.join(distDir, 'images')), false, 'dist/images must not exist');
    for (const file of ['index.html', 'robots.txt', 'sitemap.xml', 'logo.png', 'favicon.svg']) {
      assert.ok(fs.existsSync(path.join(distDir, file)), `dist/${file} must exist`);
    }
    const assets = fs.readdirSync(path.join(distDir, 'assets'));
    assert.ok(assets.some((f) => f.startsWith('index-') && f.endsWith('.js')), 'Main JS bundle missing');
    assert.ok(assets.some((f) => f.startsWith('spline-runtime-') && f.endsWith('.js')), 'Spline chunk missing');
    assert.ok(assets.some((f) => f.startsWith('Blog-') && f.endsWith('.js')), 'Lazy-loaded Blog chunk missing');
    assert.ok(assets.some((f) => f.endsWith('.css')), 'CSS bundle missing');
    assert.equal(assets.filter((f) => f.endsWith('.jpg')).length, 5, 'All 5 optimized case-study JPGs must be emitted');
  });
});
