import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostDetail from "./components/PostDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManagePost from "./components/ManagePost";
import LikeContexProvider from "./contexts/LikeContext";

/*
Contex Api is used to keep count of Likes
react-toastify is used to display success messages for 3000ms

Home: component will show List of all post

PostDetail: Display all the details about a post when a partical post is clicked from home component

ManagePost: This is container (smart) component for Creating and Editing the Post.

AddForm: contains the form to create and edit posts

Navbar: Navigation Bar
*/

function App() {
  return (
    <div className="App">
      <Navbar />
      <LikeContexProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:post_id" component={PostDetail} />
          <Route path="/manage-post/:post_id" component={ManagePost} />
          <Route path="/manage-post" component={ManagePost} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </LikeContexProvider>
    </div>
  );
}

export default App;
