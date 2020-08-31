import * as actionType from "./actionType";

export const createPost = (post) => {
  return {
    type: actionType.CREATE_POST,
    post,
  };
};

export const deletePost = (id) => {
  return {
    type: actionType.DELETE_POST,
    id,
  };
};

export const updatePost = (post) => {
  return {
    type: actionType.UPDATE_POST,
    post,
  };
};
