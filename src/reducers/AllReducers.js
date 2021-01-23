import PeopleReducer from "./PeopleReducer";
import CounterReducer from "./CounterReducer";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
  PeopleReducer,
  CounterReducer,
});

export default AllReducers;
