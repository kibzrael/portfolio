const handleHeaderBackground = () => {
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const header = document.querySelector("header");
    if (!header) return;
    const height = Math.min(800, window.innerHeight);
    const opacity = Math.min(0.75, (scrollTop / height) * 0.75);
    const blur = Math.min(10, (scrollTop / height) * 10);
    if (header.style.backdropFilter === `blur(${blur}px)`) return;
    header.style.backdropFilter = `blur(${blur}px)`;
    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  });
};

const handleTestimonialsScroll = () => {
  const carousel = document.getElementById("testimonials-carousel");
  if (!carousel) return;
  const prev = document.getElementById("testimonials-prev");
  const next = document.getElementById("testimonials-next");

  const gap = 48;
  const cardWidth = () => carousel.children[0].clientWidth + gap;

  prev?.addEventListener("click", () => {
    const scroll = cardWidth();
    const offset = carousel.scrollLeft % scroll;
    carousel.scrollTo({
      left: carousel.scrollLeft - (offset === 0 ? scroll : offset),
      behavior: "smooth",
    });
  });

  next?.addEventListener("click", () => {
    const scroll = cardWidth();
    const offset = carousel.scrollLeft % scroll;
    carousel.scrollTo({
      left:
        carousel.scrollLeft +
        (offset > 0.9 * scroll ? scroll + offset : scroll - offset),
      behavior: "smooth",
    });
  });
};

export default function handleUtils() {
  handleHeaderBackground();
  handleTestimonialsScroll();
}
