import React, {Component} from 'react'
import validator from 'bootstrap-validator'

import styles from '../styles'
import Forget from '../components/Forget'

class ForgetContainer extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      err: false,
      pass: false

    }
  }

  handleUpdateUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleUpdateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }
  handleUpdatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleUpdateMail(event) {
    fetch(`http://128.199.106.245:8999/login`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === 'success') {
        this.setState({
            pass: true,
        });
      }
      else {
        this.setState({
          err: true,
        });

      }
    }.bind(this))
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://128.199.106.245:8999/editpassword`, {
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
      location.replace('/login');
  })
}


  render() {
    return(
     <Forget
     onSubmit = {(event) => this.handleSubmit(event)}
     onUpdateUsername = {(event) => this.handleUpdateUsername(event)}
     onUpdateEmail = {(event) => this.handleUpdateEmail(event)}
     onCheckdata = {(event) => this.handleUpdateMail(event)}
     onUpdatePassword={(event) => this.handleUpdatePassword(event)}
     username = {this.state.username}
     password = {this.state.password}
     email = {this.state.email}
     err = {this.state.err}
     pass = {this.state.pass}
     password = {this.state.password}
     />
    )
  }
}

ForgetContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ForgetContainer
