import { animate, frame, motionValue } from "motion";

export default function handleCursorGlow() {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;

  const pointerX = motionValue(0);
  const pointerY = motionValue(0);

  function springToPointer() {
    animate(
      glow!,
      {
        top: pointerY.get(),
        left: pointerX.get(),
      },
      { type: "spring", stiffness: 50, damping: 10 }
    );
  }

  function scheduleSpringToPointer() {
    frame.postRender(springToPointer);
  }

  pointerX.on("change", scheduleSpringToPointer);
  pointerY.on("change", scheduleSpringToPointer);

  document.addEventListener("pointermove", (e) => {
    pointerX.set(e.clientX);
    pointerY.set(e.clientY);
  });
}
