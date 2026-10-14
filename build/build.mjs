/**
 * Static site builder for WO's IRATI.
 *
 *   node build/build.mjs
 *
 * No dependencies. Reads content from build/data, composes pages from
 * build/partials + build/pages.mjs and writes plain HTML to the site root, so
 * the result stays a static site that can be uploaded anywhere.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { blogImages, brand, contact, courses, services } from './data/site.mjs';
import { head, header, footer, scripts, preloader, rel } from './partials/layout.mjs';
import * as P from './pages.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');

const blog = JSON.parse(await readFile(join(HERE, 'data', 'blog.json'), 'utf8'));

/* first paragraph of each post, trimmed, as the card excerpt */
const excerpt = (post) => {
  const first = post.blocks.find(([t, v]) => t === 'p' && String(v).replace(/<[^>]+>/g, '').length > 90);
  const text = first ? String(first[1]).replace(/<[^>]+>/g, '') : '';
  return text.length > 165 ? text.slice(0, 162).replace(/[\s,;:.]+\S*$/, '') + '…' : text;
};
const posts = blog.map((p) => ({ ...p, excerpt: excerpt(p) }));
const blogCategories = [...new Set(posts.map((p) => p.category))];

/* -------------------------------------------------------------- schema.org */

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${brand.domain}/#organization`,
  name: brand.name,
  legalName: brand.legalName,
  alternateName: 'IRATI',
  url: `${brand.domain}/`,
  logo: `${brand.domain}/assets/images/irati/icon-512.png`,
  description:
    'IRATI (Industrial Robotics Automation & Training Institute) is an initiative of WO Group, providing industrial robotics programming, automation, installation and hands-on robotics training.',
  foundingDate: brand.founded,
  founder: { '@type': 'Person', name: 'WAGHCHOURE S. R.' },
  parentOrganization: { '@type': 'Organization', name: 'WO Group' },
  areaServed: { '@type': 'Country', name: 'India' },
  telephone: contact.phones.map((p) => p.replace(/\s/g, '')),
  email: contact.emails[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.street,
    addressLocality: contact.city,
    addressRegion: contact.region,
    postalCode: contact.postal,
    addressCountry: contact.country,
  },
};

const LOCAL_BUSINESS = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${brand.domain}/#localbusiness`,
  name: brand.name,
  image: `${brand.domain}/assets/images/irati/robotics-hero.webp`,
  url: `${brand.domain}/`,
  telephone: contact.phones[0].replace(/\s/g, ''),
  email: contact.emails[0],
  priceRange: '₹₹',
  address: ORG.address,
  geo: { '@type': 'GeoCoordinates', latitude: contact.geo.lat, longitude: contact.geo.lng },
  hasMap: contact.mapLink,
  parentOrganization: { '@type': 'Organization', name: 'WO Group' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${brand.domain}/#website`,
  url: `${brand.domain}/`,
  name: brand.name,
  publisher: { '@id': `${brand.domain}/#organization` },
  inLanguage: 'en-IN',
};

const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', url: `${brand.domain}/index.html` }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
});

const courseSchema = (c) => {
  const s = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: strip(c.title),
    description: strip(c.intro).slice(0, 300),
    url: `${brand.domain}/${c.file}`,
    provider: { '@id': `${brand.domain}/#organization` },
    inLanguage: 'en-IN',
    educationalCredentialAwarded: 'Certificate of completion',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      courseWorkload: c.hours ? `PT${c.hours}H` : undefined,
      location: {
        '@type': 'Place',
        name: brand.name,
        address: ORG.address,
      },
    },
  };
  if (c.fee) {
    s.offers = {
      '@type': 'Offer',
      price: c.fee.replace(/,/g, ''),
      priceCurrency: 'INR',
      category: 'Tuition fee, exclusive of 18% GST',
      availability: 'https://schema.org/InStock',
      url: `${brand.domain}/${c.file}`,
    };
  }
  return s;
};

const articleSchema = (p) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: strip(p.title),
  description: p.excerpt,
  image: `${brand.domain}/assets/images/irati/${blogImages[p.slug]?.[0] || 'robot-training.webp'}`,
  articleSection: p.category,
  inLanguage: 'en-IN',
  mainEntityOfPage: `${brand.domain}/blog/${p.slug}.html`,
  author: { '@id': `${brand.domain}/#organization` },
  publisher: { '@id': `${brand.domain}/#organization` },
  ...(p.date ? { datePublished: p.date } : {}),
});

