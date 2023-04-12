import { connect } from "react-redux";
import NotesTable from "./components/NotesTable/NotesTable";
import CategoriesTable from "./components/CategoriesTable/CategoriesTable";
import ArchivedNotes from "./components/ArchivedNotes/ArchivedNotes";
import CreateNote from "./components/CreateNote/CreateNote";
import ModalOpener from "./features/Modal/ModalOpener";
import useModal from "./features/Modal/useModal.hook";
import { actions as noteActions } from "./reducers/notes";
import "./styles/style.scss";


const App = ({notes, categories, addNote}) => {
  console.log( notes )
  const {openModal, closeModal} = useModal();

  const createNoteHandler = (evt) => {
    evt.preventDefault();
    const modal = document.querySelector("#" + evt.target.dataset.targetModalId)
    openModal(modal, {
      openActions: () => {
        const form = document.querySelector("[data-js='form']")
        form.addEventListener("submit", (evt) => {
          evt.preventDefault();
          const elems = evt.target.elements;
          const months = notes.months;

          const id = notes.nextIndex;
          const name = elems.name.value || "Empty note";
          const now = new Date();
          const date = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
          const categoryId = elems.category.value || "task";
          const content = elems.content.value;
          const matches = content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
          const dates = matches ? matches.join(",") : "";
          const isArchived = (elems.isArchived.value === "true") ? true : false;

          addNote({id, name, date, categoryId, content, dates, isArchived});
          form.reset();
          closeModal(modal);
        })
      },
    });
  }

  return (<>
  <section>
      <h3>Active notes</h3>
      <NotesTable titles={notes.titles} list={notes.list.filter(item => item.isArchived === false)} />
      <ModalOpener manual targetID="createNote" clickHandler={createNoteHandler}>Create note</ModalOpener>
      <ModalOpener targetID="archivedNotes">Archive</ModalOpener>
    </section>

    <section>
      <h3>Categories</h3>
      <CategoriesTable titles={categories.titles} list={categories.list} />
    </section>

    <ArchivedNotes id="archivedNotes" titles={notes.titles} list={notes.list.filter(item => item.isArchived === true)}/>
    <CreateNote id="createNote"/>
  </>)
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  notes: state.notes,
  categories: state.categories,
})

const mapDispatchToProps = (dispatch) => ({
  addNote: (data) => dispatch(noteActions.addNote(data)),
})

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);