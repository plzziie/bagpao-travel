import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import MyTrip from '../components/MyTrip'

class MyTripContainer extends Component {

  render() {
    return(
     <MyTrip
     username = {this.state.username}
     member = {this.state.member}
     mytrip = {this.state.mytrip}
      />
    )
  }
}

MyTripContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MyTripContainer
