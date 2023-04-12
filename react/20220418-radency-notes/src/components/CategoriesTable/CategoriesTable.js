import TableTitle from "../TableTitle/TableTitle";
import TableCategory from "../TableCategory/TableCategory";
import "./CategoriesTable.scss";

const CategoriesTable = ({titles, list}) => {
  return (<>
    <table className="table">
      <thead>
        <TableTitle titles={titles}></TableTitle>
      </thead>
      <tbody>
        {list.map(item => (
          <TableCategory key={item.id} category={item}/>
        ))}
      </tbody>
    </table>
  </>)
}

export default CategoriesTable;