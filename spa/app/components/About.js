export function About() {

  const d = document;
  const $about = d.createElement("section");
  $about.classList.add("about");

  let $aboutHTML = `
  
  <!-- About-INFO -->
      <article class="about_info">

        <div class="info_text card">
          <h2 class="text_title">About Me</h2>
          <div class="text_paragraphs">

            <p class="paragraph">Hello, I'm Dasigo Leandro Szkamarda, a software developer and a student. I'm 21 years
              old and currently live in Argentina.</p>
            <div class="paragraph--alien">
              <p>👾</p>
              <p>👾</p>
              <p>👾</p>
            </div>

            <p class="paragraph">I became interested in programming thanks to "JonMircha" and "Pildoras Informáticas",
              learning vanilla HTML, CSS, JavaScript, and few frameworks/tools.</p>
            <div class="paragraph--alien">
              <p>👾</p>
              <p>👾</p>
              <p>👾</p>
            </div>

            <p class="paragraph">By working on small projects on my own, I realized that i really enjoyed programming.
              This led me to start studyin the "Analista en Sistemas" program at Da Vinci University.</p>
            <div class="paragraph--alien">
              <p>👾</p>
              <p>👾</p>
              <p>👾</p>
            </div>

            <p class="paragraph">There, I continue learning other languages and technologies such as JAVA, SQL, PHP,
              Pyhton, among others, with which I am gradually expanding my portfolio with more projects...</p>
          </div>

        </div>

        <img class="info_img" src="./app/assets/about/space-invaders-purple.png" alt="8 bit space-invaders purple alien">
      </article>

      <!-- About SKILLS -->

      <article class="about_skills">

        <div class="skills card">
          <h2 class="skills_title">Skills&&Tools</h2>
          <div class="skills_icons">
            <div class="icons_languages">
              <img src="./app/assets/about/skills-html.svg" alt="white HTML svg" class="language">
              <img src="./app/assets/about/skills-css.svg" alt="white CSS svg" class="language">
              <img src="./app/assets/about/skills-javascript.svg" alt="white JavaScript svg" class="language">
              <img src="./app/assets/about/skills-php.svg" alt="white PHP svg" class="language">
              <img src="./app/assets/about/skills-github.svg" alt="white GitHub svg" class="language">
              <img src="./app/assets/about/skills-sql.svg" alt="white SQL svg" class="language">
              <img src="./app/assets/about/skills-vscode.svg" alt="white VSCode svg" class="language">
              <img src="./app/assets/about/skills-python.svg" alt="white Python svg" class="language">
              <img src="./app/assets/about/skills-java.svg" alt="white Java svg" class="language">
              <img src="./app/assets/about/skills-photoshop.svg" alt="white Photoshop svg" class="language">
            </div>

            <img class="icons_spaceship" src="./app/assets/about/skills-spaceship.png" alt="">

          </div>

        </div>

        <img class="skills_img" src="./app/assets/about/purple-alienship.webp" alt="8 bit purple alien space-ship">
      </article>
  `;

  $about.innerHTML = $aboutHTML;

  //Funciones para ABOUT
  function moveSpaceship(frame, spaceship) {

    const d = document;
    let x = 0;

    d.addEventListener("keydown", e => {

      if (!e.key === "ArrowLeft" || !e.key === "ArrowRigt") return;


      let $frame = d.querySelector(frame);
      let $spaceship = d.querySelector(spaceship);
      let frameSize = $frame.getBoundingClientRect();
      let spaceshipSize = $spaceship.getBoundingClientRect();

      switch (e.key) {

        case "ArrowLeft":
          if (frameSize.left < spaceshipSize.left) {
            x--;
          }

          break;

        case "ArrowRight":
          if (frameSize.right > spaceshipSize.right) {
            x++;
          }
          break;
      }

      $spaceship.style.translate = `${x * 15}px 0`;
    })
  }

  //Esperamos unos segundos a que se cargue el DOM antes de llamar a las funciones
  setTimeout(() => {

    moveSpaceship(".skills", ".icons_spaceship");

  }, 100);

  //Retornamos el nodo ABOUT
  return $about;
}