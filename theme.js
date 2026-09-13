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
    toggle.setAttribute('aria-label', 'Night mode');
    toggle.setAttribute('aria-checked', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
    toggle.innerHTML =
      '<span class="theme-toggle-label label-day" aria-hidden="true">Day mode</span>' +
      '<span class="theme-toggle-label label-night" aria-hidden="true">Night mode</span>' +
      '<span class="theme-toggle-knob" aria-hidden="true">' +
        '<svg class="icon-sun" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.8"/>' +
          '<path d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M3.2 12.8l1.1-1.1M11.7 4.3l1.1-1.1"/></svg>' +
        '<svg class="icon-moon" viewBox="0 0 16 16"><path d="M12.8 10.4A5.6 5.6 0 0 1 5.6 3.2a5.6 5.6 0 1 0 7.2 7.2z"/></svg>' +
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
