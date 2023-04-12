const form = document.querySelector("[data-weatherForm]");
const result = document.querySelector("[data-weatherResult]");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  
  result.textContent = "";
  
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${form.elements.query.value}&limit=1&appid=1257cac794de0b0e56d12de08021128c`)
    .then((r) => r.json())
    .then((data) => {
      const {lat, lon} = data[0];
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1257cac794de0b0e56d12de08021128c`)
        .then((r) => r.json())
        .then((data) => {
          result.textContent = `City: ${data.name}, Temperature: ${data.main.temp}`
        })
    })
})
