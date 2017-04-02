import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'


class Admin_login extends Component {
  render() {
    return (
      <div className="container-fluid">
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
    </div>
    );
  }
}

export default Admin_login
