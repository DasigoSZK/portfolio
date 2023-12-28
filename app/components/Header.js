let called = false;

export function Header() {

  const d = document;
  const $header = d.createElement("header");
  $header.classList.add("header");

  let $headerHTML = `
  <div class="nav_bar">

      <a href="#home"><img width="65px" src="./app/assets/header/logoblack-512px.png" alt="coffee cup logo"></a>
      <button class="panel-btn hamburger hamburger--minus" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div class="menu-desktop">

        <a class="menu-desktop_link" href="#contact">
          <p>CONTACT</p>
          <img width="45px" src="./app/assets/header/icon-mail.png" alt="message icon">
        </a>

        <a class="menu-desktop_link" href="#about">
          <p>ABOUT</p>
          <img width="55px" src="./app/assets/header/icon-person.png" alt="person/human icon">
        </a>

        <a class="menu-desktop_link" href="#work">
          <p>WORK</p>
          <img width="55px" src="./app/assets/header/icon-work.png" alt="portfolio/work icon">
        </a>

      </div>


    </div>

    <nav class="panel">
      <div class="menu">
        <a href="#contact">Contact<img width="45px" src="./app/assets/header/icon-mail.png" alt="message icon"></a>
        <a href="#about">About<img width="55px" src="./app/assets/header/icon-person.png" alt="person/human icon"></a>
        <a href="#work">Work<img width="55px" src="./app/assets/header/icon-work.png" alt="portfolio/work icon"></a>
        <hr>
      </div>
    </nav>
  `;

  $header.innerHTML = $headerHTML;

  //Funciones para el HEADER
  function hamburgerMenu(panelBtn, panel, menuLink) {
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

  //Esperamos a que se cargue el DOM para llamar a las funciones
  if (!called) {
    called = true;
    console.log("Funcion menu: " + called)
    setTimeout(() => {
      hamburgerMenu(".panel-btn", ".panel", ".menu");
    }, 100);
  }

  //Retornamos el nodo HEADER
  return $header;
}