const page = document.querySelector("[data-page]");
const header = document.querySelector("[data-header]");
const headerInitialHeight = header.offsetHeight + "px";

const setHeader = () => {
  if (window.scrollY > 0) {
    header.classList.add("header--fixed");
    page.style.paddingBlockStart = headerInitialHeight;
  } else if (window.scrollY < 80) {
    header.classList.remove("header--fixed");
    page.style.paddingBlockStart = "0";
  }
}

setHeader();

document.addEventListener("scroll", () => {
  setHeader();
})
