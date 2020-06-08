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



class App extends Component {

  componentDidMount(){  
    this.props.fetchingKlasses()
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
          <Route exact path = "/mainpage" render= {() => (<MainPage/>)}/>
          <Route render= {() => <div > Page Not Found 404</div>}/>
          
        </Switch>    
      
      </BrowserRouter> 
     
   
      
    
    </div>
  );

}

  
}

const mapDispatchToProps = (dispatch) => {
  return{

      // props: () => {dispatch({type: "FETCHED_KLASSES"})}
      // don't forget to invoke it
      fetchingKlasses: () => { dispatch ( fetchingKlasses())}
  }

}
export default connect(null, mapDispatchToProps)(App);
