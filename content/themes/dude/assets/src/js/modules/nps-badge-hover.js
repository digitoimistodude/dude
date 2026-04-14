// Track mouse position over the NPS badge to power the
// content-aware light reflection on the border.
export default function initNpsBadgeHover() {
  const badges = document.querySelectorAll('.nps-badge');
  if (!badges.length) return;

  badges.forEach((badge) => {
    badge.addEventListener('mousemove', (e) => {
      const rect = badge.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      badge.style.setProperty('--mouse-x', `${x}px`);
      badge.style.setProperty('--mouse-y', `${y}px`);
    });

    badge.addEventListener('mouseleave', () => {
      badge.style.removeProperty('--mouse-x');
      badge.style.removeProperty('--mouse-y');
    });
  });
}
