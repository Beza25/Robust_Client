// import classes from '../classes_data.json'

import { combineReducers } from "redux";

let intialState = {
    klasses: [],
    currentUser: null
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
// make your reducer to return an object by using combinned reducer 
const rootReducer = combineReducers({
    klasses: klassesReducer
   
})


export default rootReducer