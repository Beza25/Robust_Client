import React, { Component } from 'react'
import ClassCard from "../Components/ClassCard"
import {connect} from "react-redux"
// import {Switch, Route} from "react-dom"


 class HomePage extends Component {


    render() {
        return (
            <div>

                <h1> My Clasess</h1>
                <div className= "ui link centered cards">
                    {/* <Switch>
                        <Route
                            path = "/klasses/:klassId"
                            component = {ClassCard}
                        />
                    </Switch> */}
                    {this.props.fetchedKlasses.map(k =>  
                        <ClassCard key={k.id} klass = {k} /> )}
                     
                </div> 
                
            </div>
        )
    }
}


// accepts state and returns an object that props map to the state
const mapStateToProps = ( state )=> {
    console.log( "Statie is ", state)
    return {

        fetchedKlasses: state.klasses
    }
 
}

export default connect(mapStateToProps)(HomePage) 
// export default HomePage

// i want to get the sate from star and snik it as props
// End product 
// Solution use connect (mapstatToProps) to map the state to props
// mapstatToProps is a function that accepts the state from the store and return 
//    props with key and value 
// export the enhanced HomePage 




    // Problem: getting the all klasses from api and dispatching it to store
    //           so that inital state has all klasses at the beginig
    
    // Solution: Request GET Fetch request when the component did monunt 
   
  

//Problem : if we have the fecth call on this component, when switching route this component gets
//          mount and unmont each  time mainpage is clicked hence fetching that many times 
// Goal : we want to fetch only once
// Solution: Make the fetch call in App where only one fetch is required

// Problem: Every Component shoud be as dumb as possible and just handle props
//          All state changes should happen in redux (store)
// Solution: Redux thunk
//         fetch inside action
