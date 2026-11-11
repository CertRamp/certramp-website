/*
 * Static-page behaviour for CertRamp pages served without React hydration.
 * scripts/prune-export.mjs strips the React runtime and its inline RSC payload
 * from content pages (to stay under the 50 MB host quota) and adds this file
 * instead. It reproduces the only client behaviour those pages need:
 *   1. the mobile menu (src/components/layout/Nav.tsx, MobileNav)
 *   2. analytics events (src/components/analytics/Tracked.tsx, src/lib/analytics.ts)
 */
(function () {
  "use strict";

  /* ── Analytics (mirrors track() in src/lib/analytics.ts, provider umami) ── */
  var queue = [];
  function send(event, props) {
    try {
      window.dispatchEvent(new CustomEvent("certramp:analytics", { detail: Object.assign({ event: event }, props) }));
      if (window.umami && typeof window.umami.track === "function") window.umami.track(event, props);
      else queue.push([event, props]);
    } catch (e) {
      /* Analytics must never break navigation. */
    }
  }
  function flush() {
    if (!(window.umami && typeof window.umami.track === "function")) return false;
    while (queue.length) {
      var item = queue.shift();
      try { window.umami.track(item[0], item[1]); } catch (e) { /* ignore */ }
    }
    return true;
  }
  function props(el) {
    try { return JSON.parse(el.getAttribute("data-track-props") || "{}"); } catch (e) { return {}; }
  }

  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("[data-track]") : null;
    if (el) send(el.getAttribute("data-track"), props(el));
  }, true);

  function initViews() {
    var views = document.querySelectorAll("[data-track-view]");
    for (var i = 0; i < views.length; i++) send(views[i].getAttribute("data-track-view"), props(views[i]));
    // The Umami script loads with defer; deliver queued events once it is ready.
    var tries = 0;
    var timer = setInterval(function () { if (flush() || ++tries > 40) clearInterval(timer); }, 250);
  }

  /* ── Mobile menu ── */
  function initMenu() {
    var button = document.querySelector("[data-mobile-menu-toggle]");
    var panel = document.getElementById("mobile-menu");
    if (!button || !panel) return;
    var label = button.querySelector("[data-open-label]");
    function set(open) {
      button.setAttribute("aria-expanded", open ? "true" : "false");
      panel.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
      if (label) label.textContent = label.getAttribute(open ? "data-close-label" : "data-open-label");
    }
    button.addEventListener("click", function () { set(panel.hidden); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) { set(false); button.focus(); }
    });
  }

  function init() { initMenu(); initViews(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
