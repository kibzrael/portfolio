import { inView } from "motion";
import revealAnimation from "./reveal";

export default function handleServices() {
  inView("#services", (services) => {
    const els = services.querySelectorAll(":scope > :not(article)");
    els.forEach((el) => revealAnimation(el));
  });
  inView("#services > article", (el) => {
    revealAnimation(el);
  });
}
