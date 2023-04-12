const prevBtn = document.querySelector("[data-prevBtn]");
const nextBtn = document.querySelector("[data-nextBtn]");

prevBtn.addEventListener("click", () => {
  const list = document.querySelector("[data-testimonialsList]");
  const listWidth = list.getBoundingClientRect().width;
  const listScrollWidth = list.scrollWidth;

  if (list.scrollLeft === 0) {
    list.scrollTo({top: 0, left: listScrollWidth, behavior: "smooth"});
  } else {
    list.scrollBy({top: 0, left: -listWidth, behavior: "smooth"});
  }
})


nextBtn.addEventListener("click", () => {
  const list = document.querySelector("[data-testimonialsList]");
  const listWidth = list.getBoundingClientRect().width;
  const listScrollWidth = list.scrollWidth;

  if ((listScrollWidth - list.scrollLeft) <= listWidth) {
    list.scrollTo({top: 0, left: 0, behavior: "smooth"});
  } else {
    list.scrollBy({top: 0, left: listWidth, behavior: "smooth"});
  }
})
