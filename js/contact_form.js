const d = document;

export function contactFormValidations() {

  const $form = d.querySelector(".contact_form");
  const $inputs = d.querySelectorAll(".form_input input");

  //Agrega un span por cada input y lo oculta
  $inputs.forEach(input => {
    let $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form_error", "none")
    input.insertAdjacentElement("afterend", $span);
  })

  //Al escribir, valida la expresión regular
  //Si no es válida, agrega el "is-active" al span y se muestra con una animación
  d.addEventListener("keyup", e => {

    if (!e.target.matches(".form_input input")) return false;

    let $input = e.target;
    let pattern = $input.pattern;

    if (pattern && $input.value !== "") {

      let regex = new RegExp(pattern);

      return !regex.exec($input.value)
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
    }
  })
} 