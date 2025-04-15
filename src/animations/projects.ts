import { inView } from "motion";
import revealAnimation from "./reveal";

export default function handleProjects() {
  inView("#projects", (projects) => {
    const els = projects.querySelectorAll(":scope > :not(#projects-grid)");
    els.forEach((el) => revealAnimation(el));
  });
  inView("#projects-grid", () => {
    revealAnimation("#projects-grid > *", { stagger: 0.2 });
  });
}
