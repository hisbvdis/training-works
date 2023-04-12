const progressBar = document.querySelector("[data-progressBar]");
const page = document.querySelector("[data-page]");

const calcProgress = () => {
  const scroll = window.scrollY;
  const viewPortHeight = window.innerHeight;
  const documentHeight = page.offsetHeight;
  const progress = Math.floor(scroll / (documentHeight - viewPortHeight) * 100);

  progressBar.style.setProperty("--scroll", progress + "%");
}

calcProgress();

document.addEventListener("scroll", () => {
  calcProgress();
})
