import React, { Component } from 'react'
import Assignment from './Assignment'

class Assignments extends Component {
   

  

   
  
    render() {
      
        let {assignments, klass} = this.props
        const filtered = assignments.filter(a => a.klass_id === klass.id)
   
     
        return (
            <div>  
                <h1 className= "assigns-header"> Assignments </h1>

                
                
                <button id="create-assign" className="ui green button" onClick= {this.props.handleClick}>Create Assignment</button>
                <br/>
             
                    {    filtered.map(a =>  
                       
                        <Assignment key={a.id} assign={a} 
                            handleEdit={this.props.handleEdit}
                            handleDelete= {this.props.handleDelete}
                            getAssign ={ this.props.getAssign}
                            />
                         
                    ) }
                
                


                
            </div>
        )
    }
}

export default Assignments
