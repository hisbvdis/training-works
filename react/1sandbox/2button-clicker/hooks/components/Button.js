// Компонент кнопки с минимальным функционалом
export default ({clickHandler, name}) => (
  <button onClick={clickHandler}>{name}</button>
)