import React, { Component } from 'react';
// import logo from './logo.svg';
// , Redirect
import './App.css';
import  NavBar from './Containers/NavBar'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Containers/HomePage';
import LoginForm from './Containers/LoginForm';
import MainPage from './Containers/MainPage';
import About from './Containers/About';
import {connect} from 'react-redux';
import {fetchingKlasses} from './Redux/actions';
// import ClassCard from './Components/ClassCard'

class App extends Component {

  constructor(){
    super()
    this.state ={
      userAssignments: [],
      currentUser : {
        id: 2,
        first_name: "Carla", 
        last_name: null,
         username: "carla",
          password_digest: null,
           img: "https://ca.slack-edge.com/T02MD9XTF-UU5CVUP08-d274...",
           user: "teacher",
            created_at: "2020-06-09 03:01:25", updated_at: "2020-06-09 03:01:25"
      }
    }
  }

  componentDidMount(){ 
    this.props.fetchingKlasses()
    const currentUser = this.state.currentUser 
    

    if(currentUser.user === "teacher"){
      fetch(`http://localhost:3001/teachers/${currentUser.id}`)
    .then(resp => resp.json())
    .then(data => {
      // console.log("teacher data: ", data)
      this.setState({userAssignments: data.assignments})
    })
  
    }else{
      fetch(`http://localhost:3001/students/${currentUser.id}`)
      .then(resp => resp.json())
      .then(data => {
        // console.log("student data: ", data)
        this.setState({userAssignments: data.assignments})
        
      })
    }
}

createAssign =(newAssign) => {
  console.log("New Assing: ", newAssign)
 
  let  arr=  [...this.state.userAssignments, newAssign]
 
  this.setState({userAssignments: arr }) 
}

editAssigns = ( updatedAssign) => {
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
  fetch(`http://localhost:3001/assignments/${id}`,{ method: "DELETE" })
 const filtered =  this.state.userAssignments.filter(a => a.id !== id)
  this.setState({userAssignments: filtered})
  
}

render(){
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>

        <Route exact path = "/" component = {About}/>
        
          <Route exact path = "/login" render= {() => (<LoginForm/>)}/>
          
          <Route exact path = "/homepage" render= {() => (<HomePage/>)}/>
          {/* <Route path = "/mainpage" render= {() => (<MainPage />)}/> */}
          <Route exact path = "/classes/:id" render= {(props) => 
            {
              let id = props.match.params.id
              let klass = this.props.klasses.find(k => k.id == id)
             
              return <MainPage klass = {klass} 
                            createAssign= {this.createAssign}
                             assignments={this.state.userAssignments}
                             editAssigns = {this.editAssigns}
                             handleDelete ={this.handleDelete}
                             
                             />

            }
           }/>
        
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
    
       klasses: state.klasses
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
