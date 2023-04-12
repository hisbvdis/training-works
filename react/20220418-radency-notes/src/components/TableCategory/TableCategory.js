import { connect } from "react-redux";

const TableCategory = ({category, notes}) => {
  const activeCount = notes.list
    .filter(note => note.isArchived === false)
    .filter(note => note.categoryId === category.id).length;

  const archivedCount = notes.list
    .filter(note => note.isArchived === true)
    .filter(note => note.categoryId === category.id).length;
  
  return (<>
    <tr className="table__row">
      <td className="table__cell">{category.name}</td>
      <td className="table__cell">{activeCount}</td>
      <td className="table__cell">{archivedCount}</td>
    </tr>
  </>)
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  notes: state.notes
})

export { TableCategory as TableCategory };
export default connect(mapStateToProps)(TableCategory);