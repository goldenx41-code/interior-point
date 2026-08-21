function openMenu() {
  document.getElementById("nav").classList.toggle("active");
}


// Mobile menu close after clicking
document.querySelectorAll("#nav a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("nav").classList.remove("active");
  });
});


// Smooth reveal animation
const elements = document.querySelectorAll(
  ".service, .gallery-item, .review, .features div"
);

const observer = new IntersectionObserver(function(entries) {

  entries.forEach(function(entry) {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});


elements.forEach(function(element) {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity .7s ease, transform .7s ease";

  observer.observe(element);

});
