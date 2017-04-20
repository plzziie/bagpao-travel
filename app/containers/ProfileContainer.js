import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import Profile from '../components/Profile'

class ProfileContainer extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      member: [],
    }
  }

  componentWillMount() {
    this.setState({
        username: getIdToken()
    });
  }

  componentDidMount() {
      fetch(`http://localhost:1200/show`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          do: "mem",
          username: this.state.username
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
        this.context.router.push({
          pathname: '/mytrip'
        })
      }
    }.bind(this))


  }


  render() {
    return(
     <Profile
     username = {this.state.username}
     member = {this.state.member}
      />
    )
  }
}

ProfileContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default ProfileContainer
