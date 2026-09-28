/**
 * Renders the legacy root-level course URLs without rebuilding the whole site.
 *
 *   node build/legacy-course-pages.mjs
 */
import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { brand, contact, courses } from './data/site.mjs';
import { footer, head, header, preloader, scripts } from './partials/layout.mjs';
import { course } from './pages.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');

const aliases = [
  { slug: 'supervisors', file: 'industrial-robotics-programming-training-for-supervisors.html' },
  { slug: 'robot-programmers', file: 'industrial-robotics-programming-training-for-robotics-programmers.html' },
  { slug: 'robotic-engineers', file: 'industrial-robotics-programming-training-for-robotics-engineers.html' },
];

const courseSchema = (item, file) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: item.title,
    description: item.intro,
    url: `${brand.domain}/${file}`,
    provider: { '@id': `${brand.domain}/#organization` },
    inLanguage: 'en-IN',
    educationalCredentialAwarded: 'Certificate of completion',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      courseWorkload: `PT${item.hours}H`,
      location: {
        '@type': 'Place',
        name: brand.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: contact.street,
          addressLocality: contact.city,
          addressRegion: contact.region,
          postalCode: contact.postal,
          addressCountry: contact.country,
        },
      },
    },
  };

  if (item.fee) {
    schema.offers = {
      '@type': 'Offer',
      price: item.fee.replace(/,/g, ''),
      priceCurrency: 'INR',
      category: 'Tuition fee, exclusive of 18% GST',
      availability: 'https://schema.org/InStock',
      url: `${brand.domain}/${file}`,
    };
  }

  return schema;
};

const breadcrumbSchema = (item, file) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${brand.domain}/index.html` },
    { '@type': 'ListItem', position: 2, name: 'Training', item: `${brand.domain}/training.html` },
    { '@type': 'ListItem', position: 3, name: item.nav, item: `${brand.domain}/${file}` },
  ],
});

const description = (item) =>
  `${item.title} at WO's IRATI, Pune. ${item.hours} total hours over ${item.weeks} weeks, fee INR ${item.fee} ${item.feeNote}. Syllabus, objectives and enrolment.`;

for (const alias of aliases) {
  const item = courses.find((candidate) => candidate.slug === alias.slug);
  if (!item) throw new Error(`Unknown course slug: ${alias.slug}`);

  const html =
    head({
      title: `${item.title} | WO's IRATI Pune`,
      description: description(item),
      canonical: alias.file,
      schema: [courseSchema(item, alias.file), breadcrumbSchema(item, alias.file)],
      image: item.image,
    }) +
    `
<body class="irt-body">
    <div class="wrapper">
${preloader(0)}
${header(0, 'training')}
    <main id="main">
${course(item, 0)}
    </main>

        <!-- main-sec (footer wrapper - template component) -->
        <section class="main-sec irt-footer-wrap">
${footer(0)}
        </section>
        <!-- End main-sec -->
    </div>

${scripts(0)}`;

  await writeFile(join(ROOT, alias.file), html, 'utf8');
  console.log(`Built ${alias.file}`);
}
