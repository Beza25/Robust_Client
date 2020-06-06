import React from 'react';
import logo from './logo.svg';
import './App.css';
import  NavBar from './Containers/NavBar'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './Containers/HomePage';
import LoginForm from './Containers/LoginForm';
import MainPage from './Containers/MainPage';
import About from './Containers/About';



function App() {
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

export default App;
