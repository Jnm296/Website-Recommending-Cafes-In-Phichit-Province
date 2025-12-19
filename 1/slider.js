// slider.js
let slideIndex = 1;
showSlides(slideIndex);

// ควบคุมการเลื่อนด้วยปุ่ม
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// ควบคุมการเลื่อนด้วยจุด dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // วนกลับไปภาพแรกเมื่อถึงภาพสุดท้าย
  if (n > slides.length) {slideIndex = 1}    
  // วนไปภาพสุดท้ายเมื่อเลื่อนย้อนกลับจากภาพแรก
  if (n < 1) {slideIndex = slides.length}
  
  // ซ่อนภาพทั้งหมด
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // นำ Active class ออกจาก dot ทั้งหมด
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // แสดงภาพปัจจุบันและกำหนด Active ให้ dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}