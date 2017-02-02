import React, {Component} from 'react'
import styles from '../styles'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'


class Login extends Component {
  render() {
    return(
      <div className = "col-xs-6 col-xs-offset-3">
        <ul className = "nav nav-tabs nav-justified">
          <li className = "active"><a data-toggle = "tab" href = "#loginn"><h3>Login</h3></a></li>
          <li><a data-toggle = "tab" href = "#signup"><h3>Sign Up</h3></a></li>
        </ul>
        <div className = "tab-content">
          <div id = "loginn" className = "tab-pane fade in active">
          <center><LoginForm/></center>
          </div>
          <div id = "signup" className = "tab-pane fade">
            <center><SignupForm/></center>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
