import React, { Component } from 'react'
import SideBar from "./SideBar"
import MiddleContainer from "./MiddleContainer"




 class MainPage extends Component {

    constructor(){
        super()
        this.state = {
            showForm: false
        }
    }
 
    handleClick = () => {
        this.setState({showForm: !this.state.showForm})
    }

    displayAssigns = () =>{
        this.setState({showForm:false})
    }

  

    render() {
        // console.log("Main Page: ", this.props)
       
        return (
            <div className="main-page">

                <div className="ui  grid" >
                    <div className="row">
                        <div  className="four wide black column">
                            
                             Side Bar
                            <SideBar/>
                        
                        </div>
                    
                        <div className="twelve wide white column">
                        <h1>MiddleContainer</h1>

                        
                        <button className="ui green button" onClick= {this.handleClick}>Create Assignment</button>
                        <br/>
                        <div className= "assignments">
                        <MiddleContainer showForm= {this.state.showForm}
                                         klass={this.props.klass}
                                         createAssign={this.props.createAssign} 
                                        assigns={this.props.assignments}
                                        displayAssigns= {this.displayAssigns}
                                         />

                        </div>
                        
                              
                             

                                            
                        </div>
                    </div>
                   
                 </div>
              
            </div>
        )
    }
}




export default MainPage



