import React, {Component} from 'react'
import {PropTypes} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

function LoginForm (props) {
  console.log(props)
    return (
      <div className = "jumbotron col-xs-8 col-xs-offset-2" style = {styles.transparentBg}>

      {props.status ? null : <div className = "alert alert-success" id = "success" style = {styles.gapp}>
      Thank you ! Your message has been successfully sent. We will contact you very soon !</div>}

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
              data-error = "Please enter your password"
              required />
            <div className = "help-block with-errors"></div>
          </div>
          <div className = "form-group col-xs-4 col-xs-offset-4">
            <button
              className = "btn btn-block btn-success"
              type = "submit">
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }

 LoginForm.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUsername: PropTypes.func.isRequired,
  onUpdatePassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
}

export default LoginForm
