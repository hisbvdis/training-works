const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("news__animatable--end");
    } else {
      entry.target.classList.remove("news__animatable--end");
    }
  });
});

observer.observe(document.querySelector("[data-animatable1]"));
observer.observe(document.querySelector("[data-animatable2]"));
