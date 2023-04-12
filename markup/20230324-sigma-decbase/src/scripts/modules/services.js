(async () => {
  const categoriesListElem = document.querySelector("[data-categoriesList]");
const categoryTemplate = document.querySelector("[data-categoryTemplate]");
const serviceTemplate = document.querySelector("[data-serviceTemplate]");
const servicesListElem = document.querySelector("[data-servicesList]");
const data = await fetch("data/services.json").then((r) => r.json());


const renderCategories = () => {
  data
    .map(({category: {id, title}}) => ({id, title}))
    .reduce((res, category) => [...res, category], [{id: "all", title: "All"}])
    .forEach(({id, title}) => {
      const category = categoryTemplate.content.cloneNode(true);
      category.querySelector("[data-input]").id = `categories-${id}`;
      category.querySelector("[data-input]").value = id;
      category.querySelector("[data-input]").checked = (id === "all") ? true : false;
      category.querySelector("[data-label]").htmlFor = `categories-${id}`;
      category.querySelector("[data-label]").textContent = title;
      categoriesListElem.append(category);
    })
}


const renderServices = (category="all") => {
  servicesListElem.innerHTML = "";
  let servicesArray = null;
  
  if (category === "all") {
    servicesArray = data
      .map(({category: {id}, items}) => ({id, items: items.slice(-1)}))
  } else {
    servicesArray = data
      .filter(({category: {id}}) => id === category)
      .map(({category: {id}, items}) => ({id, items: items.slice(-3)}))
  }
  
  servicesArray.forEach(({id, items}) => {
    items.forEach(({name, desc}) => {
      const service = serviceTemplate.content.cloneNode(true);
      service.querySelector("[data-item]").classList.add(`services__item--${id}`);
      service.querySelector("[data-title]").textContent = name;
      service.querySelector("[data-desc]").textContent = desc;
      servicesListElem.append(service);
    })
  })
}


renderCategories();
renderServices("all");


categoriesListElem.addEventListener("change", (evt) => {
  const categoryId = evt.target.value;
  renderServices(categoryId);
});

})()
