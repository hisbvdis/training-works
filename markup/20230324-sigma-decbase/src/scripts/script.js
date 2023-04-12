// import "./modules/preloader.js";
import "./modules/navbtn.js";
import "./modules/header.js";
import "./modules/progressBar.js";
import "./modules/services.js";
import "./modules/stats.js";
import "./modules/testimonials-data.js";
import "./modules/testimonials-slider.js";
import "./modules/news.js";
import "./modules/sign.js";
// import "./modules/timer.js";
import "./modules/open-api.js";


document.querySelector("[data-footerYear]").textContent =
  new Date().toLocaleString("en-us", { year: "numeric" });
