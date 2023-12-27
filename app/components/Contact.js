export function Contact() {

  const d = document;
  const $contact = d.createElement("section");
  $contact.classList.add("contact");

  let $contactHTML = `
  
  <!-- ContactForm -->
      <div class="relative_antenna">
        <img src="./app/assets/contact/antenna.png" alt="cartoon antenna" class="contact_antenna">
        <article class="home_contact home_contact--contact">
          <h3 class="contact_title contact_title--contact">Contact</h3>

          <form class="contact_form">


            <div class="form_background relative">

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

      <!-- CV -->
      <article class="contact_cv card">
        <div class="cv_links">
          <a class="cv_link" href="#drive">
            <img src="./app/assets/contact/cv-download.svg" alt="minimalistic download icon" class="cv_svg">
            EN-CV</a>
          <a class="cv_link" href="#drive">
            <img src="./app/assets/contact/cv-download.svg" alt="minimalistic download icon" class="cv_svg">
            ES-CV</a>
        </div>
        <img src="./app/assets/contact/dummy-cv.jpg" alt="Dasigo Szkamarda CV preview">
      </article>
  
  `;

  $contact.innerHTML = $contactHTML;

  //Funciones para CONTACT
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

  //Esperamos unos segundos a que se cargue el DOM antes de llamar a las funciones
  setTimeout(() => {

    contactFormValidations();

  }, 100);


  //Retornamos el nodo CONTACT
  return $contact;

}