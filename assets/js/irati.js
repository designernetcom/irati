/**
 * WO's IRATI — behaviour that the template does not already provide.
 *
 *   1. hands-on training tab panels
 *   2. enquiry form validation + success message (no credentials in the client;
 *      the form posts nowhere until a backend endpoint is configured)
 *   3. requirement pre-selection from ?enquiry=<slug>
 *   4. header aria-expanded sync for the hamburger
 *
 * Counters, sticky header, isotope filtering, swiper and scroll animations all
 * come from the template's own assets/js/main.js.
 */
(function () {
  'use strict';

  /* ----------------------------------------------------------------- tabs */

  function initTabs() {
    var tabs = document.querySelectorAll('.irt-tab');
    if (!tabs.length) return;

    function activate(id) {
      document.querySelectorAll('.irt-tab').forEach(function (t) {
        var on = t.getAttribute('data-tab') === id;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      document.querySelectorAll('.irt-tabpanel').forEach(function (p) {
        var on = p.id === 'panel-' + id;
        p.classList.toggle('is-active', on);
        p.hidden = !on;
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-tab'));
      });
      tab.addEventListener('keydown', function (e) {
        var dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!dir) return;
        e.preventDefault();
        var next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        activate(next.getAttribute('data-tab'));
      });
    });
  }

  /* ----------------------------------------------------- form validation */

  var RULES = {
    fullName: {
      test: function (v) { return v.trim().length >= 2; },
      message: 'Please enter your full name.'
    },
    email: {
      test: function (v) { return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()); },
      message: 'Please enter a valid email address.'
    },
    phone: {
      test: function (v) { return (v.replace(/[^0-9]/g, '').length >= 10); },
      message: 'Please enter a phone number with at least 10 digits.'
    },
    requirement: {
      test: function (v) { return v !== ''; },
      message: 'Please choose the type of requirement.'
    },
    message: {
      test: function (v) { return v.trim().length >= 10; },
      message: 'Please tell us a little more — at least 10 characters.'
    }
  };

  function initForms() {
    document.querySelectorAll('.irt-form').forEach(function (form) {
      var success = form.querySelector('.irt-form-success');

      function fieldError(field, text) {
        var slot = form.querySelector('#err-' + field.name);
        if (!slot) return;
        slot.textContent = text || '';
        slot.classList.toggle('is-shown', !!text);
        field.classList.toggle('is-invalid', !!text);
        field.setAttribute('aria-invalid', text ? 'true' : 'false');
      }

      function validate(field) {
        var rule = RULES[field.name];
        if (!rule) return true;
        var ok = rule.test(field.value);
        fieldError(field, ok ? '' : rule.message);
        return ok;
      }

      Object.keys(RULES).forEach(function (name) {
        var field = form.elements[name];
        if (!field) return;
        field.addEventListener('blur', function () { validate(field); });
        field.addEventListener('input', function () {
          if (field.classList.contains('is-invalid')) validate(field);
        });
        field.addEventListener('change', function () {
          if (field.tagName === 'SELECT') validate(field);
        });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var firstBad = null;
        Object.keys(RULES).forEach(function (name) {
          var field = form.elements[name];
          if (!field) return;
          if (!validate(field) && !firstBad) firstBad = field;
        });

        if (firstBad) {
          if (success) success.hidden = true;
          firstBad.focus();
          return;
        }

        /* No endpoint is wired up in the front end — credentials and mail
           configuration must live on the server. Replace this block with a
           fetch() to your own endpoint when one is available. */
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
        preselectRequirement();
      });
    });
  }

  /* --------------------------------------- ?enquiry=<slug> pre-selection */

  var ENQUIRY_MAP = {
    'operators': 'Robotics Training',
    'supervisors': 'Robotics Training',
    'robot-programmers': 'Robotics Training',
    'robotic-engineers': 'Robotics Training',
    'college-students': 'Robotics Training',
    'entrepreneurs': 'Robotics Training',
    'robotics-training': 'Robotics Training',
    'industrial-automation': 'Industrial Automation',
    'robotics-installation': 'Robotics Installation',
    'robot-rental': 'Robot Rental',
    'robotic-arm-event': 'Robotic Arm Event',
    'corporate-training': 'Corporate Training'
  };

  function preselectRequirement() {
    var slug;
    try {
      slug = new URLSearchParams(window.location.search).get('enquiry');
    } catch (err) {
      return;
    }
    var value = ENQUIRY_MAP[slug];
    if (!value) return;
    document.querySelectorAll('.irt-form select[name="requirement"]').forEach(function (sel) {
      sel.value = value;
    });
  }

  /* --------------------------------------------------- hamburger a11y sync */

  function initHamburger() {
    var buttons = document.querySelectorAll('.hamburger.popup-menu');
    var closeBtn = document.getElementById('mobileCloseBtn2');
    var overlay = document.querySelector('.overlay2');
    var set = function (open) {
      buttons.forEach(function (b) { b.setAttribute('aria-expanded', open ? 'true' : 'false'); });
    };
    buttons.forEach(function (b) { b.addEventListener('click', function () { set(true); }); });
    if (closeBtn) closeBtn.addEventListener('click', function () { set(false); });
    if (overlay) overlay.addEventListener('click', function () { set(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') set(false);
    });
  }

  /* ------------------------------------------------------------------ init */

  function init() {
    initTabs();
    initForms();
    preselectRequirement();
    initHamburger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
