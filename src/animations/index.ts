import handleAbout from "./about";
import handleCursorGlow from "./cursor-glow";
import handleHero from "./hero";
import handleProjects from "./projects";
import handleTestimonials from "./testimonials";

export default function initAnimations() {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion)");
  if (mediaQuery.matches) return;
  handleCursorGlow();
  handleHero();
  handleAbout();
  handleProjects();
  // handleServices();
  handleTestimonials();
  // handleContact();
}
