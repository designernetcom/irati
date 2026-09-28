/**
 * Page bodies. Each page composes the shared sections from partials/components
 * and only supplies what is unique to it.
 */
import {
  applications,
  blogImages,
  brand,
  contact,
  courses,
  handsOn,
  industries,
  processSteps,
  services,
  stats,
} from './data/site.mjs';
import { icon } from './partials/icons.mjs';
import { pageBanner, rel } from './partials/layout.mjs';
import {
  applicationsSection,
  btn,
  contactSection,
  ctaSection,
  enquiryForm,
  eventsSection,
  handsOnSection,
  industriesSection,
  marquee,
  processSection,
  projectsSection,
  rentalSection,
  secTitle,
  servicesSection,
  statsSection,
  trainingSection,
  whyChooseSection,
} from './partials/components.mjs';

const telHref = (p) => 'tel:' + p.replace(/\s/g, '');
const strip = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, (m) => ({ '&amp;': '&', '&mdash;': '—', '&rsquo;': '’', '&middot;': '·', '&nbsp;': ' ' }[m] || m));

/* ==========================================================  HOME  ======= */

export function home() {
  return `
        <!-- hero -->
        <section class="hero-style1 irt-hero">
            <div class="hero-info">
                <div class="container">
                    <div class="row align-items-end">
                        <div class="col-lg-7">
                            <div class="hero-title">
                                <span class="sub-title">${brand.full} &middot; Pune</span>
                                <h1 class="gradient-title">Industrial Robotics. <span>Automation.</span> Training.</h1>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="hero-content">
                                <p>WO&rsquo;s IRATI provides practical industrial robotics programming, automation, installation and hands-on training for professionals, students and businesses.</p>
                                <div class="irt-hero-actions">
                                    <a class="ibt-btn ibt-btn-secondary" href="training.html"><span>Explore Training</span><i class="icon-arrow-top"></i></a>
                                    <a class="ibt-btn ibt-btn-outline" href="solutions.html"><span>Automation Solutions</span><i class="icon-arrow-top"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="irt-hero-pills">
                        <li>Robotics Programming</li>
                        <li>Automation Projects</li>
                        <li>Installation &amp; Service</li>
                        <li>Robots on Rent</li>
                        <li>Robotic Arm Events</li>
                    </ul>
                </div>
            </div>
            <div class="irt-hero-banner">
                <img class="irt-hero-img" src="assets/images/irati/industrial-automation.webp" width="1200" height="800" fetchpriority="high" decoding="async" alt="Industrial robot arms working together on an automotive production line">
                <div class="irt-hero-banner-content">
                    <span class="irt-hero-kicker">An initiative of WO Group &middot; since ${brand.founded}</span>
                    <p class="irt-hero-caption">Real robots. Real industrial syllabus. Real projects.</p>
                </div>
            </div>
        </section>
        <!-- End hero -->

${statsSection(0)}
${marquee('/ Industrial robotics automation &nbsp;&mdash;&nbsp; robotics training &nbsp;&mdash;&nbsp; robotic projects &nbsp;&mdash;&nbsp; robotics installation')}
${aboutSection(0)}
${servicesSection(0)}
${applicationsSection(0)}
${industriesSection(0)}
${trainingSection(0)}
${whyChooseSection(0)}
${handsOnSection(0)}
${projectsSection(0)}
${processSection(0)}
${rentalSection(0)}
${eventsSection(0)}
${blogTeaser(0)}
${ctaSection(0)}
${contactSection(0)}
`;
}

/* --------------------------------------------------------- about (shared) */

