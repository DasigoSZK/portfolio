export function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (typeof panelBtn !== "string") { return console.log(`El parametro ${panelBtn} del menu hamburguesa no es un nombre de clase válido`) }
    if (typeof panel !== "string") { return console.log(`El parametro ${panel} del menu hamburguesa no es un nombre de clase válido`) }
    if (typeof menuLink !== "string") { return console.log(`El parametro ${menuLink} del menu hamburguesa no es un nombre de clase válido `) }

    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("menu-is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(`${menuLink} *`)) {
      d.querySelector(panel).classList.remove("menu-is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  })
}