import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class AssignmentFrom extends Component {
    constructor(){
        super()
        this.state={
            startDate: new Date(),
            title: "",
            assign: ""

        }
    }

    handleChange = (e) =>{
        this.setState( {[e.target.name]:  e.target.value } )
    }
    handleDate = date => {
        this.setState ({startDate: date})

    }

getMonthFromString = (mon) => {
        return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
     }

    SubmitAssign = (e) => {
        e.preventDefault()
        let date = this.state.startDate.toString().split(' ').splice(1, 4)
        let month = this.getMonthFromString(date[0])


        console.log(this.props.klass.id)
        
       const assign= { 
           klassId: this.props.klass.id,
           title: this.state.title,
           content: this.state.assign,
           deadline: [month,date[1],date[2]]
        }
        // console.log("New Asss", assign)
        fetch("http://localhost:3001/assignments",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(assign)
        }).then(resp => resp.json())
        .then(newAssign =>  this.props.createAssign(newAssign))
       
        
      this.props.displayAssigns()
    }

    render() {
        return (
            <div id = "assign-form-container">
                <form className="ui form" onSubmit = {this.SubmitAssign}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text"  placeholder="title"
                         name= "title"
                         value = {this.state.title}
                          onChange={this.handleChange}
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
                        <textarea type="text"  placeholder="content"
                        onChange= {this.handleChange}
                        value = {this.state.assign}
                        name = "assign"
                        ></textarea>
                    </div>
                    <div className="field">
                        
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                
                    
                            
                    </form>
                    <br/>
                    {/* <button className="ui olive button" onClick = {this.props.handleBack} >Back</button> */}
                                    
            </div>
        )
    }
}
