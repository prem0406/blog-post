import { connect } from "react-redux";
import { deletePost } from "../redux/actions/postActions";
import React, { Component } from "react";
import { toast } from "react-toastify";

class PostDetail extends Component {
  state = {
    liked: false,
    colorShade: "btn blue lighten-2",
  };

  handleDelete = () => {
    this.props.deletePost(this.props.post.id);
    toast.success("Post Deleted...");
    this.props.history.push("/");
  };

  handleEdit = () => {
    this.props.history.push("/manage-post/" + this.props.post.id);
  };

  handleLike = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const post = this.props.post ? (
      <div className="post">
        <div className="right">
          <button
            className={
              this.state.liked ? "btn blue darken-2" : "btn blue lighten-3"
            }
            onClick={this.handleLike}
          >
            {this.state.liked ? "Liked" : "Like"}
          </button>
          <button className="btn grey" onClick={this.handleEdit}>
            Edit
          </button>
          <button className="btn red" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
        <h4 className="center title">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

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
