const d = document;
let x = 0;

export function moveSpacehsip(frame, spaceship) {

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
