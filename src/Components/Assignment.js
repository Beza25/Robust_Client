import React, { Component } from 'react'

class Assignment extends Component {
  
    render() {
        return (
            <div className="assign" onClick={() => this.props.getAssign(this.props.assign)}>
                <div id="assign-content">
                {this.props.assign.title}  {this.props.assign.deadline}
                </div>
                <i id="assign-icon" className="edit blue icon"  onClick= {() => this.props.handleEdit(this.props.assign)}></i>
                <i id="assign-icon"  className="trash red alternate outline icon" onClick= {() => this.props.handleDelete(this.props.assign.id)}></i>
  
    </div>
        )
    }
}

export default Assignment


