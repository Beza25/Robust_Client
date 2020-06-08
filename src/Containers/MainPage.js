import React, { Component } from 'react'
import SideBar from "./SideBar"
import MiddleContainer from "./MiddleContainer"




export default class MainPage extends Component {


    render() {
        return (
            <div className="main-page">

                <div className="ui  grid" >
                    <div className="row">
                        <div  className="four wide black column">
                            
                             Side Bar
                            <SideBar/>
                        
                        </div>
                    
                        <div className="twelve wide olive column">
                            <h1>MiddleContainer</h1>
                                <MiddleContainer/>
                             

                                            
                        </div>
                    </div>
                   
                 </div>
              
            </div>
        )
    }
}

