const d = document;

export function contactFormValidations() {

  const $form = d.querySelector(".contact_form");
  const $inputs = d.querySelectorAll(".form_input input");
  const $textarea = d.querySelector(".form_textarea textarea");

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

      return !regex.exec($input.value)
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
    }

    if (!pattern && $input.value === "") {
      d.getElementById($input.name).classList.add("is-active")
    } else if (!pattern && $input.value != "") {
      d.getElementById($input.name).classList.remove("is-active");
    }
  })

  //Envia el formulario del submit (esta fuera del form)

  d.addEventListener("click", e => {
    if (!e.target.matches(".form_submit")) return false;

    e.preventDefault();
    $form.submit();
  })
} 