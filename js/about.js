import hamburgerMenu from "./burger_menu.js";
import { moveSpacehsip } from "./move_spaceship.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu");
  moveSpacehsip(".skills", ".icons_spaceship");
})