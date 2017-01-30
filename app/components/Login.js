import React from 'react'
import styles from '../styles'

var Login = React.createClass({
  render: function () {
    return(
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style = {styles.transparentBg}>
        <h2>{this.props.route.header}</h2>
        <div className = "col-sm-12">
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
                type = 'text' />
            </div>
            <div className="form-group">
              <input
                className = 'form-control'
                placeholder = 'Repassword'
                type = 'text' />
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'Email'
                type = 'text' />
            </div>

            <div className = "form-group col-sm-4 col-sm-offset-4">
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