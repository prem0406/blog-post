import React, { useState } from "react";
import AddForm from "./AddForm";
import { toast } from "react-toastify";
import { createPost, updatePost } from "../redux/actions/postActions";
import { connect } from "react-redux";

function ManagePost(props) {
  const [post, setPost] = useState({ ...props.post });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;

    setPost((prevPost) => ({ ...prevPost, [id]: value }));
  };

  function isFormValid() {
    const { title, body, category } = post;
    const errors = {};

    if (!title) errors.title = "Title is required*";
    if (!body) errors.body = "Body is required*";
    if (!category) errors.category = "Category is required*";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    if (!isFormValid()) return;
    post.id ? props.updatePost(post) : props.createPost(post);
    setPost({ title: "", body: "" });
    toast.success("Post Saved...");
    props.history.push("/");
  };
  return (
    <AddForm
      post={post}
      onChange={handleChange}
      onSave={handleSubmit}
      errors={errors}
    />
  );
}

const getPostById = (posts, id) => {
  return posts.find((post) => post.id === id);
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;

  const post =
    id && state.length > 0
      ? getPostById(state, id)
      : { id: null, title: "", body: "", category: "" };
  return { post };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePost);
