import React, { Component } from 'react'
import Assignment from './Assignment'

class Assignments extends Component {

   klassAssigns (){
       return this.props.assigns.filter(a => a.klass_id === this.props.klass.id)

   }
   
  
    render() {
     
       console.log(this.props)

        return (
            <div>
              
                <div className="ui relaxed divided list">
                    {this.klassAssigns().map(a =>  
                        a.klass_id === this.props.klass.id ?  <Assignment key={a.id} assign={a} />: null
                    ) }
                
                </div>


                
            </div>
        )
    }
}

export default Assignments
