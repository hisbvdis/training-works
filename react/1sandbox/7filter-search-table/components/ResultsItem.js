export default ({name, price, stocked}) => {
  const style = (stocked === false) ? {color: "red"} : {};

  return (
    <tr style={style}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}