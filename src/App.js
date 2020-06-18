import React, { Component } from 'react';
// import swal from '@sweetalert/with-react';
import swal from 'sweetalert';
import './App.css';
import  NavBar from './Containers/NavBar'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './Containers/HomePage';
import LoginForm from './Containers/LoginForm';
import About from './Containers/About';
import {connect} from 'react-redux';
import {fetchingKlasses} from './Redux/actions';
import MainPage2 from "./Containers/MainPage2"
// import ClassCard from './Components/ClassCard'

class App extends Component {

  constructor(){
    super()
    this.state ={
      userAssignments: [],
      userKlasses: [],
      grades: [],
      currentUser:  null 

      //  currentUser : {id: 2, user: "teacher", first_name: "Carla", last_name: null, username: "carla",img: "https://ca.slack-edge.com/T02MD9XTF-UU5CVUP08-d274..."}
      
    //   // currentUser: {id: 4, user: "student", first_name: "Alex", last_name: null, username: "alex", level: 4, img: "https://ca.slack-edge.com/T02MD9XTF-UU5CW4UJU-58c5..."}
    }
  }


  componentDidMount(){
       // check if there is a current user in localStorage
       if(localStorage.getItem("token")){
        console.log("token found")
        fetch("http://localhost:3001/decode_token", {
          headers: {"Authenticate": localStorage.token}
        })
        .then(resp => resp.json())
        .then(data => {
          console.log("data: ", data)
          
          this.updateCurrentUser(data)
        })
      } else{
        console.log("no token found")
      }
  }


  updateCurrentUser =(currentUser) =>{

    if(currentUser != null )  {
      this.setState({currentUser: currentUser.user_data,
                    userKlasses: currentUser.klasses,
                    userAssignments: currentUser.assignments       
    })
    } else {
      this.setState({currentUser: null})
    } 
  }

  

createAssign =(newAssign) => {
  // console.log("New Assing: ", newAssign)
  
  swal({
    title: "Created Successfully!",
   
    icon: "success",
    button: "Continue!",
  });
 
  let  arr=  [newAssign, ...this.state.userAssignments]
 
  this.setState({userAssignments: arr }) 
}

editAssigns = ( updatedAssign) => {
  swal({
    title: "Edited Successfully!",
    text: "You clicked the button!",
    icon: "success",
    button: "Continue!",
  });

  let assignments = this.state.userAssignments 
 assignments.forEach(a => { if (a.id === updatedAssign.id){
                                a.title = updatedAssign.title
                                a.klass_id = updatedAssign.klass_id
                                a.content = updatedAssign.content
                                a.deadline = updatedAssign.deadline
                                a.updated_at = updatedAssign.updated_at
                          }
                          })
    this.setState({userAssignments: assignments })
}

handleDelete= (id) => {
  swal({
    title: "Deleted Successfully!",
    text: "You clicked the button!",
    icon: "success",
    button: "Continue!",
  });
  fetch(`http://localhost:3001/assignments/${id}`,{ method: "DELETE" })
 const filtered =  this.state.userAssignments.filter(a => a.id !== id)
  this.setState({userAssignments: filtered})
  
}
 //----- Logout ------//
 handleLogout = () => {
  // console.log("")
  localStorage.removeItem("token")
  this.updateCurrentUser(null)
}

render(){
  console.log("userKlasses: ", this.state.userKlasses)

  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar currentUser = {this.state.currentUser} handleLogout={this.handleLogout}/>
        <Switch>

        <Route exact path = "/" component = {About}/>
{/*         
          <Route exact path = "/login" render= {() => (<LoginForm updateCurrentUser= {this.updateCurrentUser}/>)}/> */}
           <Route exact path="/logout" component = {About}/>
          <Route exact path="/login" render={() => (
              this.state.currentUser === null ? <LoginForm updateCurrentUser={this.updateCurrentUser} /> 
              : <Redirect to="/classes"/>
            )}/>


          {this.state.currentUser? <Route exact path = "/classes" render= {() => 
                                  (<HomePage   klasses={this.state.userKlasses}  />)} /> :<Redirect to="/login"/> }
        
    
          {this.state.currentUser  ?
          <Route exact path = "/classes/:id" render= {(props) => 
            {
              let id = props.match.params.id
              // let klass = this.props.klasses.find(k => k.id == i)      
              let klasses = this.state.userKlasses
          
               let klass
               {klasses.length > 0 ? 
               klass = klasses.find(k => k.id == id)
                : klass = null
               }
                             return klass? <MainPage2 klass = {klass} 
                             createAssign= {this.createAssign}
                              assignments={this.state.userAssignments}
                              editAssigns = {this.editAssigns}
                              handleDelete ={this.handleDelete}
                              currentUser = {this.state.currentUser}  
                              
                              />: 
                              <div className="ui blue active inverted dimmer">
                                <div className="ui text loader">Loading</div>
                              </div>
  
              }
         
           }/>
       :<Redirect to="/"/> }

        
          <Route render= {() => <div > Page Not Found 404</div>}/>
          
        </Switch>    
      
      </BrowserRouter> 
     
   
      
    
    </div>
  );

}

  
}

const mapStateToProps = (state) => {
  // console.log("App's state: ", state.klasses)
  return{
    
       klasses: state.klasses,
       currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

      // props: () => {dispatch({type: "FETCHED_KLASSES"})}
      // don't forget to invoke it
      fetchingKlasses: () => { dispatch ( fetchingKlasses())}
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);

  




// if(currentUser.user === "teacher"){
    //   fetch(`http://localhost:3001/teachers/${currentUser.id}`)
    // .then(resp => resp.json())
    // .then(data => {
    //   // console.log("teacher data: ", data)
      
    //   this.setState({userAssignments: data.assignments})
    // })
  
    // }else{
    //   fetch(`http://localhost:3001/students/${currentUser.id}`)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     // console.log("student data: ", data)
    //     this.setState({userAssignments: data.assignments})
        
      // })
  //  } 


     // debugger
             //let klass = {id: 1, name: "Mirtle", level:2, teacher_id: 1}
              // return <MainPage klass = {klass} 
              //               createAssign= {this.createAssign}
              //                assignments={this.state.userAssignments}
              //                editAssigns = {this.editAssigns}
              //                handleDelete ={this.handleDelete}
              //                currentUser = {this.state.currentUser} 
                             
              //                />