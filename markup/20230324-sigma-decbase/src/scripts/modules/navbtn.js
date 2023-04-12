const navBtn = document.querySelector("[data-navBtn]");

navBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  document.body.classList.toggle("page--navOpened");
  evt.currentTarget.classList.toggle("navBtn--opened");
})
