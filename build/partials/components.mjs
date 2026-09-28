/**
 * Reusable IRATI sections, built on the template's own components
 * (sec-title, ibt-btn, ser-card, feature-card, choose-block4, counter-box,
 * accordion, contact-sec, swiper). Every page composes these — no page
 * duplicates a section body.
 */
import { icon } from './icons.mjs';
import { rel } from './layout.mjs';
import {
  applications,
  applicationFilters,
  contact,
  courses,
  eventUses,
  handsOn,
  industries,
  processSteps,
  rentalUses,
  requirementTypes,
  services,
  stats,
  whyChoose,
} from '../data/site.mjs';

const telHref = (p) => 'tel:' + p.replace(/\s/g, '');

/* ------------------------------------------------------------ primitives */

export const secTitle = ({ kicker, title, text = '', cls = '', tag = 'h2' }) => `
                <div class="sec-title ${cls}">
                    ${kicker ? `<span class="sub-title">${kicker}</span>` : ''}
                    <${tag} class="title animated-heading">${title}</${tag}>
                    ${text ? `<p>${text}</p>` : ''}
                </div>`;

export const btn = (href, label, variant = 'ibt-btn-outline', arrow = true) =>
  `<a class="ibt-btn ${variant}" href="${href}">
                                    <span>${label}</span>${arrow ? '\n                                    <i class="icon-arrow-top"></i>' : ''}
                                </a>`;

/* --------------------------------------------------------------- 3. stats */

export function statsSection(depth = 0) {
  return `        <!-- trust / stats -->
        <section class="fun-fact-sec irt-stats ibt-section-gapTop" aria-label="WO's IRATI at a glance">
            <div class="container">
                <div class="row irt-stats-row">
${stats
  .map(
    (s) => `                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="fun-fact-content irt-stat">
                            <div class="counter-box">
                                ${
                                  s.value === null
                                    ? `<span class="counter-text irt-stat-word${s.numeric ? ' irt-stat-num' : ''}">${s.text}</span>`
                                    : `<span class="counter-number" data-target="${s.value}">0</span>${
                                        s.suffix ? `<span class="counter-text">${s.suffix}</span>` : ''
                                      }`
                                }
                            </div>
                            <span class="title">${s.label}</span>
                            <p>${s.note}</p>
                        </div>
                    </div>`
  )
  .join('\n')}
                </div>
            </div>
        </section>
        <!-- End trust / stats -->
`;
}

/* ------------------------------------------------------------- 4. marquee */

export const marquee = (text) => `        <!-- marquee-sec -->
        <section class="marquee-sec irt-marquee" aria-hidden="true">
            <div class="marquee">
                <div class="marquee-inner">
                    <span>${text}</span>
                    <span>${text}</span>
                </div>
            </div>
        </section>
        <!-- End marquee-sec -->
`;

/* --------------------------------------------------------------- services */

export function servicesSection(depth = 0, { heading = true } = {}) {
  const r = rel(depth);
  return `        <!-- service-sec -->
        <section class="service-sec2 irt-services ibt-section-gap" id="services">
            <div class="container">
${
  heading
    ? `                <div class="title-area">
                    <div class="row end">
                        <div class="col-xl-7 col-lg-12">
${secTitle({ kicker: 'our services', title: 'Robotics and automation, from the shop floor to the classroom', cls: 'mb-0' })}
                        </div>
                        <div class="col-xl-5 col-lg-12">
                            <div class="sec-btn-box">
                                <p>Five services, one team of industrial robotics engineers.</p>
                                ${btn(`${r}solutions.html`, 'All Solutions')}
                            </div>
                        </div>
                    </div>
                </div>`
    : ''
}
                <div class="row irt-card-grid">
${services
  .map(
    (s) => `                    <div class="col-lg-4 col-md-6">
                        <div class="ser-block2 irt-service-card">
                            <span class="irt-icon-badge">${icon(s.icon)}</span>
                            <h3 class="title"><a href="${r}solutions.html#${s.slug}">${s.title}</a></h3>
                            <p>${s.short}</p>
                            <a class="irt-link" href="${r}solutions.html#${s.slug}">Learn More <i class="icon-arrow-top" aria-hidden="true"></i></a>
                        </div>
                    </div>`
  )
  .join('\n')}
                    <div class="col-lg-4 col-md-6">
                        <div class="ser-block2 irt-service-card irt-service-cta">
                            <h3 class="title">Not sure which you need?</h3>
                            <p>Tell us the part, the cycle time or the role you are hiring for &mdash; we will tell you what the robot cell or the training plan should look like.</p>
                            ${btn(`${r}contact.html`, 'Talk to an Automation Expert', 'ibt-btn-secondary')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End service-sec -->
`;
}

