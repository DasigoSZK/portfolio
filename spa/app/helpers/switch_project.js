const d = document;
let $folders = d.querySelectorAll(".folder img");
let $titles = d.querySelectorAll(".folder h4");
let $projectPreview = d.querySelector(".projects_preview img");
let $projectText = d.querySelector(".preview_text");

export function switchProject() {

  d.addEventListener("click", e => {

    if (!e.target.matches(".folder img") && !e.target.matches(".folder h4")) { return false }

    //Sonido solo en escritorio
    if (window.innerWidth > 1024) {
      let openSound = new Audio("./assets/sounds/openFolder.flac");
      openSound.volume = 0.5;
      openSound.play();
    }


    //Reseteamos todos los projectos
    $folders.forEach(folder => {
      folder.src = "./assets/home/folder-icon2.png";
    })
    $titles.forEach(title => {
      title.style.color = "#fff";
    })

    //Coloreamos el proyecto clickeado

    //Si clickea en la imagen
    if (e.target.matches("img")) {
      //Colorea la imagen y luego el título
      e.target.src = "./assets/home/folder-icon2-selected.png";
      let $h4 = e.target.nextElementSibling;
      $h4.style.color = "#896aaa";

      //Obtiene la imagen del proyecto con data-id
      let projectID = `project-${e.target.parentElement.dataset.id}.jpg`;
      $projectPreview.src = `./assets/home/${projectID}`;

      //Cambia texto del proyecto con data-id
      let project = e.target.parentElement.dataset.id;
      if (project === "1") {

        $projectText.textContent = `
        First project, "Salón de Belleza M&G" is a simple website in which i aimed to reinforce the basic web development concepts.
        For the project, i used: HTML, CSS, SASS, and BOOTSTRAP.
        `;
      } else if (project === "2") {

        $projectText.textContent = `
          Project 2 description.
        `;
      } else if (project === "3") {

        $projectText.textContent = `
          Project 3 description.
        `;
      } else if (project === "4") {

        $projectText.textContent = `
          Project 4 description.
        `;
      } else if (project === "5") {

        $projectText.textContent = `
          Project 5 description.
        `;
      } else if (project === "6") {

        $projectText.textContent = `
          Project 6 description.
        `;
      }
    }


    //Si clickea en el titulo
    if (e.target.matches("h4")) {
      //Colorea el título y luego la imagen
      e.target.style.color = "#896aaa";
      let $img = e.target.previousElementSibling;
      $img.src = "./assets/home/folder-icon2-selected.png";

      //Obtiene la imagen del proyecto con data-id
      let projectID = `project-${e.target.parentElement.dataset.id}.jpg`;
      $projectPreview.src = `./assets/home/${projectID}`;

      //Cambia texto del proyecto con data-id
      let project = e.target.parentElement.dataset.id;
      if (project === "1") {

        $projectText.textContent = `
        First project, "Salón de Belleza M&G" is a simple website in which i aimed to reinforce the basic web development concepts.
        For the project, i used: HTML, CSS, SASS, and BOOTSTRAP.
        `;
      } else if (project === "2") {

        $projectText.textContent = `
          Project 2 description.
        `;
      } else if (project === "3") {

        $projectText.textContent = `
          Project 3 description.
        `;
      } else if (project === "4") {

        $projectText.textContent = `
          Project 4 description.
        `;
      } else if (project === "5") {

        $projectText.textContent = `
          Project 5 description.
        `;
      } else if (project === "6") {

        $projectText.textContent = `
          Project 6 description.
        `;
      }
    }
  })

}