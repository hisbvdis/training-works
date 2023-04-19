export default ({temp}) => {
  return (
    <p>{(temp >= 100) ? "Закипит" : "Не закипит"}</p>
  )
}