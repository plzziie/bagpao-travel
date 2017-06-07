import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import validator from 'bootstrap-validator'
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
      err: '',
      table: '',
      member: []
    }
  }

  componentDidMount() {
    fetch(`http://128.199.106.245/show`, {
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
        bio: this.state.member[0].bio,
        picture: this.state.member[0].picture
      });
    }.bind(this))
  }

  handleUpdatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleUpdatePicture(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (upload) => {
      this.setState({
        picture: upload.target.result
      });
      var output = document.getElementById('output');
      output.src = this.state.picture;
    }
    reader.readAsDataURL(file)
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

    if (this.state.interest.indexOf(cat) === -1) {
        this.state.interest = this.state.interest.concat(cat)
    }
    else {
      this.state.interest.splice(this.state.interest.indexOf(cat), 1)
    }
    this.setState({
      interest: this.state.interest
    });
  }
  handleUpdateBio(event) {
    this.setState({
      bio: event.target.value
    });
  }

  handleSubmitEdit(event) {
    event.preventDefault();

    fetch(`http://128.199.106.245/editprofile`, {
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
        bio: this.state.bio,
        picture: this.state.picture
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      location.replace('/profile');
  })
}

render() {
  return(
   <EditProfile
   onSubmitEdit={(event) => this.handleSubmitEdit(event)}
   onUpdatePassword={(event) => this.handleUpdatePassword(event)}
   onUpdatePicture={(event) => this.handleUpdatePicture(event)}
   onUpdateCity={(event) => this.handleUpdateCity(event)}
   onUpdateEmail={(event) => this.handleUpdateEmail(event)}
   onUpdateBirthday={(event) => this.handleUpdateBirthday(event)}
   onUpdateInterest={(event) => this.handleUpdateInterest(event)}
   onUpdateBio={(event) => this.handleUpdateBio(event)}
   password = {this.state.password}
   email = {this.state.email}
   birthday = {this.state.birthday}
   currentcity = {this.state.currentcity}
   interest = {this.state.interest}
   bio = {this.state.bio}
   member = {this.state.member}
   picture = {this.state.picture}
    />
  )
}
}

EditProfileContainer.contextTypes = {
router: React.PropTypes.object.isRequired
}


export default EditProfileContainer
