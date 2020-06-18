import React, { Component } from 'react';
import './SideItems.css'

export default class SideBar extends Component {
    render() {
        return (

<section id="body-c">   

    <div className="middle">
	
        <div class="page">
            
            <ul class="main">
                <li id="this-li" onClick={this.props.clickAssigns}><a id="this-a" href="."><span id="this-span">All Assignments</span></a></li>
                <li id="this-li" onClick={this.props.clickGrade}><a id="this-a" href="."><span id="this-span">My Grades</span></a></li>
                <li id="this-li" ><a id="this-a" href="."><span id="this-span">Syllabus</span></a></li>
                
            </ul>

    

        </div>
    
    </div>


</section> 

        )
    }
}


// ===================================
            // <div id="left-side">
            //     <ul className= "main">
            //         <li onClick={this.props.clickAssigns}> All Assignments </li>
            //         <li  onClick={this.props.clickGrade}> My Grades </li>
            //         <li> Syllabus</li>
            //     </ul>
                   
                {/* <div  onClick={this.props.clickAssigns}>All Assignments</div>
                <div onClick={this.props.clickGrade}>My Grades</div>
                <div>Syllabus</div> */}
            // </div>
// ======================================================



{/* <section id="body-c">
<div id="middle">

  <div class="page">
  <div id="main">
                    <ul class="main">
                        <li id="this-li" onClick={()=> this.setCurrentSection('MyAssignments')}><a id="this-a"href="#"><span id="this-span">All Assignments</span></a></li>
                        <li id="this-li" onClick={()=> this.setCurrentSection('MyGrades')}><a id="this-a" href="#"><span id="this-span">My Grades</span></a></li>
                        <li id="this-li" onClick={()=> this.setCurrentSection('Syllabus')}><a  id="this-a" href="#"><span id="this-span">Syllabus</span></a></li>
                        
                    </ul>
                        </div>
    </section> */}