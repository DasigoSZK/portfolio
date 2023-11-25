const d = document;

export function contactFormValidations() {

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

    let validation = true;
    let errors = d.querySelectorAll(".form_error");
    console.log(errors);

    errors.forEach(error => {
      if (error.classList.contains("is-active")) {
        validation = false;
      }
    })

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