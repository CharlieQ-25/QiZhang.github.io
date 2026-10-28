(() => {
  'use strict';
  const cfg = window.SITE_CONFIG || {};
  const $ = (id) => document.getElementById(id);
  const text = (id, value, fallback = '') => { if ($(id)) $(id).textContent = String(value || fallback); };
  const name = (cfg.name || 'Your Name').trim();
  text('person-name', name);
  text('brand-name', name);
  text('footer-name', name);
  text('initials', name === 'Your Name' ? 'CV' : name.split(/\s+/).slice(0,2).map(word => word.charAt(0)).join('').toUpperCase());
  text('person-role', cfg.role, 'Professional profile');
  text('person-intro', cfg.intro);
  text('about-copy', cfg.about);
  text('person-location', cfg.location, 'Professional profile');
  text('resume-note', cfg.resumeNote, 'Education, experience, projects, and selected achievements.');
  text('copyright-year', cfg.footerYear || new Date().getFullYear());
  document.title = `${name} | Curriculum Vitae`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = `${name} — professional profile and downloadable CV.`;

  const links = $('contact-links');
  function addLink(label, url, icon) {
    if (!url) return;
    const a = document.createElement('a');
    a.className = 'contact-link';
    a.href = url;
    a.target = url.startsWith('mailto:') ? '_self' : '_blank';
    if (a.target === '_blank') a.rel = 'noopener noreferrer';
    a.textContent = `${label} ${icon}`;
    links.appendChild(a);
  }
  if (cfg.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.email)) addLink('Email', `mailto:${cfg.email}`, '↗');
  for (const [label, url] of [['LinkedIn', cfg.linkedin], ['GitHub', cfg.github]]) {
    if (typeof url === 'string' && /^https:\/\//i.test(url)) addLink(label, url, '↗');
  }
  $('contact-placeholder').hidden = links.children.length > 0;

  const pdf = 'assets/cv.pdf';
  const empty = $('pdf-empty');
  const frame = $('pdf-frame');
  const status = $('cv-status');
  const heroDownload = $('download-hero');
  const resumeDownload = $('download-resume');
  const safeName = (name === 'Your Name' ? 'CV' : name.replace(/[^a-z0-9-]+/gi, '_')) + '_CV.pdf';
  for (const link of [heroDownload, resumeDownload]) link.download = safeName;
  function setAvailable(ok) {
    empty.hidden = ok;
    frame.hidden = !ok;
    heroDownload.hidden = !ok;
    resumeDownload.hidden = !ok;
    status.textContent = ok ? 'Available to view' : 'PDF not yet uploaded';
    if (ok) frame.src = pdf + '#toolbar=1&navpanes=0';
  }
  // GitHub Pages serves the actual PDF after you upload assets/cv.pdf.
  // HEAD detects the missing file without downloading the full PDF first.
  fetch(pdf, { method: 'HEAD', cache: 'no-store' })
    .then(response => setAvailable(response.ok && (response.headers.get('content-type') || '').toLowerCase().includes('pdf')))
    .catch(() => setAvailable(false));
})();
