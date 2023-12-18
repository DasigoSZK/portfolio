import hamburgerMenu from "./burger_menu.js";
import { autoSlider } from "./slider.js";
import { switchProject } from "./switch_project.js";
import { contactFormValidations } from "./contact_form.js";
import { moveSpacehsip } from "./move_spaceship.js";

const d = document;
let { hash } = location;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu");
  //autoSlider();
  //switchProject();
  //contactFormValidations();
  moveSpacehsip(".skills", ".icons_spaceship");
})