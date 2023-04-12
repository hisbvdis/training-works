import Modal from "../../features/Modal/Modal";
import NotesTable from "../NotesTable/NotesTable";

const ArchivedNotes = ({id, titles, list}) => {
  return (<>
    <Modal id={id}>
      <NotesTable titles={titles} list={list}/>
    </Modal>
  </>)
}

export default ArchivedNotes;