/* --------------------------------------------------------- 6. applications */

export function applicationsSection(depth = 0) {
  return `        <!-- robotics applications -->
        <section class="irt-applications ibt-section-gap" id="applications">
            <div class="container">
${secTitle({
    kicker: 'applications',
    title: 'Industrial robotics applications',
    text: 'The robot operations WO delivers in the field &mdash; and the same operations you train on at IRATI.',
  })}
                <ul class="menu_iso irt-filter" id="custom-filter" aria-label="Filter robotics applications">
${applicationFilters
  .map(
    (f, i) =>
      `                    <li><a href="#" data-filter="${f.value}"${i === 0 ? ' class="is-checked"' : ''}>${f.label}</a></li>`
  )
  .join('\n')}
                </ul>
                <div class="row iso-container2 irt-app-grid">
${applications
  .map(
    (a) => `                    <div class="col-lg-4 col-md-6 isotope-item ${a.filter}">
                        <article class="irt-app-card">
                            <span class="irt-app-icon">${icon(a.icon)}</span>
                            <h3 class="title">${a.title}</h3>
                            <p>${a.text}</p>
                            <span class="irt-app-tag">${a.filter === 'handling' ? 'Material handling' : a.filter === 'process' ? 'Process application' : 'Precision path'}</span>
                        </article>
                    </div>`
  )
  .join('\n')}
                </div>
            </div>
        </section>
        <!-- End robotics applications -->
`;
}

/* ------------------------------------------------------------ 7. industries */

export function industriesSection(depth = 0, { full = false } = {}) {
  const r = rel(depth);
  const list = full ? industries : industries;
  return `        <!-- industries -->
        <section class="feature-sec1 irt-industries ibt-section-gap" id="industries">
            <div class="container">
${secTitle({
    kicker: 'industries we serve',
    title: 'Industries we serve',
    text: 'WO has served customers all over India across forging, automobile, metal, machining and welding / fabrication industries, among others.',
  })}
                <div class="row irt-card-grid">
${list
  .map(
    (i) => `                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="feature-card irt-industry-card">
                            <span class="irt-icon-badge">${icon(i.icon)}</span>
                            <h3 class="title">${i.title}</h3>
                            <p>${i.text}</p>
                        </div>
                    </div>`
  )
  .join('\n')}
                </div>
${
  full
    ? ''
    : `                <div class="irt-section-action">
                    ${btn(`${r}industries.html`, 'Explore Industries')}
                </div>`
}
            </div>
        </section>
        <!-- End industries -->
`;
}

/* -------------------------------------------------------------- 8. training */

