import React, { Component } from 'react';
import './SideItems.css'

// import EditAssignment from '../Components/EditAssignment'
import GradeContainer from '../Components/GradeContainer'
import Syllabus from '../Components/Syllabus'
import ShowAssignments from '../Components/ShowAssingments'

export default class MainPage2 extends Component {
    constructor(props){
        super(props)
        this.state= {
            grades: this.props.klass.student_assignments,
            currentSection: "MyAssignments",
            showDetail: false,
            detailAssign: null
        
        }
    }
   
    getAssign = (assign) =>{
       
        this.setState({ showDetail: true, detailAssign: assign })    
    }
    setCurrentSection =(section) =>{
       
        this.setState({currentSection: section})
    }
    handleBack=() =>{
        console.log("Attempt to go back")
        this.setState({ showDetail:false})

    }

    render() {
        console.log("Main page klas: ", this.props.assignments)
        let {assignments, klass, currentUser, editAssigns, createAssign, handleDelete } = this.props
        const filtered = assignments.filter(a => a.klass_id === klass.id)
        return (
         
            <div id="tab">
               <div id="left-side">
                    <div onClick={()=> this.setCurrentSection('MyAssignments')}>All Assignments</div>
                    <div  onClick={()=> this.setCurrentSection('MyGrades')}>Grades</div>
                    <div  onClick={()=> this.setCurrentSection('Syllabus')}>Syllabus</div>
                </div>
                <div id="right-side">
                    <div id="list">
                        
                    {this.state.currentSection === "MyAssignments"?
                        <ShowAssignments klass={klass}
                        currentUser = {currentUser}
                        // show detail
                        getAssign = {this.getAssign}
                        showDetail = {this.state.showDetail}
                        detailAssign = {this.state.detailAssign}
                        // create props
                        createAssign={createAssign} 
                        assignments={filtered}
                        //  edit props
                        editAssigns = {editAssigns}
                        // delete props
                        handleDelete = {handleDelete}
                        //   back
                        handleBack = {this.handleBack} 
                        /> : this.state.currentSection === 'MyGrades'? 
                        <GradeContainer grades= {this.state.grades} klass={klass}  assignments={filtered} />
                        : this.state.currentSection === "Syllabus" ?
                        <Syllabus/>: null}
                
                    </div>
                </div>
            </div>

        )
  
        
    }
}
