import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import Favorite from '../components/Favorite'

class FavoriteContainer extends Component {
  constructor () {
    super()
    this.state = {
      username: getIdToken(),
      favtrip: []
    }
  }

  componentDidMount() {

    fetch(`http://128.199.106.245:8999/myfavorite`, {
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
          favtrip: myObj
      });
    }
      else {
        console.log(myObj.message)
        }

    }.bind(this))
  }

  handleRemoveFav(fav) {
  fetch(`http://128.199.106.245:8999/favorite`, {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: fav,
        username: this.state.username
      })
  })
  .then(function (body) {
    location.replace('/profile');
  })
  }

  SeeTripsDetails(id) {
      this.context.router.push('/trips-details/'+ id)
  }

  render() {
    return(
     <Favorite
     username = {this.state.username}
     favtrip = {this.state.favtrip}
     onRemoveFav = {(event) => this.handleRemoveFav(event)}
     SeeTripsDetails = {(event) => this.SeeTripsDetails(event)}
      />
    )
  }
}

FavoriteContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default FavoriteContainer
