import { animate, ElementOrSelector, stagger } from "motion";

export default function revealAnimation(
  el: ElementOrSelector,
  options?: { stagger?: number }
) {
  return animate(
    el,
    { opacity: [0, 1], y: [100, 0] },
    {
      duration: 0.7,
      ease: "easeOut",
      ...(options?.stagger && { delay: stagger(options.stagger) }),
    }
  );
}
