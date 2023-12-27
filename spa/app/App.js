import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Footer } from "./components/Footer.js";
import { Router } from "./components/Router.js";

export function App() {

  console.log("app ejecutado");

  const d = document;
  const $header = d.querySelector(".header");
  const $hero = d.querySelector(".hero");
  const $footer = d.querySelector(".footer");

  $header.innerHTML = "";
  $hero.innerHTML = "";
  $footer.innerHTML = "";

  //Construye lo básico
  $header.replaceWith(Header());
  $hero.replaceWith(Hero());
  $footer.replaceWith(Footer());


  //Cambia el contenido del root dependiendo del hash
  Router();
}