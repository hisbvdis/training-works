import { readFile } from "node:fs/promises";

const filePath = new URL("./survey.json", import.meta.url);
const content = await readFile(filePath, { encoding: "utf8" });
const survey = JSON.parse(content);

// const survey = await fetch("./survey.jsonc").then(r => r.json()).then(data => data);
// import { survey } from "./survey.js";

const getPaths = (item) => {
  const {type, question, answer, responses, next} = item;
  
  // Rule: 1
  if (responses.every(({next}) => next === null)) {
    return {[question]: responses.map(({answer}) => answer).join("/")};
  }

  // Rule: 2
  return responses.map(({answer, next}) => {
    if (next === null) {
      return [{[question]: answer}]
    }
    
    else if (!Array.isArray(getPaths(next))) {
      return [{[question]: answer}, getPaths(next)];
    }
    
    else if (Array.isArray(getPaths(next))) {
      return getPaths(next).map((item) => [{[question]: answer}, ...item])
    }
  });
}

const paths = getPaths(survey);
const result = [];

paths.forEach((item) => {
  if (item.some((value) => Array.isArray(value))) {
    item.forEach((value) => result.push(value));
  } else {
    result.push(item);
  }
})

console.log( result )
