/* Light and dark theme.
   Loaded in <head> so the saved theme is applied before the page is drawn.
   Until the visitor uses the switch, the site follows the system setting. */

(function () {
  var KEY = 'theme';
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function initial() {
    var s = saved();
    if (s === 'dark' || s === 'light') return s;
    return media && media.matches ? 'dark' : 'light';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var toggle = document.querySelector('.theme-toggle');
    if (toggle) toggle.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
  }

  apply(initial());

  if (media) {
    var follow = function (e) { if (!saved()) apply(e.matches ? 'dark' : 'light'); };
    if (media.addEventListener) media.addEventListener('change', follow);
    else if (media.addListener) media.addListener(follow);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'theme-toggle';
    toggle.setAttribute('role', 'switch');
    toggle.setAttribute('aria-label', 'Dark mode');
    toggle.innerHTML =
      '<span class="theme-toggle-knob" aria-hidden="true">' +
        '<svg class="icon-sun" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3"/>' +
          '<path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.4 1.4M11.55 11.55l1.4 1.4M3.05 12.95l1.4-1.4M11.55 4.45l1.4-1.4"/></svg>' +
        '<svg class="icon-moon" viewBox="0 0 16 16"><path d="M13.5 10.2A6 6 0 0 1 5.8 2.5a6 6 0 1 0 7.7 7.7z"/></svg>' +
      '</span>';
    header.appendChild(toggle);
    apply(root.getAttribute('data-theme'));

    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  });
})();
