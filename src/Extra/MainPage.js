import React, { Component } from 'react'
import SideBar from "./SideBar"
import MiddleContainer from "../Containers/MiddleContainer"




 class MainPage extends Component {

    constructor(){
        super()
        this.state = {

            showForm: false,
            editForm: false,
            editAssign: null,
            showAssigns: false,
            showDetail: false,
            detailAssign: null,
            // assignsNotClicked: true,
            showGrade:false
            
        }
    }

     clickAssigns = ()=>{
        
        this.setState({ showAssigns: !this.state.showAssigns})
        if(this.state.showAssigns){
            this.setState({showForm:false, editForm:false, showDetail: false, assignsNotClicked: false})
        }
    }
 
    handleClick = () => {
        this.setState({showForm: !this.state.showForm})
    }

    handleEdit = (assign) =>{
        this.setState({editAssign: assign, editForm: true})
    }
    displayAssigns = () =>{
        this.setState({showForm:false, editForm:false, showGrade: false})

    }
    // handleBack = () => {
       
    //     this.setState({showAssigns: true})
    // }
    getAssign = (assign) =>{
            this.setState({ showDetail: true, detailAssign: assign })    
    }
    clickGrade =()=>{
        console.log("Attemt to see grade")
        this.setState({showGrade: true })


    }
 

    render() {
        // console.log("klass Main page : ", this.props.klass)
        return this.props.klass? 

            <div id="tab">

                <SideBar   clickAssigns = {this.clickAssigns}
                         clickGrade={this.clickGrade}
                         
                         />

                <MiddleContainer klass={this.props.klass}
                                          currentUser = {this.props.currentUser}

                                       // sidbar props   
                                        showAssigns = {this.state.showAssigns}
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
                                        // show assign props
                                          getAssign = {this.getAssign}
                                          showDetail = {this.state.showDetail}
                                          detailAssign = {this.state.detailAssign}
                                        // gade props
                                        showGrade = {this.state.showGrade}

                                    
                                         />

            </div>
              
              
       
        : null
    }
}




export default MainPage



