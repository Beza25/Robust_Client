import React, { Component } from 'react'
import Assignments from './Assignments'
import AssignDetail from './AssignDetail'


export default class ShowAssignments extends Component {
    render() {
        // console.log("show assing: ", this.props.klass.id)
        return (
            <div>
    
               
                {this.props.showDetail? 

            <AssignDetail  detailAssign={this.props.detailAssign}   handleBack = {this.props.handleBack}/>
            :  <Assignments  klass={this.props.klass}
                    currentUser = {this.props.currentUser}
                    // create props
                    createAssign={this.props.createAssign} 
                    assignments={this.props.assignments}
                    //  edit props  
                    editAssigns = {this.props.editAssigns}
                    // delete props
                    handleDelete = {this.props.handleDelete}
                    // show assign props
                    getAssign = {this.props.getAssign}
            />
                }
          
            </div>
        )
    }
}
