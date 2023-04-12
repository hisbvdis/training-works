import { connect } from "react-redux";
import Modal from "../../features/Modal/Modal";
import { actions as noteActions } from "../../reducers/notes";
import "./CreateNote.css";

const CreateNote = ({id, notes, addNote, categories}) => {
  return (<>
    <Modal id={id}>
      <form className="form" data-js="form" aria-labelledby="modal-title">
        <h3 className="form__title" id="modal-title">Create Note</h3>
        <div className="form__field">
          <label htmlFor="note-name">Name</label>
          <input className="form__input" id="note-name" type="text" name="name" />
        </div>
        <div className="form__field">
          <label htmlFor="note-category">Category</label>
          <select className="form__input" id="note-category" name="category" data-js="categorySelect">
            {categories.list.map((item, i) => <option key={i} value={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className="form__field">
          <label htmlFor="note-content">Content</label>
          <textarea className="form__input" id="note-content" name="content"></textarea>
        </div>
        <div hidden aria-hidden="true">
          <input name="id" disabled />
          <input name="date" disabled />
          <input name="dates" disabled />
          <input name="isArchived" value="false" disabled />
        </div>
        <div className="form__buttons">
          <button type="submit" data-ctrl-enter-btn>Apply</button>
          <button type="button" data-close-btn>Cancel</button>
        </div>
      </form>
    </Modal>
  </>)
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  notes: state.notes,
  categories: state.categories,
})

const mapDispatchToProps = (dispatch) => ({
  addNote: (data) => dispatch(noteActions.addNote(data)),
})

export { CreateNote };
export default connect(mapStateToProps, mapDispatchToProps)(CreateNote);