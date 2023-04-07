function initScrollToSection() {
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
}

initScrollToSection();

function scrollBtn() {
  const scrollBtn = document.querySelector(".scrollBtn");
  function subirTela() {
    console.log("clicoi");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  scrollBtn.addEventListener("click", subirTela);
}
scrollBtn();

function displayBtn() {
  if (window.scrollY === 0) {
    document.querySelector(".scrollBtn").style.display = "none";
  } else {
    document.querySelector(".scrollBtn").style.display = "flex";
  }
}
window.addEventListener("scroll", displayBtn);
