import React, { Component  } from 'react'
import PropTypes from 'prop-types';
import {Card,Form,InputGroup,FormControl, Button} from 'react-bootstrap';
import './login.css';
import {connect} from 'react-redux';
import {login} from '../actions/login';
import {Redirect} from 'react-router-dom';



 class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      isLoading:false
    }
  }

  handleRedirect=()=>{
    console.log("done")
    return <Redirect to={'/'}/>;
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
    this.setState({
      isLoading:true,
      email:'',
      password:'',
    });
    this.props.login(this.state).then(
      (res)=>{this.context.router.history.push('/');
      }
    );

  }

    render() {
        return (
          <div className="container-fluid  bg-light">
              <div className="row">
                <div className="col-lg-4 col-md-4 "></div>
                <div className="col-lg-4 col-md-4   ">
                       
            <div className="login">
                <Card className="shadow login-card mt-3">
  <Card.Header className="bg-success rounded-top text-white text-center">LOGIN</Card.Header>
  <Card.Body>
    <div className="img-logo pt-4 pb-1 text-center">
      <img className="rounded-circle" height="70px" width="70px" src="https://cdn.dribbble.com/users/2202429/screenshots/6604110/markhor_2_drrible_4x.jpg?compress=1&resize=400x300" alt="logo"/>
    </div>
  <Form  onSubmit={this.onSubmit}className="m-3 mt-3 mb-3">
  
   
  
      <InputGroup className="mb-2">
        <InputGroup.Prepend className="bg-light">
          <InputGroup.Text><i class="fas text-secondary pr-1 fa-mobile-alt"></i></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl value={this.state.email}
        onChange={this.handleChangeEmail}
        id="inlineFormInputGroup" type="email"  />
      </InputGroup>

      
      <InputGroup className="mb-2">
        <InputGroup.Prepend className="bg-light">
          <InputGroup.Text ><i class="fas text-secondary fa-lock"></i></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl value={this.state.password}
        onChange={this.handleChangePassword} type="password" id="inlineFormInputGroup" />
      </InputGroup>
 <div className=" div-button">
  <Button className="  button" type="submit">
    LOG IN
  </Button>
  </div>
</Form>
  </Card.Body>
</Card>
            </div>
                </div>
                <div className="col-lg-4 col-md-4 "></div>
                </div>
           </div>
        )
    }
}

Login.contextTypes={
  router:PropTypes.object.isRequired
}

export default connect(null,{login})(Login);