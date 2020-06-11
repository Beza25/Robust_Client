import React, { Component } from 'react'
import SideBar from "./SideBar"
import MiddleContainer from "./MiddleContainer"




 class MainPage extends Component {

    constructor(){
        super()
        this.state = {
            showForm: false,
            editForm: false,
            editAssign: null,
            isAssignements: false,
            showDetail: false,
            detailAssign: null
            
        }
    }
 
    handleClick = () => {
        this.setState({showForm: !this.state.showForm})
    }

    handleEdit = (assign) =>{
        this.setState({editAssign: assign, editForm: true})
    }

    displayAssigns = () =>{
        this.setState({showForm:false, editForm:false})
    }

    clickAssigns = ()=>{
        
        this.setState({ isAssignements: true})
    }
    // handleBack = () => {
       
    //     this.setState({isAssignements: true})
    // }
    getAssign = (assign) =>{
        console.log("Attemt to show Detail ", assign)
            this.setState({ showDetail: true })
            
      
    }
   

    render() {
        // console.log("klass Main page : ", this.state)
        return (
            <div id="tab">

                <SideBar   clickAssigns = {this.clickAssigns}/>

                <MiddleContainer klass={this.props.klass}
                                          currentUser = {this.props.currentUser}

                                       // sidbar props   
                                        showAssigs = {this.state.isAssignements}
                                        displayAssigns= {this.displayAssigns}
                                        // create props
                                        handleClick ={this.handleClick}
                                        showForm= {this.state.showForm}
                                         createAssign={this.props.createAssign} 
                                         assignments={this.props.assignments}
                                        //  edit props
                                        handleEdit= {this.handleEdit}
                                        editForm ={this.state.editForm}
                                        editAssign = {this.state.editAssign}
                                        editAssigns = {this.props.editAssigns}
                                        // delete props
                                        handleDelete = {this.props.handleDelete}
                                        // show props
                                          getAssign = {this.getAssign}
                                          showDetail = {this.showDetail}
                                          detailAssign = {this.state.detailAssign}

                                    
                                         />

            </div>
              
              
       
        )
    }
}




export default MainPage



