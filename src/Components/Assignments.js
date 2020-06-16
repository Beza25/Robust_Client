import React, { Component } from 'react'
import Assignment from './Assignment'
import CreateAssign from './CreateAssing'


class Assignments extends Component {
   

  

   
  
    render() {
        // console.log("Asssignments: ", this.props.klass)
        // debugger 
      
        let {assignments, klass} = this.props
        const filtered = assignments.filter(a => a.klass_id === klass.id)
   
     
        return (
            <div id= "all-assigns">  
                <h1 className= "assigns-header"> Assignments </h1>

                
                {this.props.currentUser.user === "teacher"?
                // <button id="create-assign" className="ui green button" onClick= {this.props.handleClick}>Create Assignment</button>
                <CreateAssign createAssign = {this.props.createAssign}
                    klass={this.props.klass}
                 />
                :null}
                <br/>
             
                    {    filtered.map(a =>  
                       
                        <Assignment key={a.id} assign={a} 
                            handleEdit={this.props.handleEdit}
                            handleDelete= {this.props.handleDelete}
                            getAssign ={ this.props.getAssign}
                            currentUser = {this.props.currentUser}
                            editAssigns = {this.props.editAssigns}
                            />
                         
                    ) }
                
                


                
            </div>
        )
    }
}

export default Assignments
