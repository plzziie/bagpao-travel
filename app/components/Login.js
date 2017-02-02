import React from 'react'
import styles from '../styles'

var Login = React.createClass({
  render: function () {
    return(
      <div className = "jumbotron col-xs-6 col-xs-offset-3 text-center" style = {styles.transparentBg}>
        <h2>{this.props.route.header}</h2>
        <div className = "col-xs-12" style = {styles.gap}>
          <form>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Username'
                type = 'text' />
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Password'
                type = 'password' />
            </div>
            <div className="form-group">
              <input
                className = 'form-control'
                placeholder = 'Re-password'
                type = 'password' />
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Email'
                type = 'text' />
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
    )
  }
});

export default Login