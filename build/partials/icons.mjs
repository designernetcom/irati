/**
 * Line-art icon set for WO's IRATI.
 * 48x48 viewBox, `currentColor` stroke — inherits the surrounding card colour so
 * the same markup works on light cards and on the dark navy sections.
 */

const s = (body, extra = '') =>
  `<svg class="irt-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" ` +
  `stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"${extra}>${body}</svg>`;

/* Shared fragments so the arms read as the same robot across the set. */
const BASE = '<path d="M14 42h20"/><path d="M18 42v-4h12v4"/>';

export const icons = {
  /* ---- services ---- */
  training: s(
    BASE +
      '<path d="M24 38V26"/><circle cx="24" cy="22" r="4"/><path d="m26.8 19.2 7-7"/>' +
      '<circle cx="35" cy="10" r="3"/><path d="M6 12 24 6l18 6-18 6z"/><path d="M38 14v6"/>'
  ),
  automation: s(
    '<circle cx="24" cy="24" r="6"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6"/>' +
      '<path d="m11.3 11.3 4.3 4.3M32.4 32.4l4.3 4.3M36.7 11.3l-4.3 4.3M15.6 32.4l-4.3 4.3"/>' +
      '<circle cx="24" cy="24" r="13" stroke-dasharray="3 5"/>'
  ),
  installation: s(
    BASE +
      '<path d="M24 38V28l-6-8 6-8"/><circle cx="24" cy="12" r="3"/>' +
      '<path d="M31 17.5a5 5 0 0 0 7 6.5l6 6-3 3-6-6a5 5 0 0 1-6.5-7z"/>'
  ),
  rental: s(
    '<rect x="6" y="10" width="36" height="32" rx="4"/><path d="M6 20h36M16 6v8M32 6v8"/>' +
      '<path d="M19 32h10"/><circle cx="19" cy="27" r="2"/><circle cx="29" cy="27" r="2"/>'
  ),
  events: s(
    BASE +
      '<path d="M24 38V26l8-8"/><circle cx="24" cy="22" r="3"/><rect x="30" y="12" width="9" height="9" rx="2" transform="rotate(45 34.5 16.5)"/>' +
      '<path d="M10 12v6M7 15h6M40 30v5M37.5 32.5h5"/>'
  ),

  /* ---- applications ---- */
  pickplace: s(
    '<path d="M6 40h36"/><rect x="8" y="28" width="10" height="10" rx="1"/><rect x="30" y="28" width="10" height="10" rx="1"/>' +
      '<path d="M24 6v8"/><path d="M18 14h12v6H18z"/><path d="M20 20v5M28 20v5"/><path d="m18 25 2 3M30 25l-2 3"/>'
  ),
  welding: s(
    BASE + '<path d="M24 38V24l7-7"/><circle cx="24" cy="21" r="3"/>' +
      '<path d="m33 15 5-5"/><path d="M38 10l4-4"/><path d="M33 24l3 4 4-2-2 5 4 1"/>'
  ),
  spray: s(
    BASE + '<path d="M24 38V24l6-6"/><circle cx="24" cy="21" r="3"/>' +
      '<path d="M28 14h6v8h-6z" transform="rotate(45 31 18)"/>' +
      '<path d="M36 12h6M35 17h8M36 22h6"/>'
  ),
  suction: s(
    '<path d="M6 40h36"/><rect x="16" y="30" width="16" height="8" rx="1"/>' +
      '<path d="M24 6v8"/><path d="M14 14h20v4H14z"/><path d="M18 18a4 4 0 0 0 4 4M30 18a4 4 0 0 1-4 4"/>' +
      '<path d="M22 22h4v3h-4z"/>'
  ),
  palletizing: s(
    '<path d="M6 42h36"/><rect x="8" y="32" width="12" height="8"/><rect x="8" y="24" width="12" height="8"/>' +
      '<rect x="28" y="32" width="12" height="8"/><path d="M34 24V12"/><circle cx="34" cy="9" r="3"/><path d="M31 15h6"/>'
  ),
  linedrawing: s(
    BASE + '<path d="M24 38V24l6-5"/><circle cx="24" cy="21" r="3"/>' +
      '<path d="m30 19 4 4"/><path d="M8 12h32"/><path d="M8 12c6 0 6 8 12 8s6-8 12-8 6 8 8 8" stroke-dasharray="4 3"/>'
  ),

  /* ---- industries ---- */
  automotive: s(
    '<path d="M6 32h36v6H6z"/><path d="m10 32 5-10h18l5 10"/><circle cx="15" cy="40" r="3"/><circle cx="33" cy="40" r="3"/>' +
      '<path d="M19 22v10M29 22v10"/><path d="M24 6v8M20 10l4-4 4 4"/>'
  ),
  manufacturing: s(
    '<path d="M4 42h40"/><path d="M8 42V22l10 6V22l10 6V14l12 8v20"/><path d="M14 34h4M24 34h4M34 34h4"/>'
  ),
  packaging: s(
    '<path d="m24 6 16 8v20l-16 8-16-8V14z"/><path d="m8 14 16 8 16-8M24 22v20"/><path d="m16 10 16 8"/>'
  ),
  aerospace: s(
    '<path d="M24 4c5 6 7 13 7 20l7 7v5l-8-4-3 8h-6l-3-8-8 4v-5l7-7c0-7 2-14 7-20z"/><circle cx="24" cy="18" r="2.5"/>'
  ),
  forging: s(
    '<path d="M6 42h36"/><path d="M10 42v-6h28v6"/><path d="M20 36V24h8v12"/>' +
      '<path d="m30 16 8-8 4 4-8 8z"/><path d="m28 18 4 4"/><path d="M18 20c0-4 3-4 3-8M24 18c0-4 3-4 3-8"/>'
  ),
  metal: s(
    '<path d="M4 34h40"/><path d="M4 34V22h40v12"/><path d="M12 22V12h24v10"/><path d="M20 12V6h8v6"/><path d="M4 34v8M44 34v8"/>'
  ),
  machining: s(
    '<circle cx="24" cy="26" r="9"/><circle cx="24" cy="26" r="3"/><path d="M24 6v8M17 8l3 7M31 8l-3 7"/>' +
      '<path d="M6 40h36"/><path d="M12 40v-6M36 40v-6"/>'
  ),

  /* ---- why choose ---- */
  hands: s(
    '<path d="M16 24V12a3 3 0 0 1 6 0v10"/><path d="M22 22V9a3 3 0 0 1 6 0v13"/><path d="M28 22v-8a3 3 0 0 1 6 0v14"/>' +
      '<path d="M16 24v-4a3 3 0 0 0-6 0v10a14 14 0 0 0 14 14h4a10 10 0 0 0 10-10v-6"/>'
  ),
  factory: s(
    '<path d="M4 42h40"/><path d="M8 42V20l10 6V20l10 6V20l10 6v16"/><path d="M8 20V10h6v10"/><path d="M14 34h4M24 34h4M34 34h4"/>'
  ),
  roles: s(
    '<circle cx="14" cy="15" r="5"/><circle cx="34" cy="15" r="5"/><path d="M6 34a8 8 0 0 1 16 0"/><path d="M26 34a8 8 0 0 1 16 0"/>' +
      '<path d="M6 42h36"/>'
  ),
  group: s(
    '<path d="M24 4 8 11v11c0 10 7 19 16 22 9-3 16-12 16-22V11z"/><path d="m17 23 5 5 10-10"/>'
  ),
  target: s(
    '<circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3"/>' +
      '<path d="M24 7V2M24 46v-5M7 24H2M46 24h-5"/>'
  ),
  sliders: s(
    '<path d="M8 14h32M8 24h32M8 34h32"/><circle cx="18" cy="14" r="4"/><circle cx="30" cy="24" r="4"/><circle cx="16" cy="34" r="4"/>'
  ),

  /* ---- events ---- */
  launch: s(
    '<path d="M30 6c6 0 12 6 12 12L26 34l-8-8z"/><path d="m18 26-8 4-2 10 10-2 4-8"/><circle cx="32" cy="16" r="3"/>' +
      '<path d="m8 40 4-4"/>'
  ),
  ribbon: s(
    '<circle cx="24" cy="18" r="10"/><path d="m17 26-5 16 12-6 12 6-5-16"/><path d="m20 18 3 3 5-6"/>'
  ),
  corporate: s(
    '<path d="M6 42h36"/><rect x="8" y="14" width="16" height="28"/><rect x="24" y="6" width="16" height="36"/>' +
      '<path d="M13 20h6M13 27h6M13 34h6M29 13h6M29 20h6M29 27h6M29 34h6"/>'
  ),
  entertain: s(
    '<path d="M24 6v10"/><path d="M8 16h32l-3 22a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4z"/>' +
      '<path d="M18 24v10M30 24v10M24 24v10"/><circle cx="24" cy="8" r="3"/>'
  ),
  demo: s(
    '<rect x="4" y="10" width="40" height="24" rx="3"/><path d="M18 42h12M24 34v8"/><path d="m20 17 9 5-9 5z"/>'
  ),

  /* ---- utility ---- */
  phone: s('<path d="M14 6h8l4 10-5 3a20 20 0 0 0 8 8l3-5 10 4v8a4 4 0 0 1-4 4A34 34 0 0 1 6 10a4 4 0 0 1 4-4z"/>'),
  mail: s('<rect x="4" y="10" width="40" height="28" rx="4"/><path d="m4 14 20 13 20-13"/>'),
  pin: s('<path d="M24 44s14-13 14-24a14 14 0 0 0-28 0c0 11 14 24 14 24z"/><circle cx="24" cy="20" r="5"/>'),
  whatsapp: s(
    '<path d="M6 42l2.6-9A18 18 0 1 1 15 39.4z"/>' +
      '<path d="M18 17c0 8 5 13 13 13 2 0 3-1 3-3l-4-2-2 2a12 12 0 0 1-5-5l2-2-2-4c-2 0-5 0-5 1z"/>'
  ),
  clock: s('<circle cx="24" cy="24" r="18"/><path d="M24 13v11l7 5"/>'),
  fee: s('<circle cx="24" cy="24" r="18"/><path d="M17 15h14M17 21h14M17 15a6 6 0 0 1 0 12h-1l9 10"/>'),
  users: s('<circle cx="19" cy="16" r="6"/><path d="M7 38a12 12 0 0 1 24 0"/><path d="M32 12a6 6 0 0 1 0 12M35 38a12 12 0 0 0-5-9"/>'),
  calendar: s('<rect x="6" y="10" width="36" height="32" rx="4"/><path d="M6 20h36M16 6v8M32 6v8"/><path d="M15 28h6M27 28h6M15 35h6"/>'),
};

export const icon = (name) => icons[name] || icons.automation;
