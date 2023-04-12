import { initialState } from "./notes.initialState";

const actionTypes = {
  ADD_NOTE: "ADD_NOTE",
  REMOVE_NOTE: "REMOVE_NOTE",
  CHANGE_NOTE: "CHANGE_NOTE",
  ARCHIVE_NOTE: "ARCHIVE_NOTE",
}

const actions = {
  addNote: (data) => ({
    type: actionTypes.ADD_NOTE,
    data
  }),
  removeNote: (id) => ({
    type: actionTypes.REMOVE_NOTE,
    id
  }),
  archiveNote: (id)  => ({
    type: actionTypes.ARCHIVE_NOTE,
    id
  }) 
}

const notes = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE: {
      return {
        ...state,
        list: state.list.concat(action.data),
        nextIndex: state.nextIndex + 1,
      }
    }
    case actionTypes.REMOVE_NOTE: {
      return {
        ...state,
        list: state.list.filter(note => note.id !== action.id)
      }
    }
    case actionTypes.ARCHIVE_NOTE: {
      return {
        ...state,
        list: state.list.map(note => (note.id === action.id) ? {...note, isArchived: true } : note)
      }
    }
    default: {
      return state;
    }
  }
}

export { actions };
export default notes;