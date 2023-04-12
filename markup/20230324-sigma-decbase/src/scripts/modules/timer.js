let timerId = null;

const resetTimer = () => {
  if (timerId !== null) {
    clearTimeout(timerId);
    timerId = null;
  }
  
  timerId = setTimeout(() => {
    if (!confirm("Are you still here?")) {
      window.close();
    } else {
      resetTimer();
    }
  }, 60000)
}

resetTimer();
document.addEventListener("keydown", resetTimer);
document.addEventListener("pointerdown", resetTimer);
document.addEventListener("contextmenu", resetTimer);
document.addEventListener("scroll", resetTimer);
document.addEventListener("pointermove", resetTimer);
