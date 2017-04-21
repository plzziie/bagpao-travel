import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import EditProfile from '../components/EditProfile'

class EditProfileContainer extends Component {

  constructor () {
    super()
    this.state = {
      password: '',
      email: '',
      birthday: '',
      currentcity: '',
      interest: [],
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
    .then(function (set) {
      this.setState({
        password: this.state.member[0].password,
        email: this.state.member[0].email,
        birthday: this.state.member[0].birthday,
        currentcity: this.state.member[0].currentcity,
        picture: this.state.member[0].picture,
        bio: this.state.member[0].bio,
        status: this.state.member[0].status,
      });
    }.bind(this))
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
    var cat = event.target.value
    this.setState({
      interest: this.state.interest.concat(cat)
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
        username: this.state.member[0].username,
        password: this.state.password,
        email: this.state.email,
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
      location.replace('/profile');
  })
}

render() {
  return(
   <EditProfile
   onSubmitEdit={(event) => this.handleSubmitEdit(event)}
   onUpdatePassword={(event) => this.handleUpdatePassword(event)}
   onUpdateCity={(event) => this.handleUpdateCity(event)}
   onUpdateEmail={(event) => this.handleUpdateEmail(event)}
   onUpdateBirthday={(event) => this.handleUpdateBirthday(event)}
   onUpdateInterest={(event) => this.handleUpdateInterest(event)}
   onUpdateBio={(event) => this.handleUpdateBio(event)}
   onUpdateStatus={(event) => this.handleUpdateStatus(event)}
   password = {this.state.password}
   email = {this.state.email}
   birthday = {this.state.birthday}
   currentcity = {this.state.currentcity}
   interest = {this.state.interest}
   picture = {this.state.picture}
   bio = {this.state.bio}
   status = {this.state.status}
   member = {this.state.member}
    />
  )
}
}

EditProfileContainer.contextTypes = {
router: React.PropTypes.object.isRequired
}


export default EditProfileContainer
