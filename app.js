function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  const p = document.getElementById("texto-footer");

  p.innerText = `${year} © Todos os direitos Reservados - Clínica MP`;
}

Copyright();

const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = mobileMenu.querySelectorAll("a");

toggleBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-60");
  } else {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-60");
  }
});

// Fecha o menu quando um link for clicado
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-60");
  });
});