export function trainingSection(depth = 0, { heading = true } = {}) {
  const r = rel(depth);
  return `        <!-- training programs -->
        <section class="irt-training ibt-section-gap" id="training">
            <div class="container">
${
  heading
    ? secTitle({
        kicker: 'industrial robotics training',
        title: 'Industrial Robotics Training',
        text: 'Learn industrial robotics with practical, hands-on experience.',
      })
    : ''
}
                <div class="row irt-card-grid">
${courses
  .map(
    (c) => `                    <div class="col-lg-4 col-md-6">
                        <article class="irt-course-card">
                            <div class="irt-course-head">
                                <span class="irt-course-audience">${c.audience}</span>
                                <h3 class="title"><a href="${r}${c.file}">${c.title}</a></h3>
                                <p>${c.intro.split('. ').slice(0, 1).join('. ')}.</p>
                            </div>
                            <dl class="irt-course-meta">
                                <div>
                                    <dt>Duration</dt>
                                    <dd>${c.hours ? `${c.hours} hrs &middot; ${c.weeks} weeks` : 'Customised'}</dd>
                                </div>
                                <div>
                                    <dt>Fee</dt>
                                    <dd>${c.fee ? `&#8377;${c.fee} <span>${c.feeNote}</span>` : `<span>${c.feeNote}</span>`}</dd>
                                </div>
                            </dl>
                            <div class="irt-course-actions">
                                <a class="ibt-btn ibt-btn-outline" href="${r}${c.file}"><span>View Course</span><i class="icon-arrow-top"></i></a>
                                <a class="ibt-btn ibt-btn-secondary" href="${r}contact.html?enquiry=${c.slug}"><span>Enroll Now</span></a>
                            </div>
                        </article>
                    </div>`
  )
  .join('\n')}
                </div>
            </div>
        </section>
        <!-- End training programs -->
`;
}

/* ------------------------------------------------------------ 9. why choose */

export function whyChooseSection(depth = 0) {
  return `        <!-- why choose -->
        <section class="feature-sec1 irt-why ibt-section-gap" id="why-irati">
            <div class="container">
${secTitle({ kicker: 'why irati', title: 'Why choose WO&rsquo;s IRATI?', cls: 'white' })}
                <div class="row irt-card-grid">
${whyChoose
  .map(
    (w) => `                    <div class="col-lg-4 col-md-6">
                        <div class="feature-card irt-why-card">
                            <span class="irt-icon-badge">${icon(w.icon)}</span>
                            <h3 class="title">${w.title}</h3>
                            <p>${w.text}</p>
                        </div>
                    </div>`
  )
  .join('\n')}
                </div>
            </div>
        </section>
        <!-- End why choose -->
`;
}

/* -------------------------------------------------------- 10. hands-on lab */

export function handsOnSection(depth = 0) {
  const r = rel(depth);
  return `        <!-- hands-on training -->
        <section class="irt-handson ibt-section-gap" id="hands-on">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="irt-handson-intro">
${secTitle({
    kicker: 'hands-on training',
    title: 'Learn on real industrial robotics systems',
    text: 'Every topic below is taught on a working industrial robot, using the same industrial-level syllabus and running projects we use on customer sites.',
    cls: 'white',
  })}
                            <img class="irt-handson-img" src="${r}assets/images/irati/hands-on-training.webp" width="700" height="700" loading="lazy" decoding="async" alt="IRATI trainees working hands-on on an industrial robot arm">
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="irt-handson-panel">
                            <div class="irt-tabs" role="tablist" aria-label="Hands-on training areas">
${handsOn
  .map(
    (g, i) =>
      `                                <button type="button" class="irt-tab${i === 0 ? ' is-active' : ''}" role="tab" id="tab-${g.id}" aria-controls="panel-${g.id}" aria-selected="${i === 0}" data-tab="${g.id}">${g.label}</button>`
  )
  .join('\n')}
                            </div>
${handsOn
  .map(
    (g, i) => `                            <div class="irt-tabpanel${i === 0 ? ' is-active' : ''}" role="tabpanel" id="panel-${g.id}" aria-labelledby="tab-${g.id}"${i === 0 ? '' : ' hidden'}>
                                <p class="irt-tabpanel-lead">${g.lead}</p>
                                <ul class="irt-topic-grid">
${g.items
  .map(
    (t, n) => `                                    <li><span class="irt-topic-n">${String(n + 1).padStart(2, '0')}</span>${t}</li>`
  )
  .join('\n')}
                                </ul>
                            </div>`
  )
  .join('\n')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End hands-on training -->
`;
}

