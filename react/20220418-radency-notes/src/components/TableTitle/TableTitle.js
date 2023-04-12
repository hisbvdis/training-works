const TableTitle = ({titles}) => {
  return (<>
    <tr className="table__row  table__row--title">
      {titles.map((title, i) => (
        <th key={i} className="table__cell">{title}</th>
      ))}
    </tr>
  </>)
}

export default TableTitle;