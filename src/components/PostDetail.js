import { connect } from "react-redux";
import { deletePost } from "../redux/actions/postActions";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { LikeContext } from "../contexts/LikeContext";

const PostDetail = (props) => {
  const { addLike, likes } = useContext(LikeContext);

  const handleDelete = () => {
    props.deletePost(props.post.id);
    toast.success("Post Deleted...");
    props.history.push("/");
  };

  const handleEdit = () => {
    props.history.push("/manage-post/" + props.post.id);
  };

  const handleLike = () => {
    addLike(props.post.id);
  };

  let totalLikes = likes[props.post.id];

  const post = props.post ? (
    <div className="post">
      <div className="right">
        <button className="btn blue darken-2" onClick={handleLike}>
          {totalLikes ? totalLikes : "0"} Likes
        </button>
        <button className="btn grey" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn red" onClick={handleDelete}>
          Delete
        </button>
      </div>

      <h4 className="center content">{props.post.title}</h4>
      <span className="text-grey lighten-3"> Posted By: Anonymous User</span>
      <hr />
      <p>{props.post.body}</p>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );

  return <div className="container">{post}</div>;
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
