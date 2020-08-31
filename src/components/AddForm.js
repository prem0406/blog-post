import React from "react";

const AddForm = ({ post, onSave, onChange, errors = {} }) => {
  return (
    <div className="container">
      <form onSubmit={onSave}>
        <h2>{post.id ? "Edit" : "Create"} Post</h2>

        <label htmlFor="title">
          <div className="label">Title</div>
        </label>
        {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
        <input type="text" id="title" value={post.title} onChange={onChange} />

        <label htmlFor="category">
          <div className="label">Category</div>
        </label>
        {errors.body && <div style={{ color: "red" }}>{errors.body}</div>}
        <input
          type="text"
          id="category"
          value={post.category}
          onChange={onChange}
        />

        <label htmlFor="body">
          <div className="label">Body</div>
        </label>
        {errors.body && <div style={{ color: "red" }}>{errors.body}</div>}
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
