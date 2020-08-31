import { createStore } from "redux";
import rootReducer from "./reducers/postReducer";

export default function configureStore() {
  return createStore(rootReducer);
}
