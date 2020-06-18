import React, { Component } from 'react'

export default class StudentTable extends Component {
     constructor(){
         super()
         this.state= {
             grade: 0
         }
     }

    // colum= () => {
    //     this.props.klass.student_assingments.map( grade => 
    //         )

    // }

  gradeCalculater= (grade) => {
        if(grade < 70){
            return "D"
        }else if(grade>70 && grade<80 ){
            return "C"
        }else if (grade > 80 && grade <90){
            return "B"
        }else {
            return "A"
        }

    }

    handleClick = ( ) => {
        console.log ("Attempet to change grade " )
        let numgrade =  this.gradeCalculater(this.state.grade)
        this.setState({grade: numgrade})

    }


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
                             
                             <input className="ui inverted orange button" value = {this.state.grade} onClick = {this.handleClick} >{grade.grade}</input>
    
                          
                        
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
