import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom"
import swal from 'sweetalert';

class EditAssignment extends Component {
    constructor(props){
        super(props)
        this.state= {
            title: this.props.assign.title,
            startDate: this.props.assign.deadline,
            content: this.props.assign.content ? this.props.assign.content : ""
        }
    }

 handleTitle = (e) =>{
    this.setState({title: e.target.value})

}
handleDate = (date) =>{
    this.setState({startDate: date})

}
handleContent = (e) =>{
    this.setState({content: e.target.value})

}
editAssign = (e)=> {
    e.preventDefault()
    const updateAssign = {
        title: this.state.title,
        date: this.state.startDate,
        content: this.state.content

    }

    fetch(`http://localhost:3001/assignments/${this.props.assign.id}`,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        body: JSON.stringify(updateAssign)
    }).then(resp => resp.json())
    .then(updatedAssign =>{
        // console.log(updatedAssign)
       
        this.props.editAssigns(updatedAssign)
       
        this.props.displayAssigns()
        
    } )
}

    render() {
        // console.log("edit assing:", this.props)
        return (
            <div>
                <h1> Edit Form {this.props.assign.id}</h1>
                <br/>


                <form className="ui form" onSubmit = {this.editAssign}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text"  placeholder="Title"
                        name= "title"
                        value = {this.state.title}
                        onChange={this.handleTitle}
                        />
                    </div>
                    <div className="field">
                        <label>Due Date:</label>
                        <DatePicker 
                        selected={this.state.startDate}
                        onChange={(date ) => this.handleDate(date)}
            
                        minDate={new Date()}    
                    />
                </div>



                    <div className="field">
                        <label>Assignemt</label>
                        <textarea type="text"  placeholder="Content"
                        onChange= {this.handleContent}
                        value = {this.state.content}
                        name = "content"
                        ></textarea>
                    </div>
                    <div className="field">
                        
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                    {/* <Link to= {`/classes/${this.props.klass.id}`}> 
                                <button className="ui olive button">Back</button>
                            </Link> */}
                    </form>
                                
            </div>
        )
    }
}

export default EditAssignment

// when clicked sent the action => render the form => get the info from the form 
// => make patch fetch request=> change the user's Assignments array with the most updated  
