export const include = ({data, condition}) => {
  return new Promise((resolve) => {
    if (!Object.hasOwn(condition, "include")) {
      resolve({data, condition});
    }
    
    const result = data.filter((item) => condition.include.every((condition) => {
      const conditionKey = Object.keys(condition)[0];
      const conditionValue = Object.values(condition)[0];
      return item[conditionKey] === conditionValue;
    }));

    resolve({data: result, condition});
  })
}
