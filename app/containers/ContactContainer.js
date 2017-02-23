import React, {Component} from 'react'
import styles from '../styles'
import Contact from '../components/Contact'


class ContactContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
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

    fetch(`http://localhost:1200/get/${this.state.name}/${this.state.email}/${this.state.subject}/${this.state.message}`, {
        method: 'GET',
        headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        return response.text()
      }).then(function (body) {
        document.body.innerHTML = body
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
     />
    )
  }
}

export default ContactContainer