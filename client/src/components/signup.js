import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
import { browserHistory, Redirect } from 'react-router';

export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      password:'',

    }
  }
  handleChangeFirstName=(e)=>{
    this.setState({
      firstName:e.target.value
    })

  }
  handleChangeLastName=(e)=>{
    this.setState({
      lastName:e.target.value
    })

  }
  handleChangeEmail=(e)=>{
    this.setState({
      email:e.target.value
    })

  }
  handleChangePassword=(e)=>{
    this.setState({
      password:e.target.value
    })

  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.userSignUpRequest(this.state).then(
      ()=>{
       
        alert("User created successfully")
      }
    );
    this.setState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
    })
  }
    render() {
        return (
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-md-4 "></div>
                <div className="col-lg-4 col-md-4 bg-light mt-5  col-sm-12 col-xs-12 col-12 shadow rounded">
                <h3 className="text-secondary  rounded-top text-center ">Sign Up</h3>
                <Form onSubmit={this.onSubmit} className="m-3 mt-3 mb-3 ">
                  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>First Name </Form.Label>
    <Form.Control value={this.state.firstName}
    onChange={this.handleChangeFirstName}
    type="text"  />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control value={this.state.lastName}
    onChange={this.handleChangeLastName}
    type="text"  />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={this.state.email}
    onChange={this.handleChangeEmail}
    type="email"  />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={this.state.password}
    onChange={this.handleChangePassword}
    type="password"  />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Sign Up
  </Button>
</Form>
                </div>
                <div className="col-lg-4 col-md-4"></div>
              </div>
               
            </div>
        )
    }
}


