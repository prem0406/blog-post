import * as actionType from "../actions/actionType";
import { v4 as uuidv4 } from "uuid";
import { initState } from "../../data/initialState";

const postReducer = (state = initState.posts, action) => {
  switch (action.type) {
    case actionType.DELETE_POST:
      return state.filter((post) => {
        return post.id !== action.id;
      });

    case actionType.CREATE_POST:
      let post = { ...action.post, id: uuidv4() };
      return [...state, post];

    case actionType.UPDATE_POST:
      return state.map((post) =>
        post.id === action.post.id ? action.post : post
      );

    default:
      return state;
  }
};

export default postReducer;
