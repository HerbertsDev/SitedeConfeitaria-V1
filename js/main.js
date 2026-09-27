const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");
const header = document.querySelector(".site-header");
const navigationLinks = document.querySelectorAll(".main-navigation a");
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");
const currentYear = document.querySelector("#current-year");

function closeMenu() {
  menuButton?.classList.remove("active");
  navigation?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const menuIsOpen = navigation.classList.toggle("open");

  menuButton.classList.toggle("active", menuIsOpen);
  menuButton.setAttribute("aria-expanded", String(menuIsOpen));
  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "Fechar menu" : "Abrir menu",
  );
  document.body.classList.toggle("menu-open", menuIsOpen);
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();

  formFeedback.textContent = `Obrigada, ${name}! Esta é uma simulação e nenhuma mensagem foi enviada.`;
  contactForm.reset();
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
