import React, {Component} from 'react'
import {PropTypes} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

function SignupForm (props) {
  console.log(props)
    return (
      <div className = "jumbotron col-xs-8 col-xs-offset-2" style = {styles.transparentBg}>
      {props.err ? <div className = "alert alert-danger text-center" id = "danger" style = {styles.gapp}>
      That username is taken. Try another !</div> : null}
        <form data-toggle = "validator" role = "form" onSubmit = {props.onSubmitUser}>
          <div className = "form-group">
            <input
              className = 'form-control'
              placeholder = 'username'
              onChange = {props.onUpdateUsername}
              defaultValue = {props.username}
              type = 'text'
              data-error = "Please enter your username"
              required />
            <div className = "help-block with-errors"></div>
          </div>
          <div className = "form-group">
            <input
              className = 'form-control'
              placeholder = 'password'
              onChange = {props.onUpdatePassword}
              defaultValue = {props.password}
              type = 'password'
              id = 'pass'
              data-error = "Please enter your password"
              required />
            <div className = "help-block with-errors"></div>
          </div>
          <div className = "form-group">
            <input
              className = 'form-control'
              placeholder = 're-password'
              type = 'password'
              data-match = "#pass"
              data-match-error = "Your password is not match"
              data-error = "Please enter your password again"
              required />
            <div className = "help-block with-errors"></div>
          </div>
          <div className = "form-group">
            <input
              className = 'form-control'
              placeholder = 'email'
              onChange = {props.onUpdateEmail}
              defaultValue = {props.email}
              type='email'
              data-error = "Email address is invalid"
              required />
            <div className = "help-block with-errors"></div>
          </div>
          <div className = "form-group col-xs-4 col-xs-offset-4">
             <button
               className = "btn btn-block btn-success"
               type = "submit">
                Submit
             </button>
          </div>
          <div className = "col-xs-12 text-center">
            <h4>Already have an account ?<a href = "/login"> Login Here </a></h4>
          </div>
        </form>
      </div>
    );
  }


 SignupForm.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUsername: PropTypes.func.isRequired,
  onUpdatePassword: PropTypes.func.isRequired,
  onUpdateEmail: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  err: PropTypes.bool.isRequired
}

export default SignupForm
