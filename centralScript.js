var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// function dayDisplay() {
//   var d = new Date();
//   var weekday = new Array(7);
//   weekday[0] = "Sunday";
//   weekday[1] = "Monday";
//   weekday[2] = "Tuesday";
//   weekday[3] = "Wednesday";
//   weekday[4] = "Thursday";
//   weekday[5] = "Friday";
//   weekday[6] = "Saturday";
//   var sunday = ["8PM ONE PUNCH MAN", "8:30PM ROBIHACHI", "9PM UNSTOPPABLE HIGH KICK"];
//   var monday = ["5PM POKEMON", "5:30PM ONE PIECE", "7:45PM GOLGO 13",  "8:15PM MONSTER", "8:45PM OUTLAW STAR", "9:15PM SPACE BROTHERS"];
//   var tuesday = ["5PM POKEMON", "5:30PM ONE PIECE", "7:45PM GOLGO 13",  "8:15PM MONSTER", "8:45PM OUTLAW STAR", "9:15PM SPACE BROTHERS"];
//   var wednesday = ["5PM POKEMON", "5:30PM ONE PIECE", "7:45PM GOLGO 13",  "8:15PM MONSTER", "8:45PM OUTLAW STAR", "9:15PM SPACE BROTHERS"];
//   var thursday = ["5PM POKEMON", "5:30PM ONE PIECE", "7:45PM GOLGO 13",  "8:15PM MONSTER", "8:45PM OUTLAW STAR", "9:15PM SPACE BROTHERS"];
//   var friday = ["5PM POKEMON", "5:30PM ONE PIECE", "7:45PM GOLGO 13",  "8:15PM MONSTER", "8:45PM OUTLAW STAR", "9:15PM SPACE BROTHERS"];
//   var saturday = ["8PM HANDA KUN", "8:30PM D-FRAG", "9PM UNSTOPPABLE HIGH KICK"];

//   var n = weekday[d.getDay()];
//   document.getElementById("demo").innerHTML = n;

//   if(n = 0){

//   } else if (n = 1){

//   } else if (n = 2){

//   } else if (n = 3){

//   } else if (n = 4){

//   } else if (n = 5){

//   } else if (n = 6){

//   }
// }





















