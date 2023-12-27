export function Footer() {

  const d = document;
  const $footer = d.createElement("footer");
  $footer.classList.add("footer");

  let $footerHTML = `
  <div class="footer_content">
      <!-- Social Media -->
      <article class="footer_links">

        <h3 class="links_title">-Social Media</h3>
        <div class="link">
          <img class="links_logo" src="./app/assets/footer/footer-githublogo.svg" alt="GitHub svg logo">
          <a href="#">GitHub</a>
        </div>

        <div class="link">
          <img class="links_logo" src="./app/assets/footer/footer-linkedinlogo.svg" alt="LinkedIn svg logo">
          <a href="#">LinkedIn</a>
        </div>

        <div class="link">
          <img class="links_logo" src="./app/assets/footer/footer-instagramlogo.svg" alt="Instagram svg logo">
          <a href="#">Instagram</a>
        </div>

      </article>

      <!-- Coffe Cup Logo -->
      <img class="footer_logo none" src="./app/assets/header/logoblack-512px.png" alt="8-bit coffee cup logo">

      <!-- Download CV -->
      <article class="footer_links">

        <h3 class="links_title">-Download CV</h3>
        <div class="link">
          <img class="links_logo" src="./app/assets/footer/footer-pdflogo.svg" alt="Pdf svg logo">
          <a href="#">EN-CV</a>
        </div>

        <div class="link">
          <img class="links_logo" src="./app/assets/footer/footer-pdflogo.svg" alt="Pdf svg logo">
          <a href="#">ES-CV</a>
        </div>

      </article>
    </div>

    <hr class="footer_hr">

    <h6 class="footer_copyright">Copyright 2023 - Dasigo Szkamarda</h6>
  
  `;

  $footer.innerHTML = $footerHTML;

  //Retornamos el nodo del Footer
  return $footer;
}