// MOBILE MENU
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}


// CLOSE MOBILE MENU AFTER CLICK
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("active");
  });
});


// COUNTER ANIMATION
const counters = document.querySelectorAll(".stat strong");

const observer = new IntersectionObserver((entries, observer) => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = Number(counter.dataset.target);

    let current = 0;
    const speed = Math.max(10, Math.floor(1800 / target));

    const updateCounter = () => {

      current += Math.ceil(target / 80);

      if (current >= target) {
        counter.textContent = target + "+";
        return;
      }

      counter.textContent = current;
      setTimeout(updateCounter, speed);
    };

    updateCounter();

    observer.unobserve(counter);

  });

}, {
  threshold: 0.5
});


counters.forEach(counter => {
  observer.observe(counter);
});


// SIMPLE SCROLL REVEAL
const revealItems = document.querySelectorAll(
  ".service-card, .project-card, .review-card, .why-grid > div"
);

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }

  });

}, {
  threshold: 0.1
});


revealItems.forEach(item => {

  item.style.opacity = "0";
  item.style.transform = "translateY(25px)";
  item.style.transition = "opacity .6s ease, transform .6s ease";

  revealObserver.observe(item);

});
