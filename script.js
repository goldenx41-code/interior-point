document.addEventListener("DOMContentLoaded", function () {

  // Smooth Scroll
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

  // Image Click Open
  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function () {
      window.open(this.src, "_blank");
    });
  });

});

// Gallery Show/Hide
function showGallery(id) {

  document.querySelectorAll(".gallery-content").forEach(function(item){
    item.style.display = "none";
  });

  const gallery = document.getElementById(id);

  if(gallery){
    gallery.style.display = "block";
  }

}

// Default Gallery
window.onload = function () {
  showGallery("pvc");
};
