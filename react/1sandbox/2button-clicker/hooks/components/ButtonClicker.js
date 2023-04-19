import { useState } from "react";
import Button from "./Button.js";

export default () => {
  // 1. В состоянии объявить свойство с начальным значением = 0
  const [value, setValue] = useState(0);

  return (<>
    <h1>Текущее значение: {value}</h1>
    <Button name="Задать 1" clickHandler={() => setValue(1)} />
    <Button name="Увеличить на 1" clickHandler={() => setValue(value + 1)} />
  </>)
}