import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import MyTrip from '../components/MyTrip'

class MyTripContainer extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      mytrip: []
    }
  }

  componentWillMount() {
    this.setState({
        username: getIdToken()
    });
  }

  componentDidMount() {
    fetch(`http://localhost:1200/mytrips`, {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        username: this.state.username
      })
  })
  .then(function (response) {
    return response.text()
  }).then(function (body) {
    var myObj = JSON.parse(body);
    if (myObj.message === undefined) {
      this.setState({
          mytrip: myObj
      });
    }
      else { console.log(myObj.message)}

    }.bind(this))
  }

  handleUpdateLike(like) {
  fetch(`http://localhost:1200/like`, {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: like
      })
  })
}

  render() {
    return(
     <MyTrip
     username = {this.state.username}
     mytrip = {this.state.mytrip}
     onUpdateLike = {(event) => this.handleUpdateLike(event)}
      />
    )
  }
}

MyTripContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MyTripContainer
