import React, { Component } from 'react'
import Assignment from './Assignment'

class Assignments extends Component {


   
  
    render() {
      
        let {assignments, klass} = this.props
        const filtered = assignments.filter(a => a.klass_id === klass.id)
   
     
        return (
            <div>
              Assignemts
                <div className="ui relaxed divided list">
                    {    filtered.map(a =>  
                       
                        <Assignment key={a.id} assign={a} 
                            handleEdit={this.props.handleEdit}
                            handleDelete= {this.props.handleDelete}
                            />
                         
                    ) }
                
                </div>


                
            </div>
        )
    }
}

export default Assignments
