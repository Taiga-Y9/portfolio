// 表示中のセクションに合わせて、ナビの現在地を更新する
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav a[href^="#"]');
  const targets = [...links]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const setCurrent = (id) => {
    links.forEach((a) => {
      if (a.getAttribute("href") === "#" + id) {
        a.setAttribute("aria-current", "true");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setCurrent(e.target.id);
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  targets.forEach((t) => observer.observe(t));
});