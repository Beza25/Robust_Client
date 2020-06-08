import {createStore, applyMiddleware, compose} from 'redux'
import reducer from "./reducer"
import thunk from 'redux-thunk';

// need to add composeEnhancer to use react developing tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducer, composeEnhancers(applyMiddleware( thunk))  );
//  console.log("What is store? ", store)

 export default store;