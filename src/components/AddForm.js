import React from "react";

const AddForm = ({ post, onSave, onChange, errors = {} }) => {
  return (
    <div className="container">
      <form onSubmit={onSave}>
        <h2>{post.id ? "Edit" : "Add"} Course</h2>

        {errors.title && (
          <div className="alert alert-danger">{errors.title}</div>
        )}
        <label htmlFor="title">
          <div className="label">Title</div>
        </label>
        <input type="text" id="title" value={post.title} onChange={onChange} />

        <label htmlFor="category">
          <div className="label">Category</div>
        </label>
        <input
          type="text"
          id="category"
          value={post.category}
          onChange={onChange}
        />

        {errors.body && <div className="alert alert-danger">{errors.body}</div>}
        <label htmlFor="body">
          <div className="label">Body</div>
        </label>
        <textarea type="text" id="body" value={post.body} onChange={onChange} />
        <button className="btn waves-effect waves-light" type="submit">
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default AddForm;