/* --------------------------------------------------------- 11. installation */

export function processSection(depth = 0) {
  return `        <!-- installation process -->
        <section class="choose-us-sec4 irt-process ibt-section-gap" id="installation">
            <div class="container">
${secTitle({
    kicker: 'robotics installation',
    title: 'From robot installation to production',
    text: 'How a WO robot cell goes from a drawing to a running line &mdash; we build the full trial at our premises so the customer requirement is covered before dispatch.',
  })}
                <ol class="irt-process-grid">
${processSteps
  .map(
    (p) => `                    <li>
                        <div class="choose-block4 irt-step">
                            <span class="sub-title">${p.n}</span>
                            <span class="step">[ step ]</span>
                            <h3 class="title">${p.title}</h3>
                            <p>${p.text}</p>
                        </div>
                    </li>`
  )
  .join('\n')}
                </ol>
            </div>
        </section>
        <!-- End installation process -->
`;
}

/* ------------------------------------------------------------- 12. projects */

export function projectsSection(depth = 0, { full = false } = {}) {
  const r = rel(depth);
  const shots = [
    ['robot-cell.webp', 'Robot Cell Build', 'A WO robot cell assembled and fenced for trials before dispatch.'],
    ['industrial-automation.webp', 'Line Automation', 'Robot arms working an automated production line.'],
    ['robot-installation.webp', 'Installation &amp; Service', 'On-site installation, calibration and mechanical service work.'],
    ['factory-automation.webp', 'Multi-Robot Cells', 'Multiple robots working together in a manufacturing plant.'],
    ['robot-integration.webp', 'Robot Integration', 'A robot integrated with conveyors and surrounding line equipment.'],
    ['robotic-arm-events.webp', 'Robotic Arm Events', 'An industrial robotic arm prepared for an event installation.'],
  ];
  return `        <!-- projects -->
        <section class="irt-projects ibt-section-gap" id="projects">
            <div class="container">
                <div class="title-area">
                    <div class="row end">
                        <div class="col-xl-7 col-lg-12">
${secTitle({
    kicker: 'projects &amp; experience',
    title: 'Industrial robotics projects',
    text: 'Our team has installed more than 18 robots all over India and completed more than 32 automation projects in India.',
    cls: 'mb-0',
  })}
                        </div>
                        <div class="col-xl-5 col-lg-12">
                            <div class="sec-btn-box">
                                <p>Pick &amp; place, welding, spray painting, suction cup, palletizing and other automation applications.</p>
${full ? '' : `                                ${btn(`${r}projects.html`, 'View Projects')}`}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row irt-card-grid">
${shots
  .map(
    (p, i) => `                    <div class="col-lg-4 col-md-6">
                        <figure class="irt-project-card">
                            <img src="${r}assets/images/irati/${p[0]}" loading="lazy" decoding="async" width="800" height="533" alt="${p[2]}">
                            <figcaption>
                                <h3 class="title">${p[1]}</h3>
                                <p>${p[2]}</p>
                            </figcaption>
                        </figure>
                    </div>`
  )
  .join('\n')}
                </div>
                <p class="irt-note">Project photographs are from WO&rsquo;s own installations and training floor. We do not publish customer names, budgets or production figures.</p>
            </div>
        </section>
        <!-- End projects -->
`;
}

/* --------------------------------------------------------------- 13. rental */

