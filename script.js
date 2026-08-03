// Interior Point Website

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for menu links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Gallery hover effect
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", function () {
      window.open(this.src, "_blank");
    });
  });

});
function showGallery(id) {

const galleries = document.querySelectorAll(".gallery-content");

galleries.forEach(function(item){
item.style.display = "none";
});

document.getElementById(id).style.display = "block";

}

// Website खुलते ही PVC Gallery दिखेगी
window.onload = function () {
showGallery("pvc");
};
