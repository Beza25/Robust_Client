import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div id="left-side">
                   
                <div  onClick={this.props.clickAssigns}>All Assignments</div>
                <div onClick={this.props.clickGrade}>My Grades</div>
                <div>Syllabus</div>
            </div>
        )
    }
}


