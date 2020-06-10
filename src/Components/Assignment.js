import React, { Component } from 'react'

class Assignment extends Component {
  
    render() {
        return (
            <div>
                  <div className="item">
                                {/* <i className="large github middle aligned icon"></i> */}
                                <div className="content">
                                <a className="header">{this.props.assign.title}  {this.props.assign.deadline}

                                <button className="ui blue button" onClick= {() => this.props.handleEdit(this.props.assign)}> EDIT</button>
                                <button className="ui red button" onClick= {() => this.props.handleDelete(this.props.assign.id)}> DELET</button>
                                
                                </a>
                                {/* <div className="description">Updated 10 mins ago</div> */}
                                </div>
                                <br/>
                 </div>
                
            </div>
        )
    }
}

export default Assignment