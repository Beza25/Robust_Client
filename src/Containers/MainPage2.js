import React, { Component } from 'react'

// import EditAssignment from '../Components/EditAssignment'
import Grade from '../Components/Grade'
import Syllabus from '../Components/Syllabus'
import ShowAssignments from '../Components/ShowAssingments'

export default class MainPage2 extends Component {
    constructor(){
        super()
        this.state= {
            currentSection: "MyAssignments",
            showDetail: false,
            detailAssign: null
        
        }
    }
   
    getAssign = (assign) =>{
       
        this.setState({ showDetail: true, detailAssign: assign })    
    }
    setCurrentSection =(section) =>{
       
        this.setState({currentSection: section, showDetail:false})
    }
    handleBack=() =>{
        console.log("Attempt to go back")
        this.setState({ showDetail:false})

    }

    render() {
        console.log("Main page klas: ", this.props.klass)
        return (
            <div id="tab">

            <div id="left-side">
                <div onClick={()=> this.setCurrentSection('MyAssignments')}>All Assignments</div>
                <div onClick={()=> this.setCurrentSection('MyGrades')}>Grades</div>
                <div onClick={()=> this.setCurrentSection('Syllabus')}>Syllabus</div>
            </div>

            <div id="right-side">
                <div id="list">
                    {this.state.currentSection === "MyAssignments"?
                    <ShowAssignments klass={this.props.klass}
                    currentUser = {this.props.currentUser}
                    // show detail
                    getAssign = {this.getAssign}
                    showDetail = {this.state.showDetail}
                    detailAssign = {this.state.detailAssign}
                  // create props
                   createAssign={this.props.createAssign} 
                   assignments={this.props.assignments}
                  //  edit props
                  editAssigns = {this.props.editAssigns}
                  // delete props
                  handleDelete = {this.props.handleDelete}
                //   back
                handleBack = {this.handleBack}
                  
                  
                 

                    
                    /> : this.state.currentSection === 'MyGrades'? 
                    <Grade  clickGrade={this.clickGrade}/>: this.state.currentSection === "Syllabus" ?
                    <Syllabus/>:
                    null
                    // <img id="klass-img" className="ui medium aligned circular image" src={this.props.klass.img}/>



                    }
                </div>
            </div>
                
            </div>
        )
    }
}
