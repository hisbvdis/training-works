export const exclude = ({data, condition}) => {
  return new Promise((resolve) => {
    if (!Object.hasOwn(condition, "exclude")) {
      resolve({data, condition});
    }
    
    const result = data.filter((item) => !condition.exclude.every((condition) => {
      const conditionKey = Object.keys(condition)[0];
      const conditionValue = Object.values(condition)[0];
      return item[conditionKey] === conditionValue;
    }));

    resolve({data: result, condition});
  })
}
