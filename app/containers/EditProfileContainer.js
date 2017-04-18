import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import EditProfile from '../components/EditProfile'

class EditProfileContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      password: '',
      email: '',
      display:'',
      birthday: '',
      currentcity: '',
      interest: '',
      picture: '',
      bio: '',
      status: '',
      err: '',
      member: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "mem",
        username: getIdToken()
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            member: myObj
        });
      }
      else {
        console.log(myObj.message);
      }
    }.bind(this))
  }

  handleUpdateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleUpdateDisplay(event) {
    this.setState({
      display: event.target.value
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
  handleUpdateBirthday(event) {
    this.setState({
      birthday: event.target.value
    });
  }
  handleUpdateCity(event) {
    this.setState({
      currentcity: event.target.value
    });
  }
  handleUpdateInterest(event) {
    this.setState({
      interest: event.target.value
    });
  }
  handleUpdateBio(event) {
    this.setState({
      bio: event.target.value
    });
  }
  handleUpdateStatus(event) {
    this.setState({
      status: event.target.value
    });
  }

  handleSubmitEdit(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/editprofile`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        display: this.state.display,
        birthday: this.state.birthday,
        currentcity: this.state.currentcity,
        interest: this.state.interest,
        picture: this.state.picture,
        bio: this.state.bio,
        status: this.state.status,
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      console.log(myObj);
      location.replace('/mytrip');
  })
}

render() {
  return(
   <EditProfile
   onSubmitEdit={(event) => this.handleSubmitEdit(event)}
   onUpdatePassword={(event) => this.handleUpdatePassword(event)}
   onUpdateDisplay={(event) => this.handleUpdateDisplay(event)}
   onUpdateCity={(event) => this.handleUpdateCity(event)}
   onUpdateEmail={(event) => this.handleUpdateEmail(event)}
   onUpdateBirthday={(event) => this.handleUpdateBirthday(event)}
   onUpdateInterest={(event) => this.handleUpdateInterest(event)}
   onUpdateBio={(event) => this.handleUpdateBio(event)}
   onUpdateStatus={(event) => this.handleUpdateStatus(event)}
   onUpdateName={(event) => this.handleUpdateName(event)}
   name = {this.state.name}
   password = {this.state.password}
   email = {this.state.email}
   display = {this.state.display}
   birthday = {this.state.birthday}
   currentcity = {this.state.currentcity}
   interest = {this.state.interest}
   picture = {this.state.picture}
   bio = {this.state.bio}
   status = {this.state.status}
    />
  )
}
}

EditProfileContainer.contextTypes = {
router: React.PropTypes.object.isRequired
}


export default EditProfileContainer
