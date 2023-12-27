export function Hero() {

  const d = document;
  const $hero = d.createElement("article");
  $hero.classList.add("hero", "hero--short");

  let $heroHTML = `
  <div class="hero_content">
        <img class="hero_img" src="./app/assets/hero/dasigoanime.png" alt="anime style photo of Dasigo Szkamarda developer">

        <div class="pane">
          <div class="pane_text">
            <h3>Hi, my name is</h3>
            <h1>Dasigo Szkamarda</h1>
            <h3>Software Developer</h3>
          </div>
          <div class="pane_buttons">
            <button class="hero-btn">Get in Touch</button>
            <button class="hero-btn">Work</button>
          </div>

        </div>
      </div>
  `;

  $hero.innerHTML = $heroHTML;

  //Funciones para el HERO
  function btnSound(btn) {

    const d = document;

    //Cuando el mouse esta encima
    d.addEventListener("mouseover", (e) => {

      if (!e.target.matches(btn)) return;

      let deviceWidth = window.innerWidth;
      let btnSound = new Audio('./app/assets/sounds/btnSelect.wav');
      btnSound.volume = 0.3;

      if (deviceWidth > 1024) {
        btnSound.play();
      }
    })
  }

  //Esperamos a que se cargue el DOM para llamar las funciones
  setTimeout(() => {
    btnSound(".hero-btn");
  }, 100);

  //Retornamos el nodo HERO
  return $hero;

}