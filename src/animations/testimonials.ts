import { inView } from "motion";
import revealAnimation from "./reveal";

export default function handleTestimonials() {
  inView("#testimonials", (testimonials) => {
    const els = testimonials.querySelectorAll(
      ":scope > :not(#testimonials-carousel)"
    );
    els.forEach((el) => revealAnimation(el));
  });
  inView("#testimonials-carousel", () => {
    revealAnimation("#testimonials-carousel > article", { stagger: 0.2 });
  });
}
