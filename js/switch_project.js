const d = document;
let $folders = d.querySelectorAll(".folder img");
let $titles = d.querySelectorAll(".folder h4");
let $projectPreview = d.querySelector(".projects_preview img");

export function switchProject() {

  d.addEventListener("click", e => {

    if (!e.target.matches(".folder img") && !e.target.matches(".folder h4")) { return false }

    //Reseteamos todos los projectos
    $folders.forEach(folder => {
      folder.src = "assets/home/folder-icon2.png";
    })
    $titles.forEach(title => {
      title.style.color = "#fff";
    })

    //Coloreamos el proyecto clickeado
    console.log(e.target);
    if (e.target.matches("img")) {
      e.target.src = "assets/home/folder-icon2-selected.png";
      let $h4 = e.target.nextElementSibling;
      $h4.style.color = "#896aaa";

      let projectID = `project-${e.target.parentElement.dataset.id}.jpg`;
      $projectPreview.src = `assets/home/${projectID}`;
    }

    if (e.target.matches("h4")) {
      e.target.style.color = "#896aaa";
      let $img = e.target.previousElementSibling;
      $img.src = "assets/home/folder-icon2-selected.png";

      let projectID = `project-${e.target.parentElement.dataset.id}.jpg`;
      $projectPreview.src = `assets/home/${projectID}`;
    }
  })

}