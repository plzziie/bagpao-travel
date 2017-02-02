import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function Contact (props) {
    return(
    <div>
      <div className = "jumbotron col-xs-6 col-xs-offset-3 text-center" style = {styles.transparentBg}>
        <h2>{props.header}</h2>
        <div className = "col-xs-12" style = {styles.gap}>
          <form onSubmit = {props.handleSubmit}>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Name'
                type = 'text' />
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'E-mail'
                type = 'text' />
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Subject'
                type = 'text' />
            </div>
            <div className = "form-group">
              <textarea
                className = 'form-control'
                placeholder = 'Message'
                rows = '5'
                type='text' />
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
  sendFormData: PropTypes.func.isRequired,
  requestBuildQueryString: PropTypes.func.isRequired,
  getSelected: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default Contact