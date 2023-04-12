import { combineReducers } from "redux";

import notes from "./notes";
import categories from "./categories";

const combinedReducer = combineReducers({notes, categories});

export default combinedReducer;