import React, { Component } from 'react'
import EditAssign from "./EditAssign"

class Assignment extends Component {
  
    render() {
        return (
            // onClick={() => this.props.getAssign(this.props.assign)}
            <div className="assign"  onClick={() => this.props.getAssign(this.props.assign)}>
                <div id="assign-content">
                {this.props.assign.title}  {this.props.assign.deadline}
                </div>
                {this.props.currentUser.user === "teacher" ?
                <div>
                {/* <i id="assign-icon" className="edit blue icon"  onClick= {() => this.props.handleEdit(this.props.assign)}></i> */}
                <EditAssign  assign={this.props.assign}  editAssigns = {this.props.editAssigns}/>
                <i id="assign-icon"  className="trash red alternate outline icon" onClick= {() => this.props.handleDelete(this.props.assign.id)}></i>
                </div>
                :null }
  
    </div>
        )
    }
}

export default Assignment


