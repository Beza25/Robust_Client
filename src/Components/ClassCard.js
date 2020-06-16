import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

 class ClassCard extends Component {
    render() {
        // console.log("Class Cad's props: ", this.props)
        // "https://clipartstation.com/wp-content/uploads/2018/10/textbooks-clipart-5.jpg"
        let {klass} = this.props
        return (
                <div id="klass-card" className="card" >
                    
                        <div className="image">
                            <img alt="recipe" src= {klass.img}/> 
                        </div>
                        <div className="content">
                            <div className="header center-name">{klass.name}</div>
                            <div className="description center-about"> GRADE: {klass.level}</div>
                            <br/>
                            <Link to= {`/classes/${klass.id}`}> 
                                <button className="ui olive button">Detail</button>
                            </Link> 
                        </div>
                        
                  
                </div>
        )
    }
}

        
// on click of an assignemet 
const mapDispatchToProps = () =>{
    return {
        // porps: dispatch()
    }


}


const mapStateToProps = (state, ownProps) => {
    // console.log("own Props", ownProps)
    return{
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCard)
// export default ClassCard



// Goal: when I click on a card I want to go to main page
//Problem: I get to route but "page is not found" because in App doesn't have that route 
// Solution: Link on the card button that gets the id
//           Be able to show static page with the route defined and the id of the klass
//           
//   
