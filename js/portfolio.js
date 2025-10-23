
document.addEventListener("DOMContentLoaded", () => {
  const humberger = document.querySelector(".humberger");
  const navList = document.querySelector(".nav-list");

  humberger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
