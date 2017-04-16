import React, {Component} from 'react'
import validator from 'bootstrap-validator'
import {login} from '../lib/AuthService';
import styles from '../styles'
import LoginForm from '../components/LoginForm'


class LoginFormContainer extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      status: false,
      err: false
    }
  }

  componentDidMount() {
    this.setState ({
      status: this.props.location.state.status
    })
  }

  handleUpdateUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleUpdatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;

    fetch(`http://localhost:1200/login`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === 'success') {
        login(myObj.username)
        if (myObj.username == "admin") {
          this.context.router.push({
            pathname: '/admin',
            state: {
              username: myObj.username
            }
          })
        }
        else {
          this.context.router.push({
            pathname: '/mytrip',
            state: {
              username: myObj.username
            }
          })
        }
      }
      else {
        this.setState({
          err: true,
          status: false
        });

      }
    }.bind(this))
  }

  render() {
    return(
     <LoginForm
     onSubmitUser = {(event) => this.handleSubmitUser(event)}
     onUpdateUsername = {(event) => this.handleUpdateUsername(event)}
     onUpdatePassword = {(event) => this.handleUpdatePassword(event)}
     username = {this.state.username}
     password = {this.state.password}
     status = {this.state.status}
     err = {this.state.err}
     />
    )
  }
}

LoginFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginFormContainer
