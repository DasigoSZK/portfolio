import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
  App();
  let openSound = new Audio("./app/assets/sounds/openFolder.flac");
  openSound.volume = 0.5;
  openSound.play();
});

console.log("index ejecutado");