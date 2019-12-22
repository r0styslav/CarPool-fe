import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import {Button, Form, FormGroup, Container, Label, Input} from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {password: "", email: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    async handleSubmit(event) {
        event.preventDefault();
        console.log("User Email : " + this.state.email);
        console.log("User password : " + this.state.password);
        const userData = this.state;
        await fetch('http://localhost:8080/api/login',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            })
            .then(res => res.json()).catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <button type="submit" className="btn btn-primary">Register new user</button>
            </React.Fragment>
        )
    }
}