import { inView } from "motion";
import revealAnimation from "./reveal";

export default function handleContact() {
  inView("#contact", (contact) => {
    const els = contact.querySelectorAll(":scope > :not(#footer-bar)");
    els.forEach((el) => revealAnimation(el));
  });
}
