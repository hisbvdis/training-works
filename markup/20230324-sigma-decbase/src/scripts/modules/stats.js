const statList = document.querySelector("[data-statsList]");
const [item1, item2] = Array.from(statList.children);

const setGap = () => {
  const item1End = item1.getBoundingClientRect().x + item1.getBoundingClientRect().width;
  const item2Start = item2.getBoundingClientRect().x;
  const gap = item2Start - item1End;
  statList.style.setProperty("--gap", gap + "px");
}

setGap();

window.addEventListener("resize", () => {
  setGap();
})
