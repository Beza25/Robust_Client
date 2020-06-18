import React, { Component } from 'react'
import Sort from "./Sort"
import Search from "./Search"
import AssignTable from "./AssignTable"
import StudentTable from './StudentTable'


 class GradeContainer extends Component {
    render() {
        // console.log( "Grade Containor's props: ", this.props.assignments)
        let filtered = this.props.assignments.filter(assign => assign.klass_id === this.props.klass.id)
        // console.log("filterd: ", filtered)
        return (
            <div>
                Grade
                {/* <Sort  klass={this.props.klass}  assignments= {filtered} />
                <Search /> */}

            <br/>
                <button className="fluid ui blue basic button">Student Table or Assign Table</button>
                <br/>

                {/* <AssignTable/> */}
                <br/>
                 {/* <StudentTable  assignments = {filtered} 
                                grades = {this.props.grades}
                                klass = {this.props.klass}
                                />
                */}

              
                                    
            </div>
        )
    }
}
export default GradeContainer
