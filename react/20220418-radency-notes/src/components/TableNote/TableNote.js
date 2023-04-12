import { connect } from "react-redux";
import { actions as noteActions } from "../../reducers/notes";
import TableBtn from "../TableBtn/TableBtn";

const TableNote = ({note, removeNote, categories, archiveNote}) => {
  const name = (note.name.length > 17) ? note.name.slice(0, 17) + "..." : note.name;
  const category = categories.list.find(category => category.id === note.categoryId)?.name;
  const content = (note.content.length > 17) ? note.content.slice(0, 17) + "..." : note.content;
  const dates = (note.dates.length > 19) ? note.dates.slice(0, 19) + "..." : note.dates;

  return (<>
    <tr className="table__row" data-id={`${note.id}`}>
      <td className="table__cell">
        <span className={`table__icon  table__icon--${note.categoryId}`}></span>
      </td>
      <td className="table__cell">{name}</td>
      <td className="table__cell">{note.date}</td>
      <td className="table__cell">{category}</td>
      <td className="table__cell">{content}</td>
      <td className="table__cell">{dates}</td>
      <td className="table__cell  table__cell--buttons">
        <TableBtn img="pencil.svg" clickHandler={() => console.log( note )}>Edit note</TableBtn>
        <TableBtn img="archive.svg" clickHandler={() => archiveNote(note.id)}>Archive note</TableBtn>
        <TableBtn img="trash.svg" clickHandler={() => removeNote(note.id)}>Remove note</TableBtn>
      </td>
    </tr>
  </>)
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
  removeNote: (id) => dispatch(noteActions.removeNote(id)),
  archiveNote: (id) => dispatch(noteActions.archiveNote(id)),
}) 

export { TableNote };
export default connect(mapStateToProps, mapDispatchToProps)(TableNote);