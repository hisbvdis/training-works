import ResultsCategory from "./ResultsCategory.js";
import ResultsItem from "./ResultsItem.js";

export default ({data, search, onlyStock}) => {
  // Предварительная сортировка по категориям
  let sortedByCategories = [...data]
    .sort((a, b) => a.category < b.category ? -1 : a.category > b.category ? 1 : 0)


  // Составление итогового массива
  const resultArray = [];
  let lastCategory = "";

  sortedByCategories.forEach((item, i) => {
    // 1. Если имя элемента не содержит текст из "Search", прервать
    if (item.name.toLowerCase().includes(search.toLowerCase()) === false) {
      return
    }

    // 2. Если включён фильтр "Only stock", а элемент не "stocked", прервать
    if (onlyStock === true && item.stocked !== true) {
      return
    }

    // 3. Если у элемента новая категория...
    if (item.category !== lastCategory) {
      // 3.1. Добавить в итоговый массив компонент "Категория"
      resultArray.push(<ResultsCategory key={"cat" + i} title={item.category}/>)
      // 3.2. Обновить переменную с последней категорией
      lastCategory = item.category;
    }

    // 4. Добавить в итоговый массив компонент "Товар"
    resultArray.push(<ResultsItem key={i} name={item.name} price={item.price} stocked={item.stocked} />)
  })
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{resultArray}</tbody>
    </table>
  )
}