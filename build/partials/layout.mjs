/**
 * Page shell: <head>, preloader, mobile menu, sticky + main header, footer,
 * scripts. Structure and class names are the Aiero template's; only the content
 * is IRATI's.
 */
import { brand, contact, courses, services } from '../data/site.mjs';
import { icon } from './icons.mjs';

/* ---------------------------------------------------------------- helpers */

export const rel = (depth) => (depth ? '../'.repeat(depth) : '');

const NAV = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'about.html', label: 'About', key: 'about' },
  {
    href: 'solutions.html',
    label: 'Solutions',
    key: 'solutions',
    children: services.map((s) => ({ href: `solutions.html#${s.slug}`, label: s.title })),
  },
  {
    href: 'training.html',
    label: 'Training',
    key: 'training',
    children: courses.map((c) => ({ href: c.file, label: c.nav })),
  },
  { href: 'industries.html', label: 'Industries', key: 'industries' },
  { href: 'projects.html', label: 'Projects', key: 'projects' },
  { href: 'blog.html', label: 'Blog', key: 'blog' },
  { href: 'contact.html', label: 'Contact', key: 'contact' },
];

const telHref = (p) => 'tel:' + p.replace(/\s/g, '');

/* ------------------------------------------------------------------- head */

export function head({ title, description, canonical, depth = 0, schema = [], image = 'robotics-hero.webp' }) {
  const r = rel(depth);
  const og = `${brand.domain}/assets/images/irati/${image}`;
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${brand.domain}/${canonical}">
    <meta name="theme-color" content="#0b1f33">

    <!-- Open Graph / Twitter -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${brand.name}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${brand.domain}/${canonical}">
    <meta property="og:image" content="${og}">
    <meta property="og:locale" content="en_IN">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${og}">

    <!-- Preconnect for faster font loading -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="${r}assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="${r}assets/images/apple-touch-icon.png">

    <!-- Google Fonts (deferred) -->
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&amp;display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet">
    </noscript>

    <!-- Font Awesome (async — used for social / utility glyphs only) -->
    <link rel="stylesheet" href="${r}assets/css/font-awesome.min.css" media="print" onload="this.media='all'">

    <!-- fontello font css -->
    <link rel="stylesheet" href="${r}assets/css/plugins/fontello-enqueue.css" media="print" onload="this.media='all'">
    <link rel="stylesheet" href="${r}assets/css/plugins/fontello-icons.css" media="print" onload="this.media='all'">

    <!-- core css -->
    <link rel="stylesheet" href="${r}assets/css/plugins/bootstrap.min.css">
    <link rel="stylesheet" href="${r}assets/css/style.css">
    <link rel="stylesheet" href="${r}assets/css/irati.css">

    <!-- component css (async) -->
    <link rel="stylesheet" href="${r}assets/css/plugins/swiper-bundle.min.css" media="print" onload="this.media='all'">
    <noscript>
        <link rel="stylesheet" href="${r}assets/css/plugins/swiper-bundle.min.css">
    </noscript>
${schema.map((s) => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
`;
}

/* --------------------------------------------------------------- branding */

const logo = (depth, variant = '') => {
  const r = rel(depth);
  return `<a class="irt-logo${variant}" href="${r}index.html" aria-label="${brand.name} — home">
                                <img src="${r}assets/images/irati/irati-mark.webp" width="209" height="166" alt="${brand.name} logo">
                                <span class="irt-logo-text">
                                    <span class="irt-logo-name">WO&rsquo;s IRATI</span>
                                    <span class="irt-logo-sub">Industrial Robotics Automation &amp; Training Institute</span>
                                </span>
                            </a>`;
};

/* ----------------------------------------------------------------- navbar */

const navItems = (depth, active, idPrefix) => {
  const r = rel(depth);
  return NAV.map((item) => {
    const isActive = item.key === active;
    const kids = item.children
      ? `
                                        <ul class="sub-menu">
${item.children.map((c) => `                                            <li><a href="${r}${c.href}">${c.label}</a></li>`).join('\n')}
                                        </ul>`
      : '';
    return `                                    <li${item.children ? ' class="menu-item-has-children"' : ''}>
                                        <a${isActive ? ' class="active" aria-current="page"' : ''} href="${r}${item.href}">
                                            <span class="menu-item">${item.label}</span>
                                            <span class="menu-item2">${item.label}</span>
                                        </a>${kids}
                                    </li>`;
  }).join('\n');
};

const headerCtas = (depth) => {
  const r = rel(depth);
  return `<a class="ibt-btn ibt-btn-outline-3 ibt-btn-rounded irt-btn-ghost" href="${r}solutions.html">
                                    <span>Get Automation Solution</span>
                                </a>
                                <a class="ibt-btn ibt-btn-secondary ibt-btn-rounded" href="${r}contact.html">
                                    <span>Enroll / Enquire Now</span>
                                </a>`;
};

const homeHeaderUtility = () => `                <div class="irt-header-utility" aria-label="IRATI contact details">
                    <span class="irt-header-utility-item">
                        <span class="irt-header-status" aria-hidden="true"></span>
                        <span>Industrial robotics &amp; automation</span>
                    </span>
                    <span class="irt-header-utility-item">${contact.city}, ${contact.region}</span>
                    <a class="irt-header-utility-phone" href="${telHref(contact.phones[0])}" aria-label="Call ${brand.name} at ${contact.phones[0]}">${contact.phones[0]}</a>
                </div>`;

const mobileMenu = (depth, active) => {
  const r = rel(depth);
  return `    <!-- Mobile Menu -->
    <div data-menu="mobileMenu" class="side-menu2 irt-mobile-menu">
        <div class="menu-btns">
            <span class="irt-mobile-brand">WO&rsquo;s IRATI</span>
            <button id="mobileCloseBtn2" class="close-btn" aria-label="Close menu"></button>
        </div>
        <ul>
${NAV.map((item) => {
  const kids = item.children
    ? `
                <ul>
${item.children.map((c) => `                    <li><a href="${r}${c.href}">${c.label}</a></li>`).join('\n')}
                </ul>`
    : '';
  return `            <li>
                <a${item.key === active ? ' class="active"' : ''} href="${r}${item.href}">${item.label}</a>${kids}
            </li>`;
}).join('\n')}
        </ul>
        <div class="irt-mobile-cta">
            <a class="ibt-btn ibt-btn-secondary" href="${r}contact.html"><span>Enroll / Enquire Now</span></a>
            <a class="irt-mobile-call" href="${telHref(contact.phones[0])}">${contact.phones[0]}</a>
        </div>
    </div>
    <!-- End Mobile Menu -->

    <!-- main.js binds the mobile menu only when .overlay2 is present -->
    <div class="overlay2"></div>
`;
};

export function header(depth = 0, active = '') {
  const homeClass = active === 'home' ? ' irt-header--home' : '';
  return `${mobileMenu(depth, active)}
        <!-- sticky header -->
        <header class="sticky-active v3 irt-header${homeClass}">
            <div class="header-menu-area irt-header-shell">
                <div class="row gx-20 align-items-center justify-content-between">
                    <div class="col-auto">
                        <div class="header-logo">
                            ${logo(depth)}
                        </div>
                    </div>
                    <div class="col-auto">
                        <nav class="main-menu menu-style1" aria-label="Primary">
                            <ul>
${navItems(depth, active, 'sticky')}
                            </ul>
                        </nav>
                    </div>
                    <div class="col-auto d-none d-xl-block">
                        <div class="btn-box irt-header-btns">
                            ${headerCtas(depth)}
                        </div>
                    </div>
                </div>
                <button class="hamburger popup-menu" data-menu="mobileMenu" aria-label="Open menu" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
        <!-- End sticky header -->

        <!--======== Header ========-->
        <header class="vs-header2 v8 irt-header${homeClass}">
            <div class="container2 position-relative">
${active === 'home' ? homeHeaderUtility() : ''}
                <div class="header-menu-area irt-header-shell">
                    <div class="row gx-20 align-items-center justify-content-between">
                        <div class="col-auto col">
                            <div class="header-logo">
                                ${logo(depth)}
                            </div>
                        </div>
                        <div class="col-auto">
                            <nav class="main-menu menu-style1" aria-label="Primary">
                                <ul>
${navItems(depth, active, 'main')}
                                </ul>
                            </nav>
                        </div>
                        <div class="col-auto d-none d-xl-block">
                            <div class="btn-box irt-header-btns">
                                ${headerCtas(depth)}
                            </div>
                        </div>
                    </div>
                    <button class="hamburger popup-menu" data-menu="mobileMenu" aria-label="Open menu" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
        <!--======== / Header ========-->
`;
}

/* ----------------------------------------------------------------- footer */

export function footer(depth = 0) {
  const r = rel(depth);
  const year = 2026;
  return `            <!-- footer-style1 -->
            <footer class="footer-style1 irt-footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="footer-content">
                            <h2 class="title">Build your robotics skills &mdash; or your next automation cell.</h2>
                            <a href="${r}contact.html" class="ibt-btn ibt-btn-outline">
                                <span>Talk to WO&rsquo;s IRATI</span>
                                <i class="icon-arrow-top"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="widget-area ibt-section-gapTop">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 col-lg-12">
                                <div class="about-widget footer-widget">
                                    <div class="footer-logo">
                                        ${logo(depth, ' irt-logo-light')}
                                    </div>
                                    <p class="irt-footer-about">Industrial Robotics Automation &amp; Training Institute &mdash; an initiative of WO Group, working in industrial robotics and automation since ${brand.founded}.</p>
                                    <ul class="social-icon">
                                        <li><a href="${telHref(contact.phones[0])}" aria-label="Call ${brand.name}">${icon('phone')}</a></li>
                                        <li><a href="mailto:${contact.emails[0]}" aria-label="Email ${brand.name}">${icon('mail')}</a></li>
                                        <li><a href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp ${brand.name}">${icon('whatsapp')}</a></li>
                                        <li><a href="${contact.mapLink}" target="_blank" rel="noopener" aria-label="Find us on Google Maps">${icon('pin')}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-8 col-lg-12">
                                <div class="footer-menu irt-footer-menu">
                                    <div class="footer-links footer-widget">
                                        <h4 class="widget-title">Quick Links</h4>
                                        <ul>
${NAV.map((n) => `                                            <li><a href="${r}${n.href}">${n.label}</a></li>`).join('\n')}
                                        </ul>
                                    </div>
                                    <div class="footer-links footer-widget">
                                        <h4 class="widget-title">Training</h4>
                                        <ul>
${courses.map((c) => `                                            <li><a href="${r}${c.file}">${c.nav}</a></li>`).join('\n')}
                                        </ul>
                                    </div>
                                    <div class="footer-links footer-widget">
                                        <h4 class="widget-title">Solutions</h4>
                                        <ul>
                                            <li><a href="${r}solutions.html#industrial-robotics-automation-training">Industrial Robotics</a></li>
                                            <li><a href="${r}solutions.html#industrial-robotics-automation">Automation</a></li>
                                            <li><a href="${r}solutions.html#robotics-installation">Installation</a></li>
                                            <li><a href="${r}solutions.html#robots-on-rent">Robot Rental</a></li>
                                            <li><a href="${r}solutions.html#robotic-arm-events">Robotic Arm Events</a></li>
                                        </ul>
                                    </div>
                                    <div class="footer-links footer-widget irt-footer-contact">
                                        <h4 class="widget-title">Contact</h4>
                                        <ul>
                                            <li><a href="${contact.mapLink}" target="_blank" rel="noopener">Dapodi, Pune, Maharashtra</a></li>
${contact.phones.map((p) => `                                            <li><a href="${telHref(p)}">${p}</a></li>`).join('\n')}
${contact.emails.map((e) => `                                            <li><a href="mailto:${e}">${e}</a></li>`).join('\n')}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-botom">
                    <div class="container">
                        <div class="footer-box">
                            <p>&copy; WO&rsquo;s IRATI. All Rights Reserved.</p>
                            <span>An initiative of WO Group &middot; Pune, India</span>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- End footer-style1 -->
`;
}

/* ---------------------------------------------------------------- scripts */

export function scripts(depth = 0, extra = []) {
  const r = rel(depth);
  return `    <!-- Scroll Button (main.js binds #scrollBtn) -->
    <button type="button" id="scrollBtn" aria-label="Scroll back to top">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
    </button>

    <!-- Js Plugin -->
    <script src="${r}assets/js/bootstrap.min.js" defer></script>
    <script src="${r}assets/js/vendor/swiper-bundle.min.js" defer></script>
    <script src="${r}assets/js/vendor/lenis.min.js" defer></script>
    <script src="${r}assets/js/vendor/gsap.min.js" defer></script>
    <script src="${r}assets/js/vendor/ScrollTrigger.min.js" defer></script>
${extra.map((s) => `    <script src="${r}${s}" defer></script>`).join('\n')}
    <script src="${r}assets/js/main.js" defer></script>
    <script src="${r}assets/js/irati.js" defer></script>
</body>

</html>
`;
}

export function preloader(depth = 0) {
  return `    <!-- Preloader -->
    <div id="preloader">
        <div class="loader">
            <img src="${rel(depth)}assets/images/irati/irati-mark.webp" width="209" height="166" alt="">
        </div>
    </div>
    <!-- End Preloader -->
`;
}

/* ------------------------------------------------------------ page banner */

export function pageBanner({ title, crumbs = [], depth = 0, kicker = '' }) {
  const r = rel(depth);
  return `    <!-- page-banner -->
    <section class="irt-page-banner">
        <div class="container">
            <nav class="irt-breadcrumb-nav" aria-label="Breadcrumb">
                <ol class="irt-breadcrumbs">
                    <li><a href="${r}index.html">Home</a></li>
${crumbs
  .map((c) =>
    c.href
      ? `                    <li><a href="${r}${c.href}">${c.label}</a></li>`
      : `                    <li aria-current="page">${c.label}</li>`
  )
  .join('\n')}
                </ol>
            </nav>
            <div class="page-content">
                ${kicker ? `<span class="sub-title">${kicker}</span>` : ''}
                <h1 class="title">${title}</h1>
            </div>
        </div>
    </section>
    <!-- End page-banner -->
`;
}
