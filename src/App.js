import AdminMode from "./component/AdminMode";
import React, { Component } from 'react';
import {v4 as uuidv4} from "uuid"; 
import CommentForm from "./component/CommentForm";
import CommentList from "./component/CommentList";
import Article from "./component/Article";

class App extends Component {
  state = {
    isAdmin: false,
    comments: []
  }

  addComment = (name, message) => {
    let newComment = {
      id: uuidv4(),
      name: name,
      message: message
    }
    this.setState({
      comments: [...this.state.comments,newComment]
    })
  }

  deleteComment = (id) => {
    let comments = this.state.comments.filter(comment => comment.id !== id);
    this.setState({
      comments: comments
    })
  }

  changeMode = () => {
    this.setState({
      isAdmin : !this.state.isAdmin
    })
  }

  render () {
    return (
      <div className="App container has-text-centered is-fullwidth">
        <Article/>
        <div className="columns">
          <CommentForm addComment={this.addComment}/>
          <CommentList comments={this.state.comments} deleteComment={this.deleteComment} isAdmin={this.state.isAdmin}/>
        </div>
        <AdminMode isAdmin={this.state.isAdmin} changeMode={this.changeMode}/>
      </div>  
    );
  }

}

export default App;