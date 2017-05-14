import React, {Component} from 'react'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import MyTrip from '../components/MyTrip'

class MyTripContainer extends Component {

  constructor () {
    super()
    this.state = {
      username: getIdToken(),
      name: '',
      nme: '',
      mytrip: [],
      add: '',
      showModal: false
    }
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

DeleteTrip() {
  event.preventDefault();
  fetch(`http://localhost:1200/admin`, {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      admin: "delete",
      types: "trip",
      name: this.state.nme
      })
  })
  .then(function (response) {
    return response.text()
  }).then(function (body) {
    var myObj = JSON.parse(body);
    window.location.reload()
})
}

handleAddFav(fav) {
fetch(`http://localhost:1200/favorite`, {
    method: 'POST',
    headers:{
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      name: fav,
      username: this.state.username,
      add: "add"
    })
  }).then(function (body) {
    location.replace('/profile');
  })
}

SeeTripsDetails(id) {
    this.context.router.push('/trips-details/'+ id)
  }

close(){
  this.setState({
    showModal: false
  });
}

open(e){
  this.setState({
    showModal: true,
    nme: e
  });
}

  render() {
    return(
     <MyTrip
     username = {this.state.username}
     mytrip = {this.state.mytrip}
     deletetrip = {(event) => this.DeleteTrip(event)}
     onUpdateLike = {(event) => this.handleUpdateLike(event)}
     onAddFav = {(event) => this.handleAddFav(event)}
     SeeTripsDetails = {(event) => this.SeeTripsDetails(event)}
     open = {(event) => this.open(event)}
     close = {(event) => this.close()}
     showModal = {this.state.showModal}
      />
    )
  }
}

MyTripContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MyTripContainer
