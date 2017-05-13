import React, {Component} from 'react'
import {PropTypes} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

function Forget (props) {
  console.log(props)
    return (
      <div className="container-fluid">
      <div className = "jumbotron col-xs-8 col-xs-offset-3" style = {styles.transparentBg}>
      <h4 className="col-md-10">Reset Password</h4>


        <form data-toggle = "validator" role = "form">
          {props.err ? <div className = "alert alert-danger text-center" id = "danger" style = {styles.gapp}>
          Invalid username or E-mail !</div> : null}
          <div className = "form-group col-md-10">
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
          <div className = "form-group col-md-10">
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

            <a className="col-md-2 cursor" onClick={() => props.onCheckdata(event)}>check</a>


      <div className = "form-group col-md-10">
        <input
          className = 'form-control' placeholder = 'New Password' type = 'password' id = 'pass'
          defaultValue = {props.password} onChange = {props.onUpdatePassword}
          data-error = "Please enter your password" required />
        <div className = "help-block with-errors"></div>
      </div>

      <div className = "form-group col-md-10">
        <input
          className = 'form-control' placeholder = 're-password' type = 'password'
          data-match = "#pass" data-match-error = "Your password is not match"
          data-error = "Please enter your password again" required />
        <div className = "help-block with-errors"></div>
      </div>

    {props.pass ?   <div className = "form-group col-xs-4 col-xs-offset-2" >
         <button
           className = "btn btn-block btn-success" type = "submit" onClick={() => props.onSubmit(event)}> Change Password
         </button>
      </div>
    : null}
        </form>


      </div>
    </div>
    )
  }
  Forget.PropTypes = {
   onSubmit: PropTypes.func.isRequired,
   onUpdateUsername: PropTypes.func.isRequired,
   onUpdateEmail: PropTypes.func.isRequired,
   onUpdatePassword: PropTypes.func.isRequired,
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   err: PropTypes.bool.isRequired,
   pass: PropTypes.bool.isRequired,
   onCheckdata: PropTypes.string.isRequired
  }


export default Forget
