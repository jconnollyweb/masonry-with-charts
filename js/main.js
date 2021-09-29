



var imageCar = document.querySelectorAll('.car-image');
var button = document.querySelectorAll('.btn');
var backdrop = document.querySelector('.modal-parent');
var modal = document.querySelector('.modal');
var x = document.querySelector('.X');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';

}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';

}

for (i = 0; i < imageCar.length; i++) {

imageCar[i].addEventListener('click', openModal);

}

for (i = 0; i < button.length; i++){
    button[i].addEventListener('click', openModal);
}

// imageCar.onclick = openModal;
// button.onclick = openModal;
x.onclick =closeModal;



// slider images

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}



