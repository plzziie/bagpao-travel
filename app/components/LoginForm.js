import React, {Component} from 'react'
import {PropTypes} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

function LoginForm (props) {
  console.log(props)
    return (
      <div className="container-fluid">
      <div className = "jumbotron col-xs-8 col-xs-offset-2" style = {styles.transparentBg}>
      {props.status ? <div className = "alert alert-success text-center" id = "success" style = {styles.gapp}>
      Success ! You can Login now !</div> : null}
      {props.err ? <div className = "alert alert-danger text-center" id = "danger" style = {styles.gapp}>
      Invalid username or password !</div> : null}
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
          <div className="col-xs-3 cursor"><a href="/forget">forget password?</a></div>

          <div className = "col-xs-12 text-center">
            <h4>Do not have an account ?<a href = "/signup"> Signup Here </a></h4>
          </div>
        </form>
      </div>
    </div>
    )
  }

 LoginForm.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUsername: PropTypes.func.isRequired,
  onUpdatePassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  err: PropTypes.bool.isRequired
}

export default LoginForm
