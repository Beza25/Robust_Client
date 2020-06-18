import React, { Component } from 'react'
import Assignments from './Assignments'
import AssignDetail from './AssignDetail'


export default class ShowAssignments extends Component {
    render() {
        // console.log("show assing: ", this.props.klass.id)

        let {assignments,currentUser,klass, createAssign, 
             handleDelete,
             getAssign, editAssigns, showDetail, handleBack, detailAssign} = this.props
        return (
            <div>
                {showDetail? 

            <AssignDetail  detailAssign={detailAssign}   handleBack = {handleBack}/>
            :  <Assignments  klass={klass}
                    currentUser = {currentUser}
                    // create props
                    createAssign={createAssign} 
                    assignments={assignments}
                    //  edit props  
                    editAssigns = {editAssigns}
                    // delete props
                    handleDelete = {handleDelete}
                    // show assign props
                    getAssign = {getAssign}
                   
                    
            />
                }
          
            </div>
        )
    }
}
