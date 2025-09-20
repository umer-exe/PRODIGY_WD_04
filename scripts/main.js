const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const copyBtn = document.getElementById('copyEmailBtn');
const copyStatus = document.getElementById('copyStatus');
async function copyEmail(email) {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = 'Copied!';
  } catch {
    copyStatus.textContent = 'Copy failed';
  }
  setTimeout(() => copyStatus.textContent = '', 2000);
}
if (copyBtn) copyBtn.addEventListener('click', () => copyEmail(copyBtn.dataset.email));
