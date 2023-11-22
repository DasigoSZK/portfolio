const d = document;
let $slider = d.querySelector(".slider_container");
let $slide = d.querySelectorAll(".slide");
let $pointers = d.querySelectorAll(".slider_pointers ul li");
let percentage = 0;
let moves = 0;

export function autoSlider() {

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

}