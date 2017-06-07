import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import Contact from '../components/Contact'

class ContactContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      isLoading: true
    }
  }

  handleUpdateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleUpdateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleUpdateSubject(event) {
    this.setState({
      subject: event.target.value
    });
  }

  handleUpdateMsg(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    var name = this.state.name;
    var email = this.state.email;
    var subject = this.state.subject;
    var message = this.state.message;

    fetch(`http://128.199.106.245:8999/contactus`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
        })
    }).then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === 'success') {
        this.setState ({
          isLoading: false
        })
        window.location.reload()
      }
    }.bind(this))
  }

  render() {
    return(
     <Contact
     onSubmitUser = {(event) => this.handleSubmitUser(event)}
     onUpdateName = {(event) => this.handleUpdateName(event)}
     onUpdateEmail = {(event) => this.handleUpdateEmail(event)}
     onUpdateSubject = {(event) => this.handleUpdateSubject(event)}
     onUpdateMsg = {(event) => this.handleUpdateMsg(event)}
     header = {this.props.route.header}
     name = {this.state.name}
     email = {this.state.email}
     subject = {this.state.subject}
     message = {this.state.message}
     isLoading = {this.state.isLoading}
     />
    )
  }
}

export default ContactContainer
