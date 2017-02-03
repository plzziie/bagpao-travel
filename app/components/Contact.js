import React from 'react'
import {PropTypes} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'

function Contact (props) {
    console.log(props)
    return(
    <div>
      <div className = "jumbotron col-xs-6 col-xs-offset-3 text-center" style = {styles.transparentBg}>
        <h2>{props.header}</h2>
        <div className = "col-xs-12" style = {styles.gap}>
          <form data-toggle="validator" role="form" onSubmit = {props.onSubmitUser}>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Name'
                onChange = {props.onUpdateName}
                defaultValue = {props.name}
                type = 'text'
                data-error = "Please enter your name"
                required />
              <div className = "help-block with-errors"></div> 
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'E-mail'
                onChange = {props.onUpdateEmail}
                defaultValue = {props.email}
                type = 'email'
                data-error = "Email address is invalid"
                required />
              <div className = "help-block with-errors"></div> 
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Subject'
                onChange = {props.onUpdateSubject}
                defaultValue = {props.subject}
                type = 'text'
                data-error = "Please Enter Subject"
                required />
              <div className = "help-block with-errors"></div> 
            </div>
            <div className = "form-group">
              <textarea
                className = 'form-control'
                placeholder = 'Message'
                rows = '5'
                onChange = {props.onUpdateMsg}
                defaultValue = {props.message}
                type='text'
                data-error = "Please Enter Message"
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
      </div>
    </div>
    )
  }

  Contact.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateName: PropTypes.func.isRequired,
  onUpdateEmail: PropTypes.func.isRequired,
  onUpdateSubject: PropTypes.func.isRequired,
  onUpdateMsg: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Contact