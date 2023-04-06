const linksInterno = document.querySelectorAll('.menu-links a[href^="#"');

linksInterno.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
