import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="ui inverted segment">
                    <div className="ui inverted relaxed divided list">
                        <div className="item">
                        <div className="content">
                            <div className="header">Assignments</div>
                            
                        </div>
                        </div>
                        <div className="item">
                        <div className="content">
                            <div className="header">Grades</div>
                       
                        </div>
                        </div>
                        <div className="item">
                        <div className="content">
                            <div className="header">Syllabus</div>
                          
                        </div>
                        </div>
                    </div>
                    <div className="item"> </div>
                </div>
                
            </div>
        )
    }
}
