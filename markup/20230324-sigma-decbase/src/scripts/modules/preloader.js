const preloader = document.querySelector("[data-preloader]");

preloader.classList.add("preloader--show");

setTimeout(() => {
  preloader.classList.remove("preloader--show");
}, 5000)
