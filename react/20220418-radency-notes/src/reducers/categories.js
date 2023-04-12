import { initialState } from "./categories.initialState";

const actionTypes = {
  ADD_CATEGORY: "ADD_CATEGORY",
  REMOVE_CATEGORY: "REMOVE_CATEGORY",
  CHANGE_CATEGORY: "CHANGE_CATEGORY",
}

const actions = {
  removeCategory: (id) => ({
    type: actionTypes.REMOVE_CATEGORY,
    id
  })
}

const categories = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_CATEGORY: {
      return state.list.filter(category => category.id !== action.id);
    }
    default: {
      return state;
    }
  }
}

export { actions };
export default categories;