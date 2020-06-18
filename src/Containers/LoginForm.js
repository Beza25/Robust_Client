import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import swal from 'sweetalert';



// I want to make post fetch request 
//  onchange of input I want 
//     need dispatchToProps
//     



 class LoginForm extends Component {
     constructor(){
         super()
         this.state= {
             username: "carla",
             password : ""
         }
     }

     handleChange = (e) => {
      
         this.setState({ [e.target.name]: e.target.value})
     }

     handleSubmit =( ) => {
         
         fetch("http://localhost:3001/login" , {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify( this.state)
         })
         .then(resp => resp.json())
         .then(currentUser => { 
            console.log(currentUser)
            if(currentUser.error_message){
                swal(currentUser.error_message)
            } else {
                localStorage.setItem("token", currentUser.token)
                this.props.updateCurrentUser(currentUser)
            }

        })
    }

    render() {
        // console.log("login prop: ", this.props)
        return (
            <div className= "login">
                <div className="login-wrap">
                <div className="login-html">
                    {/* checked */}
                    <input id="tab-1" type="radio" name="tab" className="sign-in"  /><label htmlFor="tab-1" className="tab">Sign In</label>
                    {/* <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label> */}
                    <div className="login-form">
                        <div className="sign-in-html">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input" 
                                value= {this.state.username} 
                                name = "username" 
                                onChange= {this.handleChange}/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password"
                                value = {this.state.password}
                                name = "password"
                                onChange ={this.handleChange}
                                />
                            </div>
                            {/* <div className="group">
                                <input id="check" type="checkbox" className="check" checked/>
                                <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                            </div> */}
                            <div className="group">
                               <Link to= "/classes"> <button type="submit" className="button" value="Sign In" onClick={this.handleSubmit} > Sign In </button></Link> 
                            </div>
                            {/* <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">forgot Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">Username</label>
                                <input id="user" type="text" className="input"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Repeat Password</label>
                                <input id="pass" type="password" className="input" data-type="password"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input"/>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up"/>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</a>
                            </div> */}
                        </div>
                    </div>
                </div>
</div>
               
                
            </div>
        )
    }
}

// const mapStateToProps = (state ) => {
//     // props : state
//     console.log(state)
//     return{
//         username: state.userName


//     }

// }

// // onChange of input => dispatch an action => reducer =>newState
// const mapDispatchToProps = (dispatch) => {
//     //  props: dispach = () => {}
//     return{
//         handleUsername: (e) => (dispatch ({type: "USERNAME", payload: e.target.value } ))

//     }

// }
// export default connect(mapStateToProps, mapDispatchToProps ) (LoginForm)
export default LoginForm