export function rentalSection(depth = 0) {
  const r = rel(depth);
  return `        <!-- robot rental -->
        <section class="irt-rental ibt-section-gap" id="robot-rental">
            <div class="container">
                <div class="irt-rental-box">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
${secTitle({
    kicker: 'robots on rent',
    title: 'Need a robot for a short-term requirement?',
    text: 'Explore robotics without a long-term commitment. We rent robots to businesses and event organisers &mdash; a practical way to prove out a process or put automation in front of an audience.',
    cls: 'white mb-0',
  })}
                            <ul class="irt-tick-list">
${rentalUses.map((u) => `                                <li>${u}</li>`).join('\n')}
                            </ul>
                        </div>
                        <div class="col-lg-5">
                            <div class="irt-rental-cta">
                                <span class="irt-icon-badge">${icon('rental')}</span>
                                <p>Tell us the application and the dates, and we will tell you which robot fits.</p>
                                ${btn(`${r}contact.html?enquiry=robot-rental`, 'Enquire About Robot Rental', 'ibt-btn-secondary')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End robot rental -->
`;
}

/* --------------------------------------------------------------- 14. events */

export function eventsSection(depth = 0) {
  const r = rel(depth);
  return `        <!-- robotic arm events -->
        <section class="irt-events ibt-section-gap" id="robotic-arm-events">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
${secTitle({
    kicker: 'robotic arm events',
    title: 'Make your event robotic',
    text: 'Robots are no longer limited to industrial use. WO also works with the entertainment industry, bringing robotic arms to launches, inaugurations and performances.',
    cls: 'white',
  })}
                        ${btn(`${r}contact.html?enquiry=robotic-arm-event`, 'Plan a Robotic Arm Event', 'ibt-btn-secondary')}
                    </div>
                    <div class="col-lg-7">
                        <div class="irt-event-grid">
${eventUses
  .map(
    (e) => `                            <div class="irt-event-card">
                                <span class="irt-icon-badge">${icon(e.icon)}</span>
                                <h3 class="title">${e.title}</h3>
                                <p>${e.text}</p>
                            </div>`
  )
  .join('\n')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End robotic arm events -->
`;
}

/* ------------------------------------------------------------------ 15. CTA */

export function ctaSection(depth = 0) {
  const r = rel(depth);
  return `        <!-- contact-banner -->
        <section class="contact-banner irt-cta">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-12">
                        <div class="contact-banner-content">
                            <h2 class="title">Ready to build your robotics skills or automation solution?</h2>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="irt-cta-actions">
                            <a class="ibt-btn ibt-btn-secondary" href="${r}training.html"><span>Explore Training</span><i class="icon-arrow-top"></i></a>
                            <a class="ibt-btn ibt-btn-outline" href="${r}contact.html?enquiry=industrial-automation"><span>Talk to an Automation Expert</span><i class="icon-arrow-top"></i></a>
                            <a class="irt-link irt-link-light" href="${r}contact.html">Contact IRATI <i class="icon-arrow-top" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End contact-banner -->
`;
}

/* -------------------------------------------------------------- 16. contact */

