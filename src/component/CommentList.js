import React, { Component } from 'react';

class CommentList extends Component {
    render() {
        let classButton = "";
        this.props.isAdmin ? classButton = "delete" : classButton = "is-invisible";

        let commentsList = this.props.comments.map(comment => {
            return <li key={comment.id}>
                <strong>{comment.name}</strong><br />
                {comment.message} 
                <div onClick={()=>this.props.deleteComment(comment.id)} className={classButton}></div>
            </li>
        })

        return (
            <div className="column">
                <h1 className="title">Liste des commentaires {this.props.comments.lengh}</h1>
                <ul className="comment-list">
                    {commentsList}
                </ul>
            </div>    
        )
    }

}

export default CommentList;