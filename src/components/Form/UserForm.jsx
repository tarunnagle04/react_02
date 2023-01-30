import React, { Component } from "react";
import { UserTile } from "./UserTile";
import "./UserForm.css";

export class UserForm extends Component {
    state = {
        name: "",
        department: "",
        rating: ""
    }

    list = [];

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.list.push(this.state);  
        this.setState({
            name: '',
            department: '',
            rating: ''
        });
    }

    render() {
        return (
            <div>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" value={this.state.name} name="name" onChange={this.changeHandler}/>
                <br/>
                <label>Department:</label>
                <input type="text" name="department" value={this.state.department} onChange={this.changeHandler}/>
                <br/>
                <label>Rating:</label>
                <input type="number" name="rating" value={this.state.rating} onChange={this.changeHandler}/>
                <br/>
                <button type="submit">Submit</button>
            </form>

            <div style={{margin: '10px'}}>
                {this.list.length ? <UserTile props={this.list}/> : ''}
            </div>
            </div>
        )
    }
}

//using function component https://stackoverflow.com/questions/23929432/submit-form-in-reactjs-using-button-element