import React, {Component} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'
import LoginForm from '../components/LoginForm'

class LoginFormContainer extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
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

    fetch(`http://localhost:1200/signup`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
    })

    this.setState({
      username: '',
      password: ''
    });

    this.context.router.push(`/mytrip`)
  }

  render() {
    return(
     <LoginForm
     onSubmitUser = {(event) => this.handleSubmitUser(event)}
     onUpdateUsername = {(event) => this.handleUpdateUsername(event)}
     onUpdatePassword = {(event) => this.handleUpdatePassword(event)}
     username = {this.state.username}
     password = {this.state.password}
     />
    )
  }
}

LoginFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginFormContainer