
// returns the dispatched action


const url = "http://localhost:3001/klasses"

// on Load of this page, dispatch an action that is FETCHED_KLASSES
function fetchedKlasses(klasses){
    return {type: "FETCHED_KLASSES", payload: klasses}
}


// After fetching dispach the fetched klasses
// incooperate thunk by returning a dispatch function
function fetchingKlasses(){
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(klasses => {
            // console.log(klasses)
            // normally in react this.setState{ classes }
            // but now we don't want our component to handle state
            dispatch(fetchedKlasses(klasses))
        } )
    

    }
     
}

export {fetchingKlasses}


// Problem: the return of fetchingKlasses get dispached before the fetch because it is Asynchronous
// Solution: Make it synchronos by using redux thunk
//           install the thunk and import it inside the store
//           because thunk works similarly as our redux tool, need to change window... to thunk