function strip(s) {
  return String(s)
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&mdash;/g, '—')
    .replace(/&rsquo;/g, '’')
    .replace(/&middot;/g, '·')
    .replace(/&#8377;/g, '₹')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ------------------------------------------------------------------ render */

async function page({ file, title, description, body, active, depth = 0, schema = [], image, extraScripts = [] }) {
  const html =
    head({ title, description, canonical: file, depth, schema, image }) +
    `
<body class="irt-body">
    <div class="wrapper">
${preloader(depth)}
${header(depth, active)}
    <main id="main">
${body}
    </main>

        <!-- main-sec (footer wrapper — template component) -->
        <section class="main-sec irt-footer-wrap">
${footer(depth)}
        </section>
        <!-- End main-sec -->
    </div>

${scripts(depth, extraScripts)}`;

  const out = join(ROOT, file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html, 'utf8');
  return file;
}

/* ------------------------------------------------------------------ build */

const written = [];
const add = async (spec) => written.push(await page(spec));

const u = (f) => `${brand.domain}/${f}`;

await add({
  file: 'index.html',
  active: 'home',
  title: "WO's IRATI | Industrial Robotics & Automation Training in Pune",
  description:
    "WO's IRATI provides industrial robotics programming, automation, installation and hands-on robotics training for professionals, students and businesses in Pune and across India.",
  schema: [ORG, LOCAL_BUSINESS, websiteSchema],
  body: P.home().replace('<!--BLOG_TEASER-->', P.blogTeaserHtml('', posts.slice(0, 3))),
  extraScripts: ['assets/js/vendor/isotope.pkgd.min.js', 'assets/js/vendor/imagesloaded.pkgd.min.js'],
});

await add({
  file: 'about.html',
  active: 'about',
  title: "About WO's IRATI | Industrial Robotics Automation & Training Institute",
  description:
    'IRATI is an initiative of WO Group, formed in 2015 by founder Mr. WAGHCHOURE S. R. Learn how we train working professionals and college students on real industrial robots in Pune.',
  image: 'robotics-training-pune.webp',
  schema: [ORG, breadcrumbSchema([{ name: 'About', url: u('about.html') }])],
  body: P.about(),
});

await add({
  file: 'solutions.html',
  active: 'solutions',
  title: "Robotics & Automation Solutions | WO's IRATI, Pune",
  description:
    'Industrial robotics automation and training, robotics installation, robots on rent and robotic arm events — complete automation solutions from WO Group across India.',
  image: 'industrial-automation.webp',
  schema: [
    ORG,
    breadcrumbSchema([{ name: 'Solutions', url: u('solutions.html') }]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: "WO's IRATI solutions",
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: strip(s.title),
        description: s.short,
        url: `${u('solutions.html')}#${s.slug}`,
      })),
    },
  ],
  body: P.solutions(),
  extraScripts: ['assets/js/vendor/isotope.pkgd.min.js', 'assets/js/vendor/imagesloaded.pkgd.min.js'],
});

await add({
  file: 'training.html',
  active: 'training',
  title: 'Industrial Robotics Training Courses in Pune | Fees & Syllabus',
  description:
    'Role-specific industrial robotics programming training for operators, supervisors, programmers, engineers, college students and entrepreneurs. Duration, syllabus and fees.',
  image: 'robot-training.webp',
  schema: [
    ORG,
    breadcrumbSchema([{ name: 'Training', url: u('training.html') }]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: "WO's IRATI training programmes",
      itemListElement: courses.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: strip(c.title),
        url: u(c.file),
      })),
    },
  ],
  body: P.training(),
});

for (const c of courses) {
  await add({
    file: c.file,
    active: 'training',
    depth: 1,
    title: `${strip(c.title)} | WO's IRATI Pune`,
    description: `${strip(c.title)} at WO's IRATI, Pune — ${c.hours ? `${c.hours} total hours over ${c.weeks} weeks, fee ₹${c.fee} ${strip(c.feeNote)}` : 'a fully customised programme'}. Syllabus, objectives and enrolment.`,
    image: c.image,
    schema: [
      courseSchema(c),
      breadcrumbSchema([
        { name: 'Training', url: u('training.html') },
        { name: strip(c.nav), url: u(c.file) },
      ]),
    ],
    body: P.course(c),
  });
}

