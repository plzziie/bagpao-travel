import React, {Component} from 'react'
import {PropTypes} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

function Forget (props) {
  console.log(props)
    return (
      <div className="container-fluid">
      <div className = "jumbotron col-xs-8 col-xs-offset-2" style = {styles.transparentBg}>
      <h4>Reset Password</h4>

      {props.err ? <div className = "alert alert-danger text-center" id = "danger" style = {styles.gapp}>
      Invalid username or E-mail !</div> : null}
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
              placeholder = 'email'
              onChange = {props.onUpdateEmail}
              defaultValue = {props.email}
              type = 'email'
              data-error = "Please enter your E-mail"
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
        </form>

      {props.pass ?  <form data-toggle = "validator" role = "form">
        <div className = "form-group">
          <input
            className = 'form-control' placeholder = 'New Password' type = 'password' id = 'pass'
            data-error = "Please enter your password" required />
          <div className = "help-block with-errors"></div>
        </div>

        <div className = "form-group">
          <input
            className = 'form-control' placeholder = 're-password' type = 'password'
            data-match = "#pass" data-match-error = "Your password is not match"
            data-error = "Please enter your password again" required />
          <div className = "help-block with-errors"></div>
        </div>

        <div className = "form-group col-xs-4 col-xs-offset-4">
           <button
             className = "btn btn-block btn-success" type = "submit"> Change Password
           </button>
        </div>
        </form> : null}
      </div>
    </div>
    )
  }
  Forget.PropTypes = {
   onSubmitUser: PropTypes.func.isRequired,
   onUpdateUsername: PropTypes.func.isRequired,
   onUpdateEmail: PropTypes.func.isRequired,
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   err: PropTypes.bool.isRequired,
   pass: PropTypes.bool.isRequired
  }


export default Forget
