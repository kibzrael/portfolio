import { animate, inView } from "motion";
import revealAnimation from "./reveal";

export default function handleAbout() {
  inView("#about-details", () => {
    revealAnimation("#about-details > *", { stagger: 0.2 });
  });

  inView(".animate-count", (el) => {
    const count = Number(el.innerHTML);
    animate(0, count, {
      duration: count / 6,
      ease: "circOut",
      onUpdate: (latest) => (el.innerHTML = Math.round(latest).toString()),
    });
  });
}
