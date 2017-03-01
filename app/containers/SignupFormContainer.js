import React, {Component} from 'react'
import validator from 'bootstrap-validator'
import styles from '../styles'
import SignupForm from '../components/SignupForm'

class SignupFormContainer extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      email: ''
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

  handleUpdateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
    var email = this.state.email;

    fetch(`http://localhost:1200/signup`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        })
    })

    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      document.body.innerHTML = myObj.message;
    })

    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  render() {
    return(
     <SignupForm
     onSubmitUser = {(event) => this.handleSubmitUser(event)}
     onUpdateUsername = {(event) => this.handleUpdateUsername(event)}
     onUpdatePassword = {(event) => this.handleUpdatePassword(event)}
     onUpdateEmail = {(event) => this.handleUpdateEmail(event)}
     username = {this.state.username}
     password = {this.state.password}
     email = {this.state.email}
     />
    )
  }
}

SignupFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupFormContainer