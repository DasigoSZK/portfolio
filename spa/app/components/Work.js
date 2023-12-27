export function Work() {

  const d = document;
  const $work = d.createElement("section");
  $work.classList.add("work");

  let $workHTML = `
  <!-- Workcard-1 -->
      <article class="workcard">

        <h3 class="workcard_title">Login CRUD</h3>

        <img class="workcard_img" src="./app/assets/work/project1.png" alt="login crud preview">

        <p class="workcard_text">
          It's a user-friendly application that allows individuals to create accounts and manage their profiles
          effortlessly.
          With this CRUD functionality, users can easily register by providing essential information, such as their
          name, email, and password.
        </p>

        <div class="workcard_technologies">

          <h4 class="technologies_title">Technologies:</h4>
          <div class="technologies_container">
            <span class="tech">HTML</span>
            <span class="tech tech--2">CSS</span>
            <span class="tech tech--3">Node.js</span>
            <span class="tech tech--4">JavaScript</span>
            <span class="tech tech--5">MongoDB</span>
            <span class="tech tech--6">Java</span>
          </div>

        </div>

        <a class="workcard_button" href="#workcard">Go to Website</a>
      </article>

      <!-- Workcard-2 -->
      <article class="workcard workcard--reverse">

        <h3 class="workcard_title">SiwftPay API</h3>

        <img class="workcard_img" src="./app/assets/work/project2.webp" alt="login crud preview">

        <p class="workcard_text">
          The SwiftPay API is a cutting-edge, secure, and highly scalable payment gateway that revolutionizes onlines
          transactions. Seamlessly integrating with e-commerce website and applications, SwiftPay ensure swift, safe,
          and hassle-free payment processing for yout business.
        </p>

        <div class="workcard_technologies">

          <h4 class="technologies_title">Technologies:</h4>
          <div class="technologies_container">
            <span class="tech">HTML</span>
            <span class="tech tech--2">CSS</span>
            <span class="tech tech--3">Node.js</span>
            <span class="tech tech--4">JavaScript</span>
            <span class="tech tech--5">MongoDB</span>
            <span class="tech tech--6">Java</span>
          </div>

        </div>

        <a class="workcard_button" href="#workcard">Go to Website</a>
      </article>

      <!-- Workcard-3 -->
      <article class="workcard">

        <h3 class="workcard_title">FinEase</h3>

        <img class="workcard_img" src="./app/assets/work/project3.png" alt="login crud preview">

        <p class="workcard_text">
          FinEase is a state-of-the-art digital banking platform thet redefines the way you finances. Say goodbye to the
          hassle of traditional banking and embrace a work of convenience and control right at your fingertips.
        </p>

        <div class="workcard_technologies">

          <h4 class="technologies_title">Technologies:</h4>
          <div class="technologies_container">
            <span class="tech">HTML</span>
            <span class="tech tech--2">CSS</span>
            <span class="tech tech--3">Node.js</span>
            <span class="tech tech--4">JavaScript</span>
            <span class="tech tech--5">MongoDB</span>
            <span class="tech tech--6">Java</span>
          </div>

        </div>

        <a class="workcard_button" href="#workcard">Go to Website</a>
      </article>

      <!-- Workcard-4 -->
      <article class="workcard workcard--reverse">

        <h3 class="workcard_title">JobQuest</h3>

        <img class="workcard_img" src="./app/assets/work/project4.png" alt="login crud preview">

        <p class="workcard_text">
          JobQuest is your all-in-one destination for navigating the ever-evolving job market. Whether you're a seasoned
          professional seeking a career change or a recent graduate taking your first steps into the workforce, JobQuest
          is your trusted companion on your employment journey.
        </p>

        <div class="workcard_technologies">

          <h4 class="technologies_title">Technologies:</h4>
          <div class="technologies_container">
            <span class="tech">HTML</span>
            <span class="tech tech--2">CSS</span>
            <span class="tech tech--3">Node.js</span>
            <span class="tech tech--4">JavaScript</span>
            <span class="tech tech--5">MongoDB</span>
            <span class="tech tech--6">Java</span>
          </div>

        </div>

        <a class="workcard_button" href="#workcard">Go to Website</a>
      </article>
  
  `;

  $work.innerHTML = $workHTML;

  //Devolvemos el nodo de WORK

  return $work;


}