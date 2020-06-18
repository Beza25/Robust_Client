import React, { Component } from 'react'
import AssignmentForm from "./AssignmentForm"
import Assignments  from "../Components/Assignments"
import EditAssignment from './EditAssignment'
import AssignDetail from '../Components/AssignDetail'
import Grade from "../Components/Grade"

export default class MiddleContainer extends Component {
    
    
    render() {
        console.log("Show Assigns ", this.props.showAssigns)
        console.log("Show Grade ", this.props.showGrade)
        return (
            <div id="right-side">
              
                

                <div id="list">
                <h1>  {this.props.klass.name} </h1>
                      {!this.props.showAssigs && !this.props.showGrade?
                    <img id="klass-img" className="ui medium aligned circular image" src={this.props.klass.img} alt="none"/>
                : null
                }
                {/*   */}
                {  this.props.showAssigns && !this.props.showForm && !this.props.editForm && !this.props.showDetail && !this.props.showGrade ?
                                <Assignments klass ={this.props.klass }
                                assignments ={this.props.assignments} 
                                handleEdit = {this.props.handleEdit}
                                handleDelete = {this.props.handleDelete}
                                handleClick = {this.props.handleClick}
                                getAssign = {this.props.getAssign}
                                currentUser = {this.props.currentUser}
                                
                                
                        />   : this.props.editForm? <EditAssignment 
                                                            assign= {this.props.editAssign} 
                                                             editAssigns={this.props.editAssigns}  
                                                             displayAssigns = {this.props.displayAssigns}  /> :
                    
                        this.props.showForm ? < AssignmentForm klass = {this.props.klass}
                                                        createAssign = {this.props.createAssign}
                                                        displayAssigns = {this.props.displayAssigns}
                                                        // handleBack = { this.props.handleBack}
                                                        />
                        :this.props.showDetail ? <AssignDetail  detailAssign={this.props.detailAssign}/>
                        :this.props.showGrade ? <Grade />
                        :null
                    }

    
                </div>
            </div>
      
        )
    }
}

