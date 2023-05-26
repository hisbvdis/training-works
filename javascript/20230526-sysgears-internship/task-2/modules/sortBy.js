export const sortBy = ({data, condition}) => {
  return new Promise((resolve) => {
    if (!Object.hasOwn(condition, "sortBy")) {
      resolve({data, condition});
    }

    const result = [...data];
    condition.sortBy.forEach((key) => result.sort((a, b) => {
      if (typeof a[key] === "number") {
        return a[key] - b[key];
      } else {
        if (a[key]  >  b[key]) return  1;
        if (a[key] === b[key]) return  0;
        if (a[key]  <  b[key]) return -1;
      }
    }))

    resolve({data: result, condition});
  })
}
