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
  it('index.html has canonical, Open Graph, and valid JSON-LD pointing strictly to https://cgtofficial.com', () => {
    const html = readText('index.html');
    assert.ok(!html.includes('cgt-robot.vercel.app'), 'Legacy vercel domain must not appear in index.html');
    assert.match(html, /<link rel="canonical" href="https:\/\/cgtofficial\.com\/"\s*\/>/);
    assert.match(html, /<meta property="og:url" content="https:\/\/cgtofficial\.com\/"\s*\/>/);
    assert.match(html, /scene\.splinecode[\s\S]*as="fetch"/);

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

describe('2. Brand Logo & Favicon Asset Verification', () => {
  it('transparent PNG logo assets exist with valid RGBA header (colorType = 6) and no stray unnamed.jpg', () => {
    assert.equal(fs.existsSync(path.join(rootDir, 'unnamed.jpg')), false, 'Raw unnamed.jpg must be removed');

    for (const rel of ['src/assets/logo_metallic_transparent.png', 'public/logo.png']) {
      const buf = fs.readFileSync(path.join(rootDir, rel));
      assert.ok(buf.length > 20_000, `${rel} must be non-trivial size`);
      // PNG magic bytes: 89 50 4E 47 0D 0A 1A 0A
      assert.equal(buf[0], 0x89);
      assert.equal(buf[1], 0x50);
      assert.equal(buf[2], 0x4e);
      assert.equal(buf[3], 0x47);
      // IHDR color type at byte offset 25: 6 = Truecolor with Alpha (RGBA)
      assert.equal(buf[25], 6, `${rel} must have RGBA alpha channel`);
    }

    const favicon = readText('public/favicon.svg');
    assert.match(favicon, /<svg[\s\S]*#F4751E/);
  });
});

describe('3. Contact API Security & Validation Unit Tests', () => {
  it('validates payloads, rejects invalid HTTP methods/emails, and escapes HTML injection', async () => {
    const contactMod = await import('../api/contact.ts');
    const { escapeHtml, validateContactPayload, default: handler } = contactMod;

    // HTML escaping
    assert.equal(
      escapeHtml('<script>alert("xss")</script> & \'quote\''),
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; &#39;quote&#39;'
    );

    // Payload validation
    assert.equal(validateContactPayload(null).valid, false);
    assert.equal(validateContactPayload({ name: 'A' }).valid, false);
    assert.equal(
      validateContactPayload({
        name: 'Firoz',
        email: 'not-an-email',
        service: 'AI Automation',
        budget: '$15,000 - $35,000',
        message: 'Build AI agent',
      }).valid,
      false
    );

    const validRes = validateContactPayload({
      name: '  Firoz Shaik  ',
      email: 'firoz@cgtofficial.com',
      service: 'AI Automation & Custom Agents',
      budget: '$15,000 - $35,000',
      message: 'Need autonomous workflow system.',
    });
    assert.equal(validRes.valid, true);
    assert.equal(validRes.data.name, 'Firoz Shaik');

    // Handler 405 check
    let statusCode = 0;
    let jsonBody = null;
    const mockRes = {
      status(code) {
        statusCode = code;
        return this;
      },
      json(payload) {
        jsonBody = payload;
        return this;
      },
    };

    await handler({ method: 'GET', body: {} }, mockRes);
    assert.equal(statusCode, 405);
    assert.ok(jsonBody.error);

    // Handler 400 check on invalid payload
    await handler({ method: 'POST', body: { name: '', email: 'bad' } }, mockRes);
    assert.equal(statusCode, 400);
  });
});

describe('4. Vercel Rewrite & iOS Spline / Preloader Production Guardrails', () => {
  it('vercel.json rewrites SPA routes without intercepting /api or static files', () => {
    const vercelConfig = JSON.parse(readText('vercel.json'));
    assert.equal(vercelConfig.rewrites.length, 1);
    const pattern = vercelConfig.rewrites[0].source;
    // Strip leading '/' to test path segments the way Vercel path-to-regexp matches
    const regex = new RegExp(`^${pattern}$`);

    // Client routes must match
    assert.ok(regex.test('/partnership/syncrobiz'));
    assert.ok(regex.test('/blog'));
    assert.ok(regex.test('/privacy'));

    // API & static files with extensions must NOT match
    assert.equal(regex.test('/api/contact'), false);
    assert.equal(regex.test('/robots.txt'), false);
    assert.equal(regex.test('/sitemap.xml'), false);
    assert.equal(regex.test('/logo.png'), false);
    assert.equal(regex.test('/favicon.svg'), false);
  });

  it('SplineScene and Preloader enforce iOS WebKit WebGL & VRAM safety invariants', () => {
    const splineCode = readText('src/components/ui/SplineScene.tsx');
    assert.ok(!splineCode.includes('_renderer.setPixelRatio'), 'Must not mutate internal _renderer.setPixelRatio on iOS');
    assert.ok(!splineCode.includes('layout paint'), 'Must not apply contain: layout paint over WebGL canvas');
    assert.ok(splineCode.includes('webglcontextlost'), 'Must handle iOS webglcontextlost recovery');

    const preloaderCode = readText('src/components/ui/Preloader.tsx');
    assert.ok(!preloaderCode.includes("filter: 'blur"), 'Must not animate fullscreen CSS blur filter over WebGL');
    assert.ok(preloaderCode.includes('cgt-spline-loaded'), 'Preloader must wait for cgt-spline-loaded');
  });

  it('dist/ production bundle contains all required static & compiled artifacts', () => {
    const distDir = path.join(rootDir, 'dist');
    assert.ok(fs.existsSync(distDir), 'dist/ directory must exist (run npm run build first)');
    for (const file of ['index.html', 'robots.txt', 'sitemap.xml', 'logo.png', 'favicon.svg']) {
      assert.ok(fs.existsSync(path.join(distDir, file)), `dist/${file} must exist`);
    }
    const assets = fs.readdirSync(path.join(distDir, 'assets'));
    assert.ok(assets.some((f) => f.startsWith('index-') && f.endsWith('.js')), 'Main JS bundle missing');
    assert.ok(assets.some((f) => f.startsWith('spline-runtime-') && f.endsWith('.js')), 'Spline chunk missing');
    assert.ok(assets.some((f) => f.endsWith('.css')), 'CSS bundle missing');
  });
});

