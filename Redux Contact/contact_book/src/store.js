import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { contactReducer } from "./Reducer/ContactReducer";
import RootReducer from "./Reducer/RootReducer";

const store = createStore(RootReducer, composeWithDevTools());

export default store;
