// import classes from '../classes_data.json'

import { combineReducers } from "redux";


let intialState = {
    klasses: [],
    currentUser : {
        id: 2,
        first_name: "Carla", 
        last_name: null,
         username: "carla",
          password_digest: null,
           img: "https://ca.slack-edge.com/T02MD9XTF-UU5CVUP08-d274...",
           user: "teacher",
            created_at: "2020-06-09 03:01:25", updated_at: "2020-06-09 03:01:25"
      },
    userName: ""
}


const klassesReducer = (oldState = intialState.klasses, action) => {
    // console.log("in reducer", oldState)
    // in the case of FECTHED_KLASSES, return action.payload
    switch (action.type){
        case "FETCHED_KLASSES":
            return action.payload
        default:
            return oldState
    }
}
const userReducer = (oldState = intialState.currentUser, action) =>{

    // "CURENTUSER" return action.payload
    return oldState


}

const userNameReducer = (oldState = intialState.userName, action) =>{

    // "CURENTUSER" return action.payload
    switch(action.type){
        case "USERNAME":
         return {username: action.payload}
        default:
            return oldState
    }
}



// make your reducer to return an object by using combinned reducer 
const rootReducer = combineReducers({
    klasses: klassesReducer,
    currentUser: userReducer,
    userName: userNameReducer
   
   
})


export default rootReducer