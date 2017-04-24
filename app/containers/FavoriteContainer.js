import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import Favorite from '../components/Favorite'

class FavoriteContainer extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      favtrip: []
    }
  }

  componentWillMount() {
    this.setState({
        username: getIdToken()
    });
  }

  componentDidMount() {

    fetch(`http://localhost:1200/myfavorite`, {
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
      else { console.log(myObj.message)}

  }.bind(this))
  }

  SeeDetails(id) {
    this.context.router.push('/trips-details/'+ id)
  }
  handleRemoveFav(fav) {
  fetch(`http://localhost:1200/favorite`, {
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


  render() {
    return(
     <Favorite
     username = {this.state.username}
     favtrip = {this.state.favtrip}
     onRemoveFav = {(event) => this.handleRemoveFav(event)}
     SeeDetails={(event) => this.SeeDetails(event)}
      />
    )
  }
}

FavoriteContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default FavoriteContainer
