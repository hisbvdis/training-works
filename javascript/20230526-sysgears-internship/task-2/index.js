import { exclude } from "./modules/exclude.js";
import { include } from "./modules/include.js";
import { sortBy } from "./modules/sortBy.js";


new Promise((resolve) => resolve({
  data: [
    { user: "mike@mail.com", rating: 20, disabled: false },
    { user: "greg@mail.com", rating: 14, disabled: false },
    { user: "john@mail.com", rating: 25, disabled: true },
  ],
  condition: { exclude: [{ disabled: true }], sortBy: ["rating"] },
}))
  .then(exclude)
  .then(include)
  .then(sortBy)
  .then(({data}) => console.log( JSON.stringify({result: data}) ));
