import React, { Component } from 'react'
import Assignment from './Assignment'

class Assignments extends Component {

   klassAssigns (){
       return this.props.assigns.filter(a => a.klass_id === this.props.klass.id)

   }
   
  
    render() {
        return (
            <div>
              
                <div className="ui relaxed divided list">
                    {this.klassAssigns().map(a =>  
                        a.klass_id === this.props.klass.id ?  
                        <Assignment key={a.id} assign={a} 
                            handleEdit={this.props.handleEdit}
                            handleDelete= {this.props.handleDelete}
                            />: null
                    ) }
                
                </div>


                
            </div>
        )
    }
}

export default Assignments
