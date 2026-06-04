// ── TAB SWITCHING ──
  function openTab(tabId) {
    // Hide all panels
    document.querySelectorAll('.panel').forEach(function(p) {
      p.classList.remove('active');
    });

    // Deactivate all tab buttons
    document.querySelectorAll('.tab-btn').forEach(function(b) {
      b.classList.remove('active');
    });

    // Deactivate all nav links
    document.querySelectorAll('.nav-link').forEach(function(a) {
      a.classList.remove('active');
    });

    // Activate selected panel
    var panel = document.getElementById('panel-' + tabId);
    if (panel) panel.classList.add('active');

    // Activate matching tab button
    document.querySelectorAll('.tab-btn').forEach(function(b) {
      if (b.getAttribute('data-tab') === tabId) b.classList.add('active');
    });

    // Activate matching nav link
    document.querySelectorAll('.nav-link').forEach(function(a) {
      if (a.getAttribute('data-tab') === tabId) a.classList.add('active');
    });

    // Scroll to tab section
    var tabSection = document.querySelector('.main-tabs');
    if (tabSection) {
      tabSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Wire up tab buttons
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      openTab(this.getAttribute('data-tab'));
    });
  });

  // Wire up nav links
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openTab(this.getAttribute('data-tab'));
    });
  });