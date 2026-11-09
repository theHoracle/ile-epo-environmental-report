// Add YouTube video IDs here when the reporting videos are ready.
// For https://www.youtube.com/watch?v=abcdefghijk, the ID is abcdefghijk.
const videos = [
  { id: 'm_q_kArylq8', title: 'A closer look at the market' },
];

videos.forEach((video, index) => {
  if (!/^[A-Za-z0-9_-]{11}$/.test(video.id)) return;
  const slot = document.querySelector(`[data-video-slot="${index}"] .video-placeholder`);
  if (!slot) return;
  const frame = document.createElement('iframe');
  frame.src = `https://www.youtube-nocookie.com/embed/${video.id}`;
  frame.title = video.title;
  frame.className = 'video-frame';
  frame.loading = 'lazy';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  slot.replaceWith(frame);
});

const progress = document.getElementById('progress');
let scrollScheduled = false;
function updateProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${distance > 0 ? Math.min(100, Math.max(0, window.scrollY / distance * 100)) : 0}%`;
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(updateProgress);
  }
}, { passive: true });
window.addEventListener('resize', updateProgress);
window.addEventListener('load', updateProgress);
updateProgress();

if ('IntersectionObserver' in window) {
  const sectionLinks = [...document.querySelectorAll('.contents nav a')];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    sectionLinks.forEach(link => {
      const active = link.hash === `#${id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('.report-section').forEach(section => observer.observe(section));
}
