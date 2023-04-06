const btnMobile = document.querySelector(".btnMobile");
function toogleMenu(e) {
  if (e.type === "touchstart") {
    e.preventDefault();
  }
  const menuNav = document.querySelector(".menu-nav");
  menuNav.classList.toggle("active");

  const links = menuNav.querySelectorAll(".menu-links a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menuNav.classList.remove("active");
    });
  });
}
btnMobile.addEventListener("click", toogleMenu);
btnMobile.addEventListener("touchstart", toogleMenu);
