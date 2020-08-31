import * as actionType from "../actions/actionType";
import { v4 as uuidv4 } from "uuid";

const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      category: "Education",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      category: "Education",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      category: "Education",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat",
    },
  ],
};

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
