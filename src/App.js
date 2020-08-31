import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostDetail from "./components/PostDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManagePost from "./components/ManagePost";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:post_id" component={PostDetail} />
        <Route path="/manage-post/:post_id" component={ManagePost} />
        <Route path="/manage-post" component={ManagePost} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
