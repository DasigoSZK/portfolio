const d = document;

export function alienEffect(human, background) {

  let $humanIMG = d.querySelector(human);
  let $backgroundIMG = d.querySelector(background);
  let alienSound = new Audio("../assets/sounds/alienSound.wav");
  alienSound.volume = 0.5;
  let imgToggler = 0;

  d.addEventListener("mousedown", (e) => {

    if (e.target !== $humanIMG) return;


    if (imgToggler === 0) {

      alienSound.pause();
      alienSound.currentTime = 0;

      $humanIMG.src = "./assets/hero/dasigoAlienForm.png";
      $backgroundIMG.style.backgroundImage = `
      linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(./assets/hero/heroBackgroundAlien.gif)
      `;

      alienSound.play();
      imgToggler = 1;

    } else if (imgToggler === 1) {

      alienSound.pause();
      alienSound.currentTime = 0;

      $humanIMG.src = "./assets/hero/dasigoanime.png";
      $backgroundIMG.style.backgroundImage = `
      linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(./assets/hero/heroBackground.gif)
      `;

      alienSound.play();
      imgToggler = 0;

    }


  })
}