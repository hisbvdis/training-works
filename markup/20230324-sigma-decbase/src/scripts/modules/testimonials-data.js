(async () => {
  const data = await fetch("data/testimonials.json")
  .then((r) => r.json())
  .then((data) => data);
const testimonialsList = document.querySelector("[data-testimonialsList]");
const testimonialsTemplate = document.querySelector("[data-testimonialsTemplate]");

data.forEach(({picture, name: {first, last}, location}) => {
  const testimonial = testimonialsTemplate.content.cloneNode(true);
  testimonial.querySelector("[data-photo]").src = picture.large;
  testimonial.querySelector("[data-name]").textContent = `${first} ${last}`;
  testimonial.querySelector("[data-job]").textContent = location.city;
  testimonialsList.append(testimonial);
})

})()
