export default ({scale, temp, liftState}) => {
  const scales = {
    c: "Цельсия",
    f: "Фаренгейта",
  }
  
  return (<>
    <p>Введите температуру в градусах {scales[scale]}</p>
    <input
      type="text"
      value={temp}
      // Свойство для поднятия значения вверх в родительский компонент
      onChange={(evt) => liftState({
        temp: evt.target.value,
        scale: scale,
      })}
    />
  </>)
}