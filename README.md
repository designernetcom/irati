# WO's IRATI — Industrial Robotics Automation & Training Institute

A static website for WO's IRATI, built on the **Aiero** HTML template
(ib-themes). The template's design system — Sora/Manrope typography, Bootstrap
grid, `ibt-btn` buttons, `sec-title` headings, card and section components, GSAP
scroll animations, Swiper, Isotope — is preserved. Content, palette, imagery and
information architecture are IRATI's.

---

## Running it

Any static file server works; there is no backend.

```bash
python -m http.server 8080      # then open http://127.0.0.1:8080/
```

## Building it

Pages are generated so no section is duplicated across files. After editing
anything under `build/`, run:

```bash
node build/build.mjs
```

No dependencies — plain Node ESM. It rewrites the HTML at the site root plus
`sitemap.xml` and `robots.txt`.

```
build/
  build.mjs              page list, <head>/schema.org, sitemap + robots
  data/
    site.mjs             ALL business content (see "Content" below)
    blog.json            article bodies extracted from irati.co.in/blog
  partials/
    layout.mjs           <head>, header, mobile drawer, footer, page banner
    components.mjs       the shared sections (stats, services, training, …)
    icons.mjs            the inline SVG icon set
  pages.mjs              per-page composition
```

Generated files (do not hand-edit — the next build overwrites them):

```
index.html  about.html  solutions.html  training.html  industrial-robotics-automation-and-training.html
projects.html  blog.html  contact.html  404.html
training/{operators,supervisors,robot-programmers,robotic-engineers,
          college-students,entrepreneurs}.html
blog/<8 articles>.html
sitemap.xml  robots.txt
```

## Content

Everything editable lives in **`build/data/site.mjs`** — contact details, the
five services, six training programmes (hours, weeks, schedule, fee, syllabus,
who should attend), industries, applications, the installation process, the
hands-on topic groups, and the stats.

Every figure in there is taken from irati.co.in. Nothing is invented — no
client names, testimonials, awards, accreditations, placement guarantees,
budgets or production numbers appear anywhere on the site. If a fact is not on
the source site, it is not here.

Course fees and durations as published:

| Programme          | Hours | Duration | Fee                 |
| ------------------ | ----- | -------- | ------------------- |
| Operators          | 32    | 2 weeks  | ₹15,000 + GST (18%) |
| Supervisors        | 32    | 2 weeks  | ₹25,000 + GST (18%) |
| Robot Programmers  | 64    | 4 weeks  | ₹35,000 + GST (18%) |
| Robotic Engineers  | 64    | 4 weeks  | ₹45,000 + GST (18%) |
| College Students   | 64    | 4 weeks  | ₹25,000 + GST (18%) |
| Entrepreneurs      | —     | flexible | customised          |

Only one blog article carries a publication date on the source site
(3 Oct 2023); the rest are shown with a category and no date rather than an
invented one, and no author bylines are used.

## The enquiry form

`assets/js/irati.js` validates the form client-side and shows the success
message. **It does not submit anywhere** — there is deliberately no endpoint,
API key or mail credential in the front end. To make it live, replace the
marked block in `initForms()` with a `fetch()` to your own server-side handler
and keep the credentials there.

## Styling

| File                       | Role                                                     |
| -------------------------- | -------------------------------------------------------- |
| `assets/css/style.css`     | the template's stylesheet, recoloured (see below)         |
| `assets/css/irati.css`     | brand tokens, IRATI components, template reconciliation   |
| `assets/js/main.js`        | the template's scripts (counter duration 6s → 2s)         |
| `assets/js/irati.js`       | tabs, form validation, `?enquiry=` prefill, menu a11y      |

The palette was remapped from the template's teal/violet AI scheme to an
industrial one, by hue rotation so the original contrast relationships hold:

```
navy      #0b1f33   surfaces, headings, dark sections
azure     #0b3d91   gradient anchor
blue      #00a3e0   primary accent, links, icons
orange    #f7941e   secondary accent, CTAs  (matches the WO Group mark)
```

Decorative PNG artwork under `assets/images/layers/` and `assets/images/bg/`
was hue-rotated to match. `irati.css` ends with a "Template reconciliation"
section; each rule there names the template rule it answers, so it is clear
what is brand styling and what is a fix.

## Images

Photographs come from IRATI's own media library, converted to WebP in
`assets/images/irati/`:

| File                            | Shows                                    |
| ------------------------------- | ---------------------------------------- |
| `industrial-automation.webp`    | robot line — homepage hero banner        |
| `robotics-hero.webp`            | the IRATI workshop cell                  |
| `robot-training.webp`           | trainees at a robot arm — About          |
| `robot-installation.webp`       | engineer servicing an arm                |
| `hands-on-training.webp`        | group around an arm                      |
| `teach-pendant-training.webp`   | pendant programming                      |
| `classroom-training.webp`       | classroom session                        |
| `robotics-training-pune.webp`   | training session, wide                   |
| `student-robotics-training.webp`| students at robot arms                   |
| `robot-programming.webp`        | programming a robot from a laptop        |
| `robotics-engineering-lab.webp` | engineers in a robotics lab              |
| `factory-automation.webp`       | multi-robot plant floor                  |
| `robot-cell.webp`               | a WO cell built for trials               |
| `robot-integration.webp`        | robot integrated with a line             |
| `robotic-arm-events.webp`       | arm prepared for an event                |
| `navy-texture.webp`             | background texture                       |
| `irati-mark.webp` / `.png`      | the IRATI logo mark                      |

To swap one, drop a new file over the same filename and rebuild — nothing else
references the old path. Sizes are set in `build/build.mjs`'s image job if you
want to regenerate from originals.

The six robotics applications (pick & place, welding, spray painting, suction
cup, palletizing, line drawing) use custom SVG icons from
`build/partials/icons.mjs` rather than photographs, because IRATI's library has
no photograph of each specific operation — stock images would have implied work
that is not documented.

## SEO

Per page: unique `<title>` and meta description, canonical URL, Open Graph and
Twitter cards, one `<h1>`, semantic `h2`/`h3` order, image alt text, and
JSON-LD — `Organization` and `LocalBusiness` sitewide, `Course` on each training
page, `Article` on each post, `BreadcrumbList` on every inner page.
`sitemap.xml` and `robots.txt` are generated by the build.

## Browser support

Modern evergreen browsers. WebP images, CSS custom properties, `:has()` (one
progressive-enhancement rule in the mobile drawer) and `backdrop-filter` are
used; all degrade without breaking layout.
