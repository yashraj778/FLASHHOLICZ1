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
