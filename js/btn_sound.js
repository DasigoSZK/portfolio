const d = document;

export function btnSound(btn) {

  //Cuando el mouse esta encima
  d.addEventListener("mouseover", (e) => {

    if (!e.target.matches(btn)) return;

    let deviceWidth = window.innerWidth;
    let btnSound = new Audio('../assets/sounds/btnSelect.wav');
    btnSound.volume = 0.5;

    if (deviceWidth > 1024) {
      btnSound.play();
    }
  })
}