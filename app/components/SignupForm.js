import React, {Component} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

class SignupForm extends Component {
  render() {
    return (
      <div className = "jumbotron col-xs-8 col-xs-offset-2" style = {styles.transparentBg}>
        <form data-toggle = "validator" role = "form">
          <div className = "form-group">
            <input
              className = 'form-control'
              placeholder = 'username'
              type = 'text'
              data-error = "Please enter your username"
              required />
            <div className = "help-block with-errors"></div>
          </div>
          <div className = "form-group">
            <input
              className = 'form-control'
              placeholder = 'password'
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
        </form>
      </div>
    );
  }
}

export default SignupForm