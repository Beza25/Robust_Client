import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ClassCard extends Component {
    render() {
        // debugger
        // console.log(this.props.klass.name)
        return (
           
                <div id="klass-card" className="card" >
                    <div className="image">
                        <img alt="recipe" src= "https://clipartstation.com/wp-content/uploads/2018/10/textbooks-clipart-5.jpg"/> 
                    </div>
                    <div className="content">
                        <div className="header center-name">{this.props.klass.name}</div>
                        <div className="description center-about"> GRADE: {this.props.klass.level}</div>
                    </div>
                </div> 
          
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         klass: state.klasses.map( k => )
//     }
// }

// export default connect(mapStateToProps)(ClassCard)
export default ClassCard
