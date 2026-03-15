function scrollToSection(sectionId){

document.getElementById(sectionId).scrollIntoView({
behavior:'smooth'
});

}

const form = document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! We will contact you soon.");

form.reset();

});


/* Logo effect */

window.addEventListener("scroll", function(){

const logo = document.querySelector(".logo");

if(window.scrollY > 50){

logo.innerHTML = "⚡";

}else{

logo.innerHTML = "<span class='flash'>⚡</span> FLASHHOLICZ";

}

});