import { inView } from "motion";
import revealAnimation from "./reveal";

export default function handleHero() {
  inView(".hero-container", () => {
    revealAnimation("#hero-details > *", { stagger: 0.2 });
  });

  inView(".hero-image", (el) => {
    revealAnimation(el);
  });
}
