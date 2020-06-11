import React, { Component } from 'react'
import AssignmentForm from "../Components/AssignmentForm"
import Assignments  from "../Components/Assignments"
import EditAssignment from '../Components/EditAssignment'
import AssignDetail from '../Components/AssignDetail'

export default class MiddleContainer extends Component {
    
    
    render() {
        console.log("Middle Container props ", this.props.showDetail)
        return (
            <div id="right-side">
              
                

                <div id="list">
                <h1>  {this.props.klass.name} </h1>
                      {this.props.showAssigs === false ?
                    <img id="klass-img" className="ui medium aligned circular image" src={this.props.klass.img}/>
                : null
                }
                
                {this.props.showAssigs && this.props.showForm=== false && this.props.editForm === false ?
                                <Assignments klass ={this.props.klass }
                                assignments ={this.props.assignments} 
                                handleEdit = {this.props.handleEdit}
                                handleDelete = {this.props.handleDelete}
                                handleClick = {this.props.handleClick}
                                getAssign = {this.props.getAssign}
                                
                                
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
                        :null
                    }

    
                </div>
            </div>
      
        )
    }
}

