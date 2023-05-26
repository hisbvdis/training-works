import { readFile } from "node:fs/promises";

let rules = null;

try {
  const filePath = new URL("./rules.json", import.meta.url);
  const content = await readFile(filePath, { encoding: "utf8" });
  rules = JSON.parse(content);
} catch (err) {
  console.log( err.message );
}

const convert = (direction) => {
  const fromUnit = direction.distance.unit;
  const toUnit = direction.convertTo;
  const fromValue = direction.distance.value;
  
  const fromMultiplier = rules.find(({unit}) => unit === fromUnit).mmScale;
  const toMultiplier = rules.find(({unit}) => unit === toUnit).mmScale;

  let calculation = fromValue * fromMultiplier / toMultiplier;
  calculation = calculation.toFixed(2);
  calculation = Number.parseFloat(calculation);
  const result = JSON.stringify({ "unit": toUnit, "value": calculation });
  
  console.log( result );
  return result;
}

convert({"distance": {"unit": "m", "value": 0.5}, "convertTo": "ft"});
