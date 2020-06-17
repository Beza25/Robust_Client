import React, { Component } from 'react'

export default class StudentTable extends Component {

    // colum= () => {
    //     this.props.klass.student_assingments.map( grade => 
    //         )

    // }

    render() {
        console.log("ST:", this.props.klass)
       
       
      
        return (
            <div>
                StudentTable 
                <div className= "student-table-container">

                
                    <div className= "student-table-column">
                        <button  id = "talble-button"  className="ui inverted primary button">Assignments</button>
                        {this.props.klass.assignments.map( assign =>
                          <button className="ui inverted primary button">{assign.title}</button>
                        )}
                      </div>
                      
                      <div  className= "student-table-column">
                      <button id = "talble-button" className="ui inverted orange button">Grade</button>
                          {this.props.klass.student_assignments.map( grade => 
                              
                              <button className="ui inverted orange button">{grade.grade}</button>

                          
                        
                          )}
                      </div>
                    <div  className= "student-table-column" >
                      <button className="ui inverted red button">Red</button>

                    </div>
                    
                    </div>
                    <div>
                  
                </div>
            </div>
        )
    }
}
