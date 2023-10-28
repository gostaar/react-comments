import React, { Component } from 'react';

class AdminMode extends Component {
    state = {}

    render () {
        let button = this.props.isAdmin ?
        <button className="button is-danger wordBreak" onClick={this.props.changeMode}>Désactiver le mode d'administration</button>
        : <button className="button is-primary wordBreak" onClick={this.props.changeMode}>Activer le mode d'administration</button>

        let classMessage = this.props.isAdmin ? "message is-danger" : "message is-primary";

        return (
        <article className={classMessage}>
            <div className="massage-body">
                {button}
            </div>
        </article>    
        )
    }
}

export default AdminMode;