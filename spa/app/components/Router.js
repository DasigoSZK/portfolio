import { Home } from "./Home.js";
import { HeaderSm } from "./HeaderSm.js";
import { About } from "./About.js";
import { Contact } from "./Contact.js";
import { Work } from "./Work.js";
import { alienEffect } from "../helpers/alien_hero_effect.js";
import { contactFormValidations } from "../helpers/contact_form.js";
import { moveSpaceship } from "../helpers/move_spaceship.js";
import { autoSlider } from "../helpers/slider.js";
import { switchProject } from "../helpers/switch_project.js";

export function Router() {

  console.log("router ejecutado");

  const d = document;
  const $root = d.querySelector(".root");
  const $styles = d.getElementById("dynamic-styles");
  let { hash } = location;

  console.log("Hash: " + hash)

  $root.innerHTML = "";

  if (!hash || hash === "#/" || hash === "#home") {

    console.log("se construye home")
    //Construye Home
    $styles.innerHTML = "";
    $root.appendChild(Home());
    d.querySelector(".hero").classList.remove("hero--short");

  } else if (hash === "#about") {

    console.log("se construye about")
    //Construye About
    $styles.innerHTML = HeaderSm();
    $root.appendChild(About());

  } else if (hash === "#contact") {

    console.log("se construye contact")
    //Construye Contact
    $styles.innerHTML = HeaderSm();
    $root.appendChild(Contact());


  } else if (hash === "#work") {

    console.log("se construye work")
    //Construye Work
    $styles.innerHTML = HeaderSm();
    $root.appendChild(Work());

  }


}