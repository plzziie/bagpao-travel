import React, {Component} from 'react'
import styles from '../styles'

class LoginForm extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className = "jumbotron col-xs-8 col-xs-offset-2" style = {styles.transparentBg}>
        <form>
            <div className = "form-group text-left">
=======
      <div className = "jumbotron col-sm-8 col-sm-offset-2" style={styles.transparentBg}>

          <form onSubmit = "">
            <div className="form-group text-left">
>>>>>>> 7122060f4803084798a245a137f304f2f0f3977d
              <input
                className = 'form-control'
                placeholder = 'username'
                type = 'text' />
            </div>
            <div className = "form-group">
              <input
                className = 'form-control'
                placeholder = 'password'
                type='password' />
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
    );
  }
}

export default LoginForm