import { useState } from "react";
import Result from "./Result.js";
import Input from "./Input.js";

export default () => {
  // Создать запись в состоянии (объект с двумя свойствами)
  const [{temp, scale}, setTemp] = useState({temp: 0, scale: "c"})
  // Если единица измерения температуры, которая хранится в состоянии,
  // ... отличается, посчитать значение по формуле
  const cTemp = (scale === "c")  ?  temp  :  (temp - 32) * 5 / 9;
  const fTemp = (scale === "f")  ?  temp  :  (temp * 9 / 5) + 32;
  
  return (<>
    {/* scale — единицы измерения температуры */}
    {/* temp — значение температуры */}
    {/* liftValue — свойство для поднятия значений из компонентов <Input/> */}
    <Input scale="c" temp={cTemp} liftState={(data) => setTemp(data)}/>
    <Input scale="f" temp={fTemp} liftState={(data) => setTemp(data)}/>

    {/* В вычисление кипения передаётся только температура в Цельсиях */}
    <Result temp={cTemp}/>
  </>)
}