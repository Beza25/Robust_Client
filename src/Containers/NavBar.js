import React, { Component } from 'react'

import {Link} from "react-router-dom"


export default class NavBar extends Component {
    render() {
        return (
            <div className= "navbar">
                <div className="ui pointing blue menu">
                    <a className="active item">
                        Robust
                    </a>
                    <Link to= "/" className="item"> About Us </Link> 
                    {this.props.currentUser === null? 
                        <Link to= "/login" className="item"> Log In </Link> 
                         :  null
                    }
                    {this.props.currentUser ?  <Link  onClick={this.props.handleLogout} className="item" to="/logout" >Log Out</Link> : null }
                    <Link to= "/classes" className="item"> Home Page </Link>     
                </div>                    
            </div>
        )
    }
}

