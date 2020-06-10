import React, { Component } from 'react'
import AssignmentForm from "../Components/AssignmentForm"
import Assignments  from "../Components/Assignments"
import EditAssignment from '../Components/EditAssignment'

export default class MiddleContainer extends Component {
    
    
    render() {
        // console.log("Assign to be edited : ", this.props.editAssign)
        return (
            <div>
                {this.props.showForm=== false && this.props.editForm === false ?
                 <Assignments klass ={this.props.klass }
                            assignments ={this.props.assignments} 
                             handleEdit = {this.props.handleEdit}
                             handleDelete = {this.props.handleDelete}
                             
                    />   : this.props.editForm? <EditAssignment assign= {this.props.editAssign} 
                                                                editAssigns={this.props.editAssigns}  
                                                                displayAssigns = {this.props.displayAssigns}  /> :
                   
                    <AssignmentForm klass = {this.props.klass}
                                                     createAssign = {this.props.createAssign}
                                                     displayAssigns = {this.props.displayAssigns}/>
                }
                
            </div>
        )
    }
}
