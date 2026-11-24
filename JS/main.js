// Menú mobile
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Aparición suave al hacer scroll
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("is-visible"));
}

// Precarga instrumento/nivel en el formulario si viene en la URL
const params = new URLSearchParams(location.search);
["instrumento", "nivel"].forEach((name) => {
  const select = document.getElementById(name);
  const value = params.get(name);
  if (select && value) select.value = value;
});