function aboutSection(depth = 0) {
  const r = rel(depth);
  return `        <!-- about -->
        <section class="about-us-sec irt-about ibt-section-gap" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="about-img irt-about-img">
                            <img src="${r}assets/images/irati/robot-training.webp" width="1600" height="900" loading="lazy" decoding="async" alt="WO's IRATI trainees examining an industrial robot arm during a hands-on session">
                            <div class="irt-about-badge">
                                <strong>Since ${brand.founded}</strong>
                                <span>WO Group &mdash; industrial robotics &amp; automation</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="about-content irt-about-content">
${secTitle({
    kicker: 'about irati',
    title: 'Industrial robotics expertise. Practical learning.',
    cls: 'mb-0 white',
  })}
                            <p>IRATI (Industrial Robotics Automation &amp; Training Institute) is an initiative of WO Group. WO Group was formed in ${brand.founded} by founder ${brand.founder} and works in the field of industrial robotics and automation.</p>
                            <p class="paragraph">IRATI was started as a training institute for working professionals and for college students, so that anyone can gain working knowledge of industrial robots and be part of robotics automation. We provide full, professional-level industrial robotics training using an actual industrial-level syllabus &mdash; and projects that are actually in running are used during the training period.</p>
                            <div class="irt-about-points">
                                <div><span class="irt-icon-badge">${icon('hands')}</span><p>Hands-on practice on real industrial robots</p></div>
                                <div><span class="irt-icon-badge">${icon('roles')}</span><p>Role-specific courses, from operator to engineer</p></div>
                                <div><span class="irt-icon-badge">${icon('factory')}</span><p>Backed by WO Group&rsquo;s field experience</p></div>
                            </div>
                            ${btn(`${r}about.html`, 'Learn More About IRATI')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End about -->
`;
}

/* ------------------------------------------------------------ blog teaser */

function blogTeaser(depth = 0, posts = []) {
  const r = rel(depth);
  const list = posts.slice(0, 3);
  if (!list.length) return '<!--BLOG_TEASER-->';
  return blogTeaserHtml(r, list);
}

export function blogTeaserHtml(r, list) {
  return `        <!-- blog-sec -->
        <section class="blog-sec irt-blog ibt-section-gap">
            <div class="container">
                <div class="title-area">
                    <div class="row end">
                        <div class="col-lg-7">
${secTitle({ kicker: 'resources', title: 'Industrial robotics, written up by our team', cls: 'mb-0' })}
                        </div>
                        <div class="col-lg-5">
                            <div class="sec-btn-box">
                                ${btn(`${r}blog.html`, 'More Articles')}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row irt-card-grid">
${list.map((p) => blogCard(r, p)).join('\n')}
                </div>
            </div>
        </section>
        <!-- End blog-sec -->
`;
}

export function blogCard(r, p) {
  const [img, alt] = blogImages[p.slug] || ['robot-training.webp', 'Industrial robotics at IRATI'];
  return `                    <div class="col-lg-4 col-md-6">
                        <article class="blog-card irt-blog-card">
                            <div class="blog-img">
                                <a href="${r}blog/${p.slug}.html"><img src="${r}assets/images/irati/${img}" width="1000" height="666" loading="lazy" decoding="async" alt="${alt}"></a>
                                <span class="blog-meta">${p.category}${p.date ? ` / <time datetime="${p.date}">${fmtDate(p.date)}</time>` : ''}</span>
                            </div>
                            <div class="blog-content">
                                <h3 class="title"><a href="${r}blog/${p.slug}.html">${p.title}</a></h3>
                                <p>${p.excerpt}</p>
                                <a class="irt-link" href="${r}blog/${p.slug}.html">Read article <i class="icon-arrow-top" aria-hidden="true"></i></a>
                            </div>
                        </article>
                    </div>`;
}

