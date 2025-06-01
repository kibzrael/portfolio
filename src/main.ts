import { initAnalytics } from "./analytics";
import initAnimations from "./animations";
import handleContact from "./contact";
import { renderIcons } from "./icons";
import handleUtils from "./utils";

renderIcons();
initAnimations();
handleUtils();
handleContact();
initAnalytics();
