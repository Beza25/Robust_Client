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
                    <Link to= "/login" className="item"> Login </Link>
                    <Link to= "/homepage" className="item"> Home Page </Link>
                </div>



               
                                    
            </div>
        )
    }
}


// {/* <div className="ui purple inverted menu">
// <div className="header item">
//     Robust
// </div>
// <Link to= "/" className="item"> About Us </Link>

// <Link to= "/login" className="item"> Login </Link>
// <Link to= "/homepage" className="item"> Home Page </Link>
// {/* <Link to= "/mainpage" className="item"> MainPage</Link> */}

// </div> */}