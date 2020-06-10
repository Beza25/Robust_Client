import React, { Component } from 'react'
import AssignmentForm from "../Components/AssignmentForm"
import Assignments  from "../Components/Assignments"

export default class MiddleContainer extends Component {
    
    
    render() {
        // console.log("Middle Container: ", this.props)
        return (
            <div>

                {this.props.showForm? <AssignmentForm klass = {this.props.klass}
                                                     createAssign = {this.props.createAssign}
                                                     displayAssigns = {this.props.displayAssigns}/> 
                : <Assignments klass ={this.props.klass }
                             assigns ={this.props.assigns} 
                             
                    />
                }
            
                
            </div>
        )
    }
}
