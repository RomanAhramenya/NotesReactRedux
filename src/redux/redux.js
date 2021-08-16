import { combineReducers, createStore } from "redux";
import { noteStorereducer } from "./noteStore-reducer";
let redusers = combineReducers(
    {Notes:noteStorereducer}
    )
let store = createStore(redusers);
export default store;