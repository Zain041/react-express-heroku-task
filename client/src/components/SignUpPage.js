import React, { Component } from 'react'
import SignUp from './signup';
import {connect } from 'react-redux';
import {userSignUpRequest} from '../actions/signupActions';


 class SignUpPage extends Component {
    render() {
        const {userSignUpRequest}=this.props;
        return (
            <div>
                <SignUp userSignUpRequest={userSignUpRequest}/>
            </div>
        )
    }
}


export default connect((state)=>{return {}},{userSignUpRequest})(SignUpPage);
