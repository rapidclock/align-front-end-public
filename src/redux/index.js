import { combineReducers } from "redux";

import filters from "redux/filterReducer";
import users from "redux/userReducer";

export default combineReducers({
	filters,
	users,
})

