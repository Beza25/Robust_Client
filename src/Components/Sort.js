import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        // console.log( "sort's assigns: ", this.props.klass.students[0])
      
        return (
            <div>
                <div className="ui center aligned basic segment">
  <div className="ui left icon action input">
    <i className="search icon"></i>
    <input type="text" placeholder="student "/>
    <div className="ui blue submit button">Search</div>
  </div>
  <div className="ui horizontal divider">
    Or
  </div>
            <div className = "dropdown">
               <select className="ui search dropdown">
               {this.props.klass.students.map( student => 
               <option value ={student.first_name} key = {student.id}>{student.first_name}</option>)}
          
                </select>
            </div>

              
             <div>   
                <select  className="ui search dropdown">
                {this.props.assignments.map( assign =>
                     <option value ={assign.title} key = {assign.id}>{assign.title}</option>)}
                   
                </select>

                </div>
     
</div>




             
                
            </div>
        )
    }
}
