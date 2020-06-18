import React, { Component } from 'react'
import EditAssign from "./EditAssign"

class Assignment extends Component {
  
    render() {
        let {assign, handleDelete, getAssign, currentUser, editAssigns} = this.props
        return (
            <div className="assign" >
                <div id="assign-content"  onClick={() => getAssign(assign)}>
                {assign.title}  {assign.deadline}
                </div>
                {currentUser.user === "teacher" ?
                <div>
                    
                <EditAssign  assign={assign}  editAssigns = {editAssigns}/>
                <i id="assign-icon"  className="trash red alternate outline icon" onClick= {() => handleDelete(assign.id)}></i>
                </div>
                :null }
  
    </div>
        )
    }
}

export default Assignment