export function fmtDate(iso) {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/* =========================================================  ABOUT  ======= */

export function about() {
  return `${pageBanner({
    title: 'About WO&rsquo;s IRATI',
    kicker: 'who we are',
    crumbs: [{ label: 'About' }],
  })}
        <section class="irt-page-intro ibt-section-gapTop">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
${secTitle({
    kicker: 'about irati',
    title: 'Industrial robotics expertise. Practical learning.',
  })}
                        <p class="paragraph">IRATI (Industrial Robotics Automation &amp; Training Institute) is an initiative of WO Group. WO Group was formed in ${brand.founded} by founder ${brand.founder} and works in the field of industrial robotics and automation. WO has served customers all over India.</p>
                        <p>WO also works in the entertainment industry with robotic arm events, used for launching new products, inaugurating events and for entertainment. In addition to robotics and automation, WO works in hard chrome plating industries.</p>
                        <p>Our founder, ${brand.founder}, has more than seven years of experience in the field of industrial robotics and automation, and more than three years of experience in industrial robotics training.</p>
                    </div>
                    <div class="col-lg-6">
                        <div class="irt-about-img irt-about-img-page">
                            <img src="assets/images/irati/robotics-training-pune.webp" width="1400" height="933" loading="lazy" decoding="async" alt="An industrial robotics training session at WO's IRATI, Dapodi, Pune">
                        </div>
                    </div>
                </div>
            </div>
        </section>

${statsSection(0)}

        <section class="irt-story ibt-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="irt-story-card">
                            <h2 class="title">Why WO started a training institute</h2>
                            <p>WO started a new training institute for working professional individuals and for college students under the name Industrial Robotics Automation &amp; Training Institute. At IRATI, anyone can gain working knowledge of industrial robots and become part of the field of robotics automation.</p>
                            <p>We provide full and professional-level training in industrial robotics. We use an actual industrial-level training syllabus, and projects that are actually in running are used during the training period.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="irt-story-card">
                            <h2 class="title">Training that already runs inside industry</h2>
                            <p>WO has been giving industrial robotics training to the working staff of various companies as per their requirements, in maintenance departments as well as production departments.</p>
                            <p>WO is now entering the field of industrial robotics training for individuals, which helps both working professionals and college students &mdash; so they can be competition-ready for the automation changes coming to Indian and world industries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

${whyChooseSection(0)}
${servicesSection(0)}
${handsOnSection(0)}
${ctaSection(0)}
`;
}

/* =====================================================  SOLUTIONS  ======= */

export function solutions() {
  const detail = services
    .map((s, i) => {
      const img = [
        'robot-training.webp',
        'industrial-automation.webp',
        'robot-installation.webp',
        'robot-cell.webp',
        'robotic-arm-events.webp',
      ][i];
      const alt = [
        'Trainees learning industrial robotics programming on a real robot arm',
        'Industrial robot arms automating a production line',
        'An engineer installing and calibrating an industrial robot',
        'A WO robot cell built and fenced at the workshop',
        'An industrial robotic arm prepared for an event installation',
      ][i];
      return `        <section class="irt-solution ibt-section-gap${i % 2 ? ' irt-solution-alt' : ''}" id="${s.slug}">
            <div class="container">
                <div class="row align-items-center${i % 2 ? ' flex-lg-row-reverse' : ''}">
                    <div class="col-lg-6">
                        <div class="irt-solution-img">
                            <img src="assets/images/irati/${img}" width="1000" height="666" loading="lazy" decoding="async" alt="${alt}">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="irt-solution-body">
                            <span class="irt-icon-badge">${icon(s.icon)}</span>
                            <h2 class="title">${s.title}</h2>
                            <p>${s.body}</p>
                            ${
                              s.slug === 'industrial-robotics-automation-training'
                                ? `<ul class="irt-tick-list">
                                <li>Role-specific courses for operators, supervisors, programmers and engineers</li>
                                <li>Practical work on real industrial robots, not simulators alone</li>
                                <li>Customised syllabus for company and corporate training</li>
                            </ul>
                            ${btn('training.html', 'View Training Programmes')}`
                                : s.slug === 'robotics-installation'
                                  ? `<ul class="irt-tick-list">
                                <li>Planning, installation, configuration and calibration</li>
                                <li>Programming, testing and integration with your line</li>
                                <li>Full trial built at our premises before dispatch</li>
                            </ul>
                            ${btn('#installation', 'See the Installation Process')}`
                                  : s.slug === 'robots-on-rent'
                                    ? `<ul class="irt-tick-list">
                                <li>Product demonstrations</li>
                                <li>Corporate events</li>
                                <li>Process development</li>
                            </ul>
                            ${btn('contact.html?enquiry=robot-rental', 'Enquire About Robot Rental', 'ibt-btn-secondary')}`
                                    : s.slug === 'robotic-arm-events'
                                      ? `<ul class="irt-tick-list">
                                <li>Product launches and inaugurations</li>
                                <li>Corporate events and exhibitions</li>
                                <li>Stunts, performances and interactive demonstrations</li>
                            </ul>
                            ${btn('contact.html?enquiry=robotic-arm-event', 'Plan a Robotic Arm Event', 'ibt-btn-secondary')}`
                                      : `<ul class="irt-tick-list">
                                <li>Pick &amp; place, welding, spray painting, suction cup and palletizing</li>
                                <li>Complete solutions for your automation needs</li>
                                <li>Known for seven-day project completion at the customer&rsquo;s working place</li>
                            </ul>
                            ${btn('contact.html?enquiry=industrial-automation', 'Discuss an Automation Project')}`
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    })
    .join('\n\n');

  return `${pageBanner({
    title: 'Solutions',
    kicker: 'products &amp; services',
    crumbs: [{ label: 'Solutions' }],
  })}
        <section class="irt-page-intro ibt-section-gapTop">
            <div class="container">
                <div class="row end">
                    <div class="col-lg-7">
${secTitle({
    kicker: 'what we do',
    title: 'Complete solutions for your automation needs',
    cls: 'mb-0',
  })}
                    </div>
                    <div class="col-lg-5">
                        <div class="sec-btn-box">
                            <p>WO has served customers all over India in forging, automobile, metal, machining and welding / fabrication industries &mdash; with projects covering pick and place, welding, spray painting, suction cup and palletizing.</p>
                            ${btn('contact.html', 'Get Automation Solution', 'ibt-btn-secondary')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

${detail}

${applicationsSection(0)}
${processSection(0)}
${industriesSection(0)}
${ctaSection(0)}
`;
}

/* ======================================================  TRAINING  ======= */

export function training() {
  return `${pageBanner({
    title: 'Industrial Robotics Training',
    kicker: 'course &amp; syllabus',
    crumbs: [{ label: 'Training' }],
  })}
        <section class="irt-page-intro ibt-section-gapTop">
            <div class="container">
                <div class="row end">
                    <div class="col-lg-7">
${secTitle({
    kicker: 'training programmes',
    title: 'Learn industrial robotics with practical, hands-on experience',
    cls: 'mb-0',
  })}
                    </div>
                    <div class="col-lg-5">
                        <div class="sec-btn-box">
                            <p>Six role-specific programmes for working professionals, college students and entrepreneurs. All fees are exclusive of GST.</p>
                            ${btn('contact.html', 'Enroll / Enquire Now', 'ibt-btn-secondary')}
                        </div>
                    </div>
                </div>
            </div>
        </section>

${trainingSection(0, { heading: false })}
${handsOnSection(0)}
${whyChooseSection(0)}

        <section class="irt-compare ibt-section-gap">
            <div class="container">
${secTitle({ kicker: 'at a glance', title: 'Duration and fees' })}
                <div class="irt-table-wrap">
                    <table class="irt-table">
                        <caption class="visually-hidden">Duration, schedule and fees for each IRATI training programme</caption>
                        <thead>
                            <tr><th scope="col">Programme</th><th scope="col">Who it is for</th><th scope="col">Total hours</th><th scope="col">Duration</th><th scope="col">Fee</th></tr>
                        </thead>
                        <tbody>
${courses
  .map(
    (c) => `                            <tr>
                                <th scope="row"><a href="${c.file}">${c.nav}</a></th>
                                <td>${c.audience}</td>
                                <td>${c.hours ? `${c.hours} hrs` : 'Customised'}</td>
                                <td>${c.weeks ? `${c.weeks} weeks` : 'Flexible'}</td>
                                <td>${c.fee ? `&#8377;${c.fee} ${c.feeNote}` : c.feeNote}</td>
                            </tr>`
  )
  .join('\n')}
                        </tbody>
                    </table>
                </div>
                <p class="irt-note">Class schedule for the fixed-length programmes: 4 hrs/day, 4 days/week &mdash; or 8 hrs/day, 2 days/week.</p>
            </div>
        </section>

${ctaSection(0)}
`;
}

/* ========================================================  COURSE  ======= */

export function course(c, depth = 1) {
  const d = depth;
  const r = rel(d);
  const others = courses.filter((x) => x.slug !== c.slug).slice(0, 3);
  return `${pageBanner({
    title: c.title,
    kicker: c.audience,
    depth: d,
    crumbs: [{ href: 'training.html', label: 'Training' }, { label: c.nav }],
  })}
        <section class="irt-course-hero ibt-section-gapTop">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="irt-course-lead">
                            <p class="irt-tagline">${c.tagline}</p>
                            <p class="paragraph">${c.intro}</p>
                            <div class="irt-course-actions">
                                <a class="ibt-btn ibt-btn-secondary" href="#enquiry"><span>Enroll Now</span><i class="icon-arrow-top"></i></a>
                                <a class="ibt-btn ibt-btn-outline" href="#syllabus"><span>View Syllabus</span><i class="icon-arrow-top"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="irt-course-facts">
                            <div class="irt-fact">
                                <span class="irt-icon-badge">${icon('clock')}</span>
                                <div><dt>Total hours</dt><dd>${c.hours ? `${c.hours} hrs` : 'Customised'}</dd></div>
                            </div>
                            <div class="irt-fact">
                                <span class="irt-icon-badge">${icon('calendar')}</span>
                                <div><dt>Duration</dt><dd>${c.weeks ? `${c.weeks} weeks` : 'Flexible'}</dd></div>
                            </div>
                            <div class="irt-fact">
                                <span class="irt-icon-badge">${icon('users')}</span>
                                <div><dt>Designed for</dt><dd>${c.audience}</dd></div>
                            </div>
                            <div class="irt-fact irt-fact-fee">
                                <span class="irt-icon-badge">${icon('fee')}</span>
                                <div><dt>Fee</dt><dd>${c.fee ? `&#8377;${c.fee} <span>${c.feeNote}</span>` : `<span>${c.feeNote}</span>`}</dd></div>
                            </div>
                            <p class="irt-fact-note">${c.schedule}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="irt-course-body ibt-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="irt-prose">
                            <h2>Course overview</h2>
                            <p>${c.intro}</p>
                            <figure class="irt-course-figure">
                                <img src="${r}assets/images/irati/${c.image}" width="1000" height="666" loading="lazy" decoding="async" alt="${c.imageAlt}">
                            </figure>

                            <h2>Who should attend</h2>
                            <ul class="irt-def-list">
${c.attend.map(([t, x]) => `                                <li><strong>${t}</strong> ${x}</li>`).join('\n')}
                            </ul>

                            <h2>Learning objectives</h2>
                            <ul class="irt-def-list">
${c.objectives.map(([t, x]) => `                                <li><strong>${t}</strong> ${x}</li>`).join('\n')}
                            </ul>

                            <h2 id="syllabus">Syllabus</h2>
${
  c.syllabus
    ? `                            <ol class="irt-syllabus">
${c.syllabus.map((s) => `                                <li>${s}</li>`).join('\n')}
                            </ol>`
    : `                            <p class="irt-callout">${c.syllabusNote}</p>`
}

                            <h2>Hands-on training</h2>
                            <p>Training runs on real industrial robots at our Dapodi workshop, using an actual industrial-level syllabus. Projects that are actually in running are used during the training period.</p>
                            <div class="irt-topic-cloud">
${handsOn.flatMap((g) => g.items).map((t) => `                                <span>${t}</span>`).join('\n')}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <aside class="irt-course-aside">
                            <div class="irt-aside-card">
                                <h2 class="title">Fees &amp; duration</h2>
                                <dl class="irt-aside-facts">
                                    <div><dt>Total hours</dt><dd>${c.hours ? `${c.hours} hrs` : 'Customised'}</dd></div>
                                    <div><dt>Duration</dt><dd>${c.weeks ? `${c.weeks} weeks` : 'Flexible'}</dd></div>
                                    <div><dt>Schedule</dt><dd>${c.schedule}</dd></div>
                                    <div><dt>Fee</dt><dd>${c.fee ? `&#8377;${c.fee} ${c.feeNote}` : c.feeNote}</dd></div>
                                </dl>
                                <a class="ibt-btn ibt-btn-secondary" href="#enquiry"><span>Enroll Now</span><i class="icon-arrow-top"></i></a>
                                <p class="irt-aside-call">Or call <a href="${telHref(contact.phones[0])}">${contact.phones[0]}</a></p>
                            </div>
                            <div class="irt-aside-card irt-aside-links">
                                <h2 class="title">Other programmes</h2>
                                <ul>
${others.map((o) => `                                    <li><a href="${r}${o.file}">${o.nav}<span>${o.hours ? `${o.hours} hrs` : 'Customised'}</span></a></li>`).join('\n')}
                                </ul>
                                <a class="irt-link" href="${r}training.html">All training programmes <i class="icon-arrow-top" aria-hidden="true"></i></a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact-sec irt-contact irt-course-enquiry ibt-section-gap" id="enquiry">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="contact-content">
${secTitle({
    kicker: 'enroll today',
    title: `Enquire about the ${strip(c.nav)} programme`,
    text: 'Send us your details and our team will get back to you with dates, batch options and the enrolment process.',
    cls: 'white',
  })}
                            <ul class="irt-contact-list">
                                <li><span class="irt-icon-badge">${icon('phone')}</span><div><h3 class="title">Call us</h3>${contact.phones.map((p) => `<a class="irt-contact-line" href="${telHref(p)}">${p}</a>`).join('')}</div></li>
                                <li><span class="irt-icon-badge">${icon('mail')}</span><div><h3 class="title">Email us</h3><a class="irt-contact-line" href="mailto:${contact.emails[0]}">${contact.emails[0]}</a></div></li>
                                <li><span class="irt-icon-badge">${icon('pin')}</span><div><h3 class="title">Visit us</h3><address>${contact.addressLines.join('<br>')}</address></div></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        ${enquiryForm()}
                    </div>
                </div>
            </div>
        </section>

${ctaSection(d)}
`;
}

/* ====================================================  INDUSTRIES  ======= */

export function industriesPage() {
  return `${pageBanner({
    title: 'Industries We Serve',
    kicker: 'where our robots work',
    crumbs: [{ label: 'Industries' }],
  })}
        <section class="irt-page-intro ibt-section-gapTop">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
${secTitle({
    kicker: 'pan india',
    title: 'Automation built for the way Indian industry actually runs',
    cls: 'mb-0',
  })}
                        <p class="paragraph">WO has served various customers all over India across forging industries, automobile industries, metal industries, machining industries, welding / fabrication industries and others &mdash; completing projects involving pick and place, welding, spray painting, suction cup, palletizing and other operations.</p>
                        <p>We can provide a complete solution for your automation needs, and we are known for seven-day project completion at the customer&rsquo;s working place.</p>
                        ${btn('contact.html?enquiry=industrial-automation', 'Discuss Your Application', 'ibt-btn-secondary')}
                    </div>
                    <div class="col-lg-6">
                        <div class="irt-about-img irt-about-img-page">
                            <img src="assets/images/irati/factory-automation.webp" width="1200" height="800" loading="lazy" decoding="async" alt="Rows of industrial robot arms working in a manufacturing plant">
                        </div>
                    </div>
                </div>
            </div>
        </section>

${industriesSection(0, { full: true })}
${applicationsSection(0)}
${projectsSection(0)}
${ctaSection(0)}
`;
}

/* ======================================================  PROJECTS  ======= */

export function projects() {
  return `${pageBanner({
    title: 'Industrial Robotics Projects',
    kicker: 'projects &amp; experience',
    crumbs: [{ label: 'Projects' }],
  })}
        <section class="irt-page-intro ibt-section-gapTop">
            <div class="container">
                <div class="row end">
                    <div class="col-lg-7">
${secTitle({
    kicker: 'what we have built',
    title: 'More than 18 robots installed. More than 32 automation projects.',
    cls: 'mb-0',
  })}
                    </div>
                    <div class="col-lg-5">
                        <div class="sec-btn-box">
                            <p>Our team has installed more than 18 robots all over India and completed more than 32 automation projects in India, covering pick and place, welding, spray painting, suction cup, palletizing and other operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

${statsSection(0)}
${applicationsSection(0)}
${projectsSection(0, { full: true })}
${processSection(0)}
${rentalSection(0)}
${eventsSection(0)}
${ctaSection(0)}
`;
}

/* =======================================================  CONTACT  ======= */

export function contactPage() {
  return `${pageBanner({
    title: 'Contact WO&rsquo;s IRATI',
    kicker: 'get in touch',
    crumbs: [{ label: 'Contact' }],
  })}
        <section class="irt-contact-cards ibt-section-gapTop">
            <div class="container">
                <div class="row irt-card-grid">
                    <div class="col-lg-3 col-md-6">
                        <a class="irt-contact-card" href="${telHref(contact.phones[0])}">
                            <span class="irt-icon-badge">${icon('phone')}</span>
                            <h2 class="title">Call</h2>
                            <p>${contact.phones.join('<br>')}</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <a class="irt-contact-card" href="mailto:${contact.emails[0]}">
                            <span class="irt-icon-badge">${icon('mail')}</span>
                            <h2 class="title">Email</h2>
                            <p>${contact.emails.join('<br>')}</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <a class="irt-contact-card" href="https://wa.me/${contact.whatsapp}" target="_blank" rel="noopener">
                            <span class="irt-icon-badge">${icon('whatsapp')}</span>
                            <h2 class="title">WhatsApp</h2>
                            <p>Message us on ${contact.phones[0]}</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <a class="irt-contact-card" href="${contact.mapLink}" target="_blank" rel="noopener">
                            <span class="irt-icon-badge">${icon('pin')}</span>
                            <h2 class="title">Google Maps</h2>
                            <p>Dapodi, Pune 411012</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>

${contactSection(0)}
${ctaSection(0)}
`;
}

/* ==========================================================  BLOG  ======= */

export function blogIndex(posts, categories) {
  return `${pageBanner({
    title: 'Blog &amp; Resources',
    kicker: 'industrial robotics knowledge',
    crumbs: [{ label: 'Blog' }],
  })}
        <section class="irt-page-intro ibt-section-gapTop">
            <div class="container">
                <div class="row end">
                    <div class="col-lg-7">
${secTitle({
    kicker: 'resources',
    title: 'Articles on industrial robotics, automation and robotics careers',
    cls: 'mb-0',
  })}
                    </div>
                    <div class="col-lg-5">
                        <div class="sec-btn-box">
                            <p>Written by the WO&rsquo;s IRATI team from our own training and project work.</p>
                        </div>
                    </div>
                </div>
                <ul class="irt-chip-list" aria-label="Article categories">
${categories.map((c) => `                    <li><span>${c}</span></li>`).join('\n')}
                </ul>
            </div>
        </section>

        <section class="blog-sec irt-blog ibt-section-gap">
            <div class="container">
                <div class="row irt-card-grid">
${posts.map((p) => blogCard('', p)).join('\n')}
                </div>
            </div>
        </section>

${ctaSection(0)}
`;
}

export function blogPost(post, posts) {
  const d = 1;
  const r = rel(d);
  const [img, alt] = blogImages[post.slug] || ['robot-training.webp', 'Industrial robotics at IRATI'];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const body = post.blocks
    .map(([tag, val]) => {
      if (tag === 'ul' || tag === 'ol')
        return `                            <ul>\n${val.map((li) => `                                <li>${li}</li>`).join('\n')}\n                            </ul>`;
      if (tag === 'h3') return `                            <h2>${val}</h2>`;
      if (tag === 'h4') return `                            <h3>${val}</h3>`;
      if (tag === 'blockquote') return `                            <blockquote><p>${val}</p></blockquote>`;
      return `                            <p>${val}</p>`;
    })
    .join('\n');

  return `${pageBanner({
    title: post.title,
    kicker: post.category,
    depth: d,
    crumbs: [{ href: 'blog.html', label: 'Blog' }, { label: post.category }],
  })}
        <article class="irt-article ibt-section-gapTop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <figure class="irt-article-hero">
                            <img src="${r}assets/images/irati/${img}" width="1400" height="933" fetchpriority="high" decoding="async" alt="${alt}">
                        </figure>
                        <p class="irt-article-meta">
                            <span class="irt-chip">${post.category}</span>
                            ${post.date ? `<time datetime="${post.date}">${fmtDate(post.date)}</time>` : ''}
                        </p>
                        <div class="irt-prose">
${body}
                        </div>
                        <div class="irt-article-cta">
                            <h2 class="title">Want this training for yourself or your team?</h2>
                            <p>WO&rsquo;s IRATI runs role-specific industrial robotics programmes on real robots in Dapodi, Pune.</p>
                            <div class="irt-course-actions">
                                <a class="ibt-btn ibt-btn-secondary" href="${r}training.html"><span>Explore Training</span><i class="icon-arrow-top"></i></a>
                                <a class="ibt-btn ibt-btn-outline" href="${r}contact.html"><span>Contact IRATI</span><i class="icon-arrow-top"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <aside class="irt-course-aside">
                            <div class="irt-aside-card irt-aside-links">
                                <h2 class="title">More articles</h2>
                                <ul>
${related.map((p) => `                                    <li><a href="${r}blog/${p.slug}.html">${p.title}<span>${p.category}</span></a></li>`).join('\n')}
                                </ul>
                                <a class="irt-link" href="${r}blog.html">All articles <i class="icon-arrow-top" aria-hidden="true"></i></a>
                            </div>
                            <div class="irt-aside-card">
                                <h2 class="title">Talk to us</h2>
                                <p>Training enquiries and automation projects both reach the same team.</p>
                                <p class="irt-aside-call"><a href="${telHref(contact.phones[0])}">${contact.phones[0]}</a><br><a href="mailto:${contact.emails[0]}">${contact.emails[0]}</a></p>
                                <a class="ibt-btn ibt-btn-secondary" href="${r}contact.html"><span>Enquire Now</span><i class="icon-arrow-top"></i></a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </article>

${ctaSection(d)}
`;
}

/* =========================================================== 404 ========= */

export function notFound() {
  return `${pageBanner({ title: 'Page not found', kicker: 'error 404', crumbs: [{ label: '404' }] })}
        <section class="irt-404 ibt-section-gap">
            <div class="container">
                <div class="irt-404-box">
                    <h2 class="title">That page is not on this site.</h2>
                    <p>The link may be out of date. Try one of these instead &mdash; or call us on <a href="${telHref(contact.phones[0])}">${contact.phones[0]}</a>.</p>
                    <div class="irt-course-actions">
                        <a class="ibt-btn ibt-btn-secondary" href="index.html"><span>Back to Home</span><i class="icon-arrow-top"></i></a>
                        <a class="ibt-btn ibt-btn-outline" href="training.html"><span>Training Programmes</span><i class="icon-arrow-top"></i></a>
                        <a class="ibt-btn ibt-btn-outline" href="contact.html"><span>Contact IRATI</span><i class="icon-arrow-top"></i></a>
                    </div>
                </div>
            </div>
        </section>
`;
}