await add({
  file: 'industrial-robotics-automation-and-training.html',
  active: 'industries',
  title: "Industries We Serve | Robotics Automation by WO's IRATI",
  description:
    'Robotic automation for automotive, manufacturing, welding and fabrication, packaging and logistics, aerospace, forging, metal and machining industries across India.',
  image: 'factory-automation.webp',
  schema: [ORG, breadcrumbSchema([{ name: 'Industries', url: u('industrial-robotics-automation-and-training.html') }])],
  body: P.industriesPage(),
  extraScripts: ['assets/js/vendor/isotope.pkgd.min.js', 'assets/js/vendor/imagesloaded.pkgd.min.js'],
});

await add({
  file: 'projects.html',
  active: 'projects',
  title: "Industrial Robotics Projects | WO's IRATI",
  description:
    'WO has installed more than 18 robots across India and completed more than 32 automation projects — pick and place, welding, spray painting, suction cup and palletizing.',
  image: 'robot-cell.webp',
  schema: [ORG, breadcrumbSchema([{ name: 'Projects', url: u('projects.html') }])],
  body: P.projects(),
  extraScripts: ['assets/js/vendor/isotope.pkgd.min.js', 'assets/js/vendor/imagesloaded.pkgd.min.js'],
});

await add({
  file: 'blog.html',
  active: 'blog',
  title: "Industrial Robotics Blog & Resources | WO's IRATI",
  description:
    'Articles on industrial robotics, robot programming, automation, robotics training and careers in robotics, written by the WO’s IRATI team in Pune.',
  image: 'robot-programming.webp',
  schema: [
    ORG,
    breadcrumbSchema([{ name: 'Blog', url: u('blog.html') }]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: "WO's IRATI blog",
      url: u('blog.html'),
      publisher: { '@id': `${brand.domain}/#organization` },
      blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: strip(p.title), url: u(`blog/${p.slug}.html`) })),
    },
  ],
  body: P.blogIndex(posts, blogCategories),
});

for (const p of posts) {
  await add({
    file: `blog/${p.slug}.html`,
    active: 'blog',
    depth: 1,
    title: `${strip(p.title)} | WO's IRATI`,
    description: p.excerpt,
    image: blogImages[p.slug]?.[0] || 'robot-training.webp',
    schema: [
      articleSchema(p),
      breadcrumbSchema([
        { name: 'Blog', url: u('blog.html') },
        { name: strip(p.title), url: u(`blog/${p.slug}.html`) },
      ]),
    ],
    body: P.blogPost(p, posts),
  });
}

await add({
  file: 'contact.html',
  active: 'contact',
  title: "Contact WO's IRATI | Industrial Robotics Institute, Dapodi, Pune",
  description:
    "Contact WO's IRATI at Dapodi, Pune 411012 — call +91 8446462448 or +91 8483902448, email info@irati.co.in, or send an enquiry about training, automation, installation or robot rental.",
  image: 'robot-cell.webp',
  schema: [ORG, LOCAL_BUSINESS, breadcrumbSchema([{ name: 'Contact', url: u('contact.html') }])],
  body: P.contactPage(),
});

await add({
  file: '404.html',
  active: '',
  title: "Page not found | WO's IRATI",
  description: 'The page you were looking for is not on this site.',
  body: P.notFound(),
});

/* ----------------------------------------------------- sitemap / robots */

const PRIORITY = { 'index.html': '1.0', 'training.html': '0.9', 'solutions.html': '0.9', 'contact.html': '0.8' };
const today = new Date().toISOString().slice(0, 10);
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  written
    .filter((f) => f !== '404.html')
    .map(
      (f) =>
        `  <url>\n    <loc>${brand.domain}/${f}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${PRIORITY[f] || '0.7'}</priority>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;
await writeFile(join(ROOT, 'sitemap.xml'), sitemap, 'utf8');

await writeFile(
  join(ROOT, 'robots.txt'),
  `# WO's IRATI — Industrial Robotics Automation & Training Institute\nUser-agent: *\nAllow: /\nDisallow: /build/\n\nSitemap: ${brand.domain}/sitemap.xml\n`,
  'utf8'
);

console.log(`Built ${written.length} pages + sitemap.xml + robots.txt`);
for (const f of written) console.log('  ' + f);
