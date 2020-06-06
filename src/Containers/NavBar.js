import React, { Component } from 'react'

import {Link} from "react-router-dom"

export default class NavBar extends Component {
    render() {
        return (
            <div className= "navbar">
                <div className="ui brown inverted menu">
                    <div className="header item">
                        Robust
                    </div>
                    <Link to= "/" className="item"> About Us </Link>

                    <Link to= "/login" className="item"> Login </Link>
                    <Link to= "/homepage" className="item"> Home Page </Link>
                    <Link to= "/mainpage" className="item"> MainPage</Link>
                   
                    {/* <a className="item">
                        Jobs
                    </a>
                    <a className="item">
                        Locations
                    </a>
                    <a className="item">
                        Locations
                    </a> */}
                </div>
                                    
            </div>
        )
    }
}
