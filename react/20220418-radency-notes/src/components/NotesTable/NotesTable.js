import TableTitle from "../TableTitle/TableTitle";
import TableNote from "../TableNote/TableNote";
import "./NotesTable.scss";

const NotesTable = ({titles, list}) => {
  return (<>
    <table className="table">
      <thead>
        <TableTitle titles={titles}></TableTitle>
      </thead>
      <tbody>
        {list.map(item => (
          <TableNote key={item.id} note={item}/>
        ))}
      </tbody>
    </table>
  </>)
}

export default NotesTable;