export function contactSection(depth = 0, { map = true } = {}) {
  return `        <!-- contact-sec -->
        <section class="contact-sec irt-contact ibt-section-gap" id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="contact-content">
${secTitle({
    kicker: 'get in touch',
    title: 'Talk to WO&rsquo;s IRATI',
    text: 'Training enquiries, automation projects, installations, robot rental and robotic arm events &mdash; all reach the same team in Dapodi, Pune.',
    cls: 'white',
  })}
                            <ul class="irt-contact-list">
                                <li>
                                    <span class="irt-icon-badge">${icon('pin')}</span>
                                    <div>
                                        <h3 class="title">Visit us</h3>
                                        <address>${contact.addressLines.join('<br>')}</address>
                                        <a class="irt-link irt-link-light" href="${contact.mapLink}" target="_blank" rel="noopener">Open in Google Maps <i class="icon-arrow-top" aria-hidden="true"></i></a>
                                    </div>
                                </li>
                                <li>
                                    <span class="irt-icon-badge">${icon('phone')}</span>
                                    <div>
                                        <h3 class="title">Call us</h3>
${contact.phones.map((p) => `                                        <a class="irt-contact-line" href="${telHref(p)}">${p}</a>`).join('\n')}
                                    </div>
                                </li>
                                <li>
                                    <span class="irt-icon-badge">${icon('mail')}</span>
                                    <div>
                                        <h3 class="title">Email us</h3>
${contact.emails.map((e) => `                                        <a class="irt-contact-line" href="mailto:${e}">${e}</a>`).join('\n')}
                                    </div>
                                </li>
                                <li>
                                    <span class="irt-icon-badge">${icon('whatsapp')}</span>
                                    <div>
                                        <h3 class="title">WhatsApp</h3>
                                        <a class="irt-contact-line" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener">Message us on WhatsApp</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        ${enquiryForm()}
                    </div>
                </div>
            </div>
${
  map
    ? `            <div class="container">
                <div class="irt-map">
                    <iframe title="WO's IRATI on Google Maps — Dapodi, Pune" src="${contact.mapEmbed}" width="100%" height="420" style="border:0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>`
    : ''
}
        </section>
        <!-- End contact-sec -->
`;
}

/* ------------------------------------------------------------ enquiry form */

export function enquiryForm() {
  return `<div class="contact-form irt-form-wrap">
                            <form class="custom-form irt-form" id="enquiryForm" method="post" action="#" novalidate>
                                <h2>Send an enquiry</h2>
                                <p class="irt-form-lead">Fields marked <span aria-hidden="true">*</span> are required.</p>

                                <div class="irt-field">
                                    <label for="fullName">Full Name <span class="irt-req" aria-hidden="true">*</span></label>
                                    <input type="text" id="fullName" name="fullName" autocomplete="name" required aria-describedby="err-fullName">
                                    <span class="irt-error" id="err-fullName" role="alert"></span>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="irt-field">
                                            <label for="email">Email <span class="irt-req" aria-hidden="true">*</span></label>
                                            <input type="email" id="email" name="email" autocomplete="email" required aria-describedby="err-email">
                                            <span class="irt-error" id="err-email" role="alert"></span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="irt-field">
                                            <label for="phone">Phone <span class="irt-req" aria-hidden="true">*</span></label>
                                            <input type="tel" id="phone" name="phone" autocomplete="tel" inputmode="tel" required aria-describedby="err-phone">
                                            <span class="irt-error" id="err-phone" role="alert"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="irt-field">
                                            <label for="company">Company</label>
                                            <input type="text" id="company" name="company" autocomplete="organization">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="irt-field">
                                            <label for="requirement">Requirement Type <span class="irt-req" aria-hidden="true">*</span></label>
                                            <select id="requirement" name="requirement" required aria-describedby="err-requirement">
                                                <option value="">Select a requirement</option>
${requirementTypes
  .map((t) => `                                                <option value="${t}">${t}</option>`)
  .join('\n')}
                                            </select>
                                            <span class="irt-error" id="err-requirement" role="alert"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="irt-field">
                                    <label for="message">Message <span class="irt-req" aria-hidden="true">*</span></label>
                                    <textarea id="message" name="message" rows="5" required aria-describedby="err-message"></textarea>
                                    <span class="irt-error" id="err-message" role="alert"></span>
                                </div>

                                <button type="submit" class="ibt-btn ibt-btn-secondary">
                                    <span>Submit Enquiry</span>
                                    <i class="icon-arrow-top"></i>
                                </button>

                                <p class="irt-form-success" id="formSuccess" role="status" hidden>Thank you for contacting WO&rsquo;s IRATI. Our team will get back to you shortly.</p>
                                <p class="irt-form-note">Prefer to talk? Call <a href="${telHref(contact.phones[0])}">${contact.phones[0]}</a> or email <a href="mailto:${contact.emails[0]}">${contact.emails[0]}</a>.</p>
                            </form>
                        </div>`;
}
