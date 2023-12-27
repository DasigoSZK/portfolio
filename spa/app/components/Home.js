export function Home() {

  const d = document;
  const $home = d.createElement("section");
  $home.classList.add("home");

  let $homeHTML = `
  <!-- Content -->
  <div class="container">

        <!-- Projects -->
        <article class="home_projects">
          <div class="projects_folders">
            <div data-id="1" class="folder">
              <img src="./app/assets/home/folder-icon2.png" alt="8-bit yellow folder icon">
              <h4>project-1</h4>
            </div>
            <div data-id="2" class="folder">
              <img src="./app/assets/home/folder-icon2.png" alt="8-bit yellow folder icon">
              <h4>project-2</h4>
            </div>
            <div data-id="3" class="folder">
              <img src="./app/assets/home/folder-icon2.png" alt="8-bit yellow folder icon">
              <h4>project-3</h4>
            </div>
            <div data-id="4" class="folder">
              <img src="./app/assets/home/folder-icon2.png" alt="8-bit yellow folder icon">
              <h4>project-4</h4>
            </div>
            <div data-id="5" class="folder">
              <img src="./app/assets/home/folder-icon2.png" alt="8-bit yellow folder icon">
              <h4>project-5</h4>
            </div>
            <div data-id="6" class="folder">
              <img src="./app/assets/home/folder-icon2.png" alt="8-bit yellow folder icon">
              <h4>project-6</h4>
            </div>
          </div>
          <div class="projects_preview">
            <img src="./app/assets/home/project-1.jpg" alt="SalónDeBellezaM&G (project-1) website preview">
            <p class="preview_text">First project, "Salón de Belleza M&G" is a simple website in which i aimed to
              reinforce the basic web
              development concepts.<br>For the project, i used: HTML, CSS, SASS, and BOOTSTRAP.</p>
          </div>
          <a class="button projects_button">Go to Website</a>
        </article>

        <!-- Slider -->
        <article class="home_slider">
          <div class="slider_container">
            <div class="slide">
              <img class="slide_img" src="./app/assets/home/avatar-1.png" alt="8-bit/pixelart style avatar 1">
              <h4 class="slide_title">Fake First Name</h4>
              <p class="slide_text">"Dasigo is a great teammate. He is always very patient and understanding, which
                makes
                him easy to work with."</p>
            </div>
            <div class="slide">
              <img class="slide_img" src="./app/assets/home/avatar-2.png" alt="8-bit/pixelart style avatar 2">
              <h4 class="slide_title">Fake Second Name</h4>
              <p class="slide_text">"Dasigo was an exceptional student. Their dedication, quick learning, and passiong
                for
                the subject made him stand out."</p>
            </div>
            <div class="slide">
              <img class="slide_img" src="./app/assets/home/avatar-3.png" alt="8-bit/pixelart style avatar 3">
              <h4 class="slide_title">Fake Third Name</h4>
              <p class="slide_text">"Dasigo is an extremely enthusiastic web developer who is always seeking new ways to
                enhance his skills and teach them
                to others."</p>
            </div>
          </div>
          <div class="slider_pointers">
            <ul>
              <li class="pointer--active"></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </article>

        <!-- ContactForm -->
        <article class="home_contact">
          <h3 class="contact_title">Contact</h3>
          <form class="contact_form">

            <div class="form_background">


              <!-- Name -->
              <div class="form_input">
                <label for="name">Name*:</label>
                <input pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" name="name"
                  title="'Name' only accepts letters and blank spaces" placeholder="&nbsp;David Miller" required
                  type="text">
              </div>


              <!-- Phone -->
              <div class="form_input">
                <label for="phone"> Phone*:</label>
                <input pattern="^[0-9\s]{1,15}$" name="phone" title="'Phone' only accepts numbers and blank spaces"
                  placeholder="&nbsp;3624 256356" required type="tel">
              </div>


              <!-- Email -->
              <div class="form_input">
                <label for="email"> Email*:</label>
                <input pattern="^[a-z0-9]+[\.a-z0-9]*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" name="email"
                  title="Please use a valid email address" placeholder="&nbsp;DavidMiller@gmail.com" required
                  type="email">
              </div>


              <!-- Message -->
              <div class="form_textarea">
                <label for="message"> Message*:</label>
                <textarea required name="message" title="'Message' is required"
                  placeholder="&nbsp;Hi, I'm reaching out to you to..." required></textarea>
              </div>


            </div>
          </form>

          <!-- Contact Submit -->
          <div class="contact_send">


            <div class="contact_loader none">
              <img src="./app/assets/contact/loader.svg" alt="Enviando...">
            </div>

            <div class="contact_response none">
            </div>

            <input class="form_submit button" type="submit" value="Send">

          </div>
        </article>

      </div>
  `;

  $home.innerHTML = $homeHTML;


  //Funciones para el HOME
  function alienEffect(human, background) {

    const d = document;
    let $humanIMG = d.querySelector(human);
    let $backgroundIMG = d.querySelector(background);
    let alienSound = new Audio("./app/assets/sounds/alienSound.wav");
    alienSound.volume = 0.5;
    let imgToggler = 0;

    d.addEventListener("mousedown", (e) => {

      if (e.target !== $humanIMG) return;


      if (imgToggler === 0) {

        alienSound.pause();
        alienSound.currentTime = 0;

        $humanIMG.src = "./app/assets/hero/dasigoAlienForm.png";
        $backgroundIMG.style.backgroundImage = `
      linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(./app/assets/hero/heroBackgroundAlien.gif)
      `;

        alienSound.play();
        imgToggler = 1;

      } else if (imgToggler === 1) {

        alienSound.pause();
        alienSound.currentTime = 0;

        $humanIMG.src = "./app/assets/hero/dasigoanime.png";
        $backgroundIMG.style.backgroundImage = `
      linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(./app/assets/hero/heroBackground.gif)
      `;

        alienSound.play();
        imgToggler = 0;

      }


    })
  }

  function switchProject() {

    const d = document;
    let $folders = d.querySelectorAll(".folder img");
    let $titles = d.querySelectorAll(".folder h4");
    let $projectPreview = d.querySelector(".projects_preview img");
    let $projectText = d.querySelector(".preview_text");


    d.addEventListener("click", e => {

      if (!e.target.matches(".folder img") && !e.target.matches(".folder h4")) { return false }

      //Sonido solo en escritorio
      if (window.innerWidth > 1024) {
        let openSound = new Audio("./app/assets/sounds/openFolder.flac");
        openSound.volume = 0.5;
        openSound.play();
      }


      //Reseteamos todos los projectos
      $folders.forEach(folder => {
        folder.src = "./app/assets/home/folder-icon2.png";
      })
      $titles.forEach(title => {
        title.style.color = "#fff";
      })

      //Coloreamos el proyecto clickeado

      //Si clickea en la imagen
      if (e.target.matches("img")) {
        //Colorea la imagen y luego el título
        e.target.src = "./app/assets/home/folder-icon2-selected.png";
        let $h4 = e.target.nextElementSibling;
        $h4.style.color = "#896aaa";

        //Obtiene la imagen del proyecto con data-id
        let projectID = `project-${e.target.parentElement.dataset.id}.jpg`;
        $projectPreview.src = `./app/assets/home/${projectID}`;

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
        $img.src = "./app/assets/home/folder-icon2-selected.png";

        //Obtiene la imagen del proyecto con data-id
        let projectID = `project-${e.target.parentElement.dataset.id}.jpg`;
        $projectPreview.src = `./app/assets/home/${projectID}`;

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

  function autoSlider() {

    const d = document;
    let $slider = d.querySelector(".slider_container");
    let $slide = d.querySelectorAll(".slide");
    let $pointers = d.querySelectorAll(".slider_pointers ul li");
    let percentage = 0;
    let moves = 0;

    let slideInterval = setInterval(() => {
      moveSlider();
    }, 3000);

    function moveSlider() {

      if (percentage > -200) {
        percentage -= 100;
        moves++;
      } else {
        percentage = 0;
        moves = 0;
      }

      //Slide Switch
      $slide.forEach((slide) => {
        slide.style.transform = `translateX(${percentage}%)`;
      })

      //Pointer Switch
      let $lastActivePointer = d.querySelector(".pointer--active");
      $lastActivePointer.classList.remove("pointer--active");

      $pointers[moves].classList.add("pointer--active");

    }

    window.addEventListener("hashchange", () => {
      // Detener el intervalo cuando cambia el hash
      clearInterval(slideInterval);
    });

  }

  function contactFormValidations() {

    const d = document;
    const $form = d.querySelector(".contact_form");
    const $inputs = d.querySelectorAll(".form_input input");
    const $textarea = d.querySelector(".form_textarea textarea");
    const $loader = d.querySelector(".contact_loader");
    const $response = d.querySelector(".contact_response");

    //Agrega un span por cada input/textarea y lo oculta
    $inputs.forEach(input => {
      let $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("form_error", "none")
      input.insertAdjacentElement("afterend", $span);
    })

    let $span = d.createElement("span");
    $span.id = $textarea.name;
    $span.textContent = $textarea.title;
    $span.classList.add("form_error", "none")
    $textarea.insertAdjacentElement("afterend", $span);


    //Al escribir, valida la expresión regular
    //Si no es válida, agrega el "is-active" al span y se muestra con una animación
    d.addEventListener("keyup", e => {

      if (!e.target.matches(".form_input input") && !e.target.matches(".form_textarea textarea")) return false;

      let $input = e.target;
      let pattern = $input.pattern || false;

      if (pattern && $input.value !== "") {

        let regex = new RegExp(pattern);

        if (!regex.exec($input.value)) {
          return d.getElementById($input.name).classList.add("is-active");
        } else if (regex.exec($input.value)) {
          return d.getElementById($input.name).classList.remove("is-active")
        }

      }

      if (!pattern && $input.value === "") {
        return d.getElementById($input.name).classList.add("is-active")
      } else if (!pattern && $input.value != "") {
        return d.getElementById($input.name).classList.remove("is-active");
      }

    })

    //Envia el formulario del submit (esta fuera del form)

    d.addEventListener("click", e => {

      if (!e.target.matches(".form_submit")) return false;

      e.preventDefault();

      //Validación de Formulario

      //Valida si tienen mensaje de error activo
      let validation = true;
      let errors = d.querySelectorAll(".form_error");

      errors.forEach(error => {
        if (error.classList.contains("is-active")) {
          validation = false;
        }
      })

      //Valida si el formulario esta vacío
      if ($inputs.value === "" || $textarea.value === "") {
        validation = false;
      }

      //Envia formulario / Inicia animación de error
      if (validation == true) {

        $loader.classList.add("is-active");

        fetch("https://formsubmit.co/ajax/marioyxyluigi@gmail.com", {
          method: "POST",
          body: new FormData($form)
        })
          .then(res => res.ok ? res.json() : Promise.reject(res))
          .then(json => {
            console.log(json)
            $loader.classList.remove("is-active");
            $response.innerHTML = `
        <h3>¡Email sent!</h3>
        <h3>👾I'll contact you soon👾</h3>
        `;
            $response.classList.add("is-active");
          })
          .catch(err => {
            console.log(err);
            $loader.classList.remove("is-active");
            $response.innerHTML = `
        <h3>🤖Ocurrió un error🤖</h3>
        <h3>Vuelve a intentarlo mas tarde...</h3>
        `;;
            $response.classList.add("is-active");
          })
          .finally(() => {
            setTimeout(() => {
              $response.classList.remove("is-active");
            }, 3000)
            $form.reset();
          })

      } else {

        //Inicia animación de bordes rojos
        errors.forEach(error => {
          let $invalidInput = error.previousElementSibling;
          $invalidInput.classList.add("form-incomplete");
          setTimeout(() => {
            $invalidInput.classList.remove("form-incomplete");
          }, 1000)
        })

      }



    })
  }

  //Esperamos a que se cargue el DOM para llamar a las funciones
  setTimeout(() => {

    alienEffect(".hero_img", ".hero");
    switchProject();
    autoSlider();
    contactFormValidations();
  }, 100)

  //Retornamos el nodo HOME
  return $home;
}