import React, { Component } from 'react'
import {connect} from 'react-redux'



// I want to make post fetch request 
//  onchange of input I want 
//     need dispatchToProps
//     



 class LoginForm extends Component {

 

    render() {
        // console.log("login prop: ", this.props)
        return (
            <div className= "login">
                <div className="login-wrap">
                <div className="login-html">
                    {/* checked */}
                    <input id="tab-1" type="radio" name="tab" className="sign-in"  /><label for="tab-1" className="tab">Sign In</label>
                    {/* <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label> */}
                    <div className="login-form">
                        <div className="sign-in-html">
                            <div className="group">
                                <label for="user" className="label">Username</label>
                                <input id="user" type="text" className="input" value= {this.props.username}  onChange= {(e) => {this.props.handleUsername(e)}}/>
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password"/>
                            </div>
                            {/* <div className="group">
                                <input id="check" type="checkbox" className="check" checked/>
                                <label for="check"><span className="icon"></span> Keep me Signed in</label>
                            </div> */}
                            <div className="group">
                                <input type="submit" className="button" value="Sign In" onSubmit={(e) => {this.props.SignIn(e)} }/>
                            </div>
                            {/* <div className="hr"></div>
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div> */}
                        </div>
                        {/* <div className="sign-up-htm">
                            <div className="group">
                                <label for="user" className="label">Username</label>
                                <input id="user" type="text" className="input"/>
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Password</label>
                                <input id="pass" type="password" className="input" data-type="password"/>
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Repeat Password</label>
                                <input id="pass" type="password" className="input" data-type="password"/>
                            </div>
                            <div className="group">
                                <label for="pass" className="label">Email Address</label>
                                <input id="pass" type="text" className="input"/>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="Sign Up"/>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label for="tab-1">Already Member?</a>
                            </div>
                        </div> */}
                    </div>
                </div>
</div>
               
                
            </div>
        )
    }
}

const mapStateToProps = (state ) => {
    // props : state
    console.log(state)
    return{
        username: state.userName


    }

}

// onChange of input => dispatch an action => reducer =>newState
const mapDispatchToProps = (dispatch) => {
    //  props: dispach = () => {}
    return{
        handleUsername: (e) => (dispatch ({type: "USERNAME", payload: e.target.value } ))

    }

}
export default connect(mapStateToProps, mapDispatchToProps ) (LoginForm)
