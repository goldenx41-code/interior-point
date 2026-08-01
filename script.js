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
