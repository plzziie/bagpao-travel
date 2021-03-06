import React, {Component} from 'react'
import styles from '../styles'
import {getIdToken} from '../lib/AuthService';
import Trips from '../components/Trips'

class TripsContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      trips: [],
      show: [],
      searching: false,
      found: '',
      err: '',
      sort: true,
      username: getIdToken()
    }
  }

  componentDidMount() {
    fetch(`http://128.199.106.245:8999/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "tp"
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            show: myObj
        });
      }
    }.bind(this))
  }

  ChangeSort(event) {
    fetch(`http://128.199.106.245:8999/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: event.target.value
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            show: myObj,
            sort: !this.state.sort
        });
      }
    }.bind(this))
  }

  SeeDetails(id) {
    this.context.router.push('/trips-details/'+ id)
  }

  handleUpdateSearch(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    fetch(`http://128.199.106.245:8999/trips`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            trips: myObj,
            searching: true,
            found: true
        })
      }
      else {
        this.setState({
            err: myObj.message,
            searching: true,
            found: false
        })
      }
    }.bind(this))
  }

  handleAddFav(fav) {
  fetch(`http://128.199.106.245:8999/favorite`, {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: fav,
        username: this.state.username,
        add: "add"
      })
    })
  }


  handleUpdateLike(like) {
  fetch(`http://128.199.106.245:8999/like`, {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: like,
        username: this.state.username
      })
  })
}


  render() {
    return(
     <Trips
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateSearch={(event) => this.handleUpdateSearch(event)}
      ChangeSort={(event) => this.ChangeSort(event)}
      SeeDetails={(event) => this.SeeDetails(event)}
      header = {this.props.route.header}
      name = {this.state.name}
      trips = {this.state.trips}
      show = {this.state.show}
      searching = {this.state.searching}
      found = {this.state.found}
      err = {this.state.err}
      sort = {this.state.sort}
      onUpdateLike= {(event) => this.handleUpdateLike(event)}
      AddFav = {(event) => this.handleAddFav(event)}
      />
    )
  }
}

TripsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripsContainer
