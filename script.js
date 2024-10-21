let slideIndex = 0;
showSlides();


function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
let header = document.querySelector("header")
let menu = document.querySelector("#boxicons")
let navbar = document.querySelector(".navbar")

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active'); 
}





