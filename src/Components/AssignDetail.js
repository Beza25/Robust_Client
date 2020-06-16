import React, { Component } from 'react'


 class AssignDetail extends Component {
    render() {
        // console.log("Detail Assign: ", this.props.detailAssign)
        return (
            <div >
                <h1 id= "detail"> AssignDetail </h1>
                <div id = "assign-form-container" class="ui card">
                    <div class="content">
                        <div class="header">{this.props.detailAssign.title}</div>
                        <div class="content">
                            <h4 class="ui sub header">{this.props.detailAssign.deadline}</h4>
                            <div class="ui small feed">
                                {this.props.detailAssign.content? this.props.detailAssign.content : "No Assignment"}
                            </div>
                            <button id="create-assign" className="ui green button" onClick= {this.props.handleBack}>Back</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AssignDetail
