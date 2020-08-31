import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import PropTypes from "prop-types";

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={"/post/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body.substring(1, 150)}</p>
              <Link to={"/post/" + post.id}>Read more...</Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  posts: PropTypes.array.isRequired,
};

const matchStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(matchStateToProps)(Home);
