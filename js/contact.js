import hamburgerMenu from "./burger_menu.js";
import { contactFormValidations } from "./contact_form.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu");
  contactFormValidations();
})