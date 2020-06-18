import React, { Component } from 'react'


 class AssignDetail extends Component {
    render() {
        // console.log("Detail Assign: ", this.props.detailAssign)

        let {detailAssign,handleComplete, handleBack } = this.props
        return (
            <div >
                <h1 id= "detail"> AssignDetail </h1>
                <div id = "assign-form-container" class="ui card">
                    <div class="content">
                        <div class="header">{detailAssign.title}</div>
                        <div class="content">
                            <h4 class="ui sub header">{detailAssign.deadline}</h4>
                            <div class="ui small feed">
                                {detailAssign.content? detailAssign.content : "No Assignment"}
                            </div>
                            <button id="create-assign" className="ui green button" onClick= {handleComplete}>Completed Assign</button>
                            <button id="create-assign" className="ui green button" onClick= {handleBack}>Back</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AssignDetail
