import React, { Component } from 'react'
import Assignment from './Assignment'
import CreateAssign from './CreateAssing'


class Assignments extends Component {
   
  
    render() {
    
        let {assignments,currentUser,klass, createAssign, 
            handleEdit, handleDelete, handleComplete,
             getAssign, editAssigns} = this.props
        // const filtered = assignments.filter(a => a.klass_id === klass.id)
   
        return (
            <div id= "all-assigns">  
                <h1 className= "assigns-header"> Assignments </h1>   
                {currentUser.user === "teacher"?
                <CreateAssign createAssign = {createAssign}
                    klass={klass}
                 />
                :null}
                <br/>
             
                    {    assignments.map(a =>  
                       
                        <Assignment key={a.id} assign={a} 
                        
                            handleDelete= {handleDelete}
                            getAssign ={ getAssign}
                            currentUser = {currentUser}
                            editAssigns = {editAssigns}
                            handleComplete ={handleComplete}
                            />
                         
                    ) }
        
            </div>
        )
    }
}

export default Assignments
