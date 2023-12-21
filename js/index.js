import hamburgerMenu from "./burger_menu.js";
import { autoSlider } from "./slider.js";
import { switchProject } from "./switch_project.js";
import { contactFormValidations } from "./contact_form.js";
import { btnSound } from "./btn_sound.js";
import { alienEffect } from "./alien_hero_effect.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu");
  autoSlider();
  switchProject();
  contactFormValidations();
  btnSound(".hero-btn");
  alienEffect(".hero_img", ".hero");
})