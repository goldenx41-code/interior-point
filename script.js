function toggleMenu(){

  const nav = document.getElementById("nav");

  nav.classList.toggle("open");

}


// Close mobile menu after clicking
document.querySelectorAll(".nav a").forEach(function(link){

  link.addEventListener("click",function(){

    document.getElementById("nav").classList.remove("open");

  });

});


// Small reveal animation
const items = document.querySelectorAll(
  ".service-sidebar, .about-box, .recent, .project-row article, .gallery-photo, .review-card"
);

const observer = new IntersectionObserver(function(entries){

  entries.forEach(function(entry){

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      observer.unobserve(entry.target);
    }

  });

},{
  threshold:.08
});


items.forEach(function(item){

  item.style.opacity = "0";
  item.style.transform = "translateY(15px)";
  item.style.transition = "opacity .5s ease, transform .5s ease";

  observer.observe(item);

});
