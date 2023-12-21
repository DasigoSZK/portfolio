import hamburgerMenu from "./burger_menu.js";
import { btnSound } from "./btn_sound.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu");
  btnSound(".hero-btn");
})