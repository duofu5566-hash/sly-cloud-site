const header = document.querySelector("[data-header]");
const counters = document.querySelectorAll("[data-count]");

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-solid", window.scrollY > 20);
};

const animateCounters = () => {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count || 0);
    const duration = 900;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased).toString();
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      animateCounters();
      observer.disconnect();
    },
    { threshold: 0.3 }
  );

  counters.forEach((counter) => observer.observe(counter));
} else {
  animateCounters();
}
