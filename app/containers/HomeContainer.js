import React, {Component} from 'react'
import styles from '../styles'
import Home from '../components/Home'
import {getIdToken} from '../lib/AuthService';

class HomeContainer extends Component {

  constructor () {
    super()
    this.state = {
      do: 'th',
      poptrip: [],
      popplace: [],
      rectrip:[],
      name: '',
      username: '',
      like: false
    }

  }
  componentWillMount() {
    this.setState({
        username: getIdToken()
    });
  }

  componentDidMount() {

    fetch(`http://localhost:1200/recommend`, {
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
            rectrip: myObj
        });
      }
    }.bind(this))

    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: this.state.do
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            poptrip: myObj
        });
      }
    }.bind(this))

    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "ph"
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            popplace: myObj
        });
      }
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
    handleUpdateView(view) {
    fetch(`http://localhost:1200/view`, {
    method: 'POST',
    headers:{
    'Content-Type': 'application/json'
  },
    body: JSON.stringify({
      name: view
    })
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
  })
}

SeeTripsDetails(id) {
    this.context.router.push('/trips-details/'+ id)
  }

SeeDetails(id) {
    this.context.router.push('/places-details/'+ id)
  }

      render() {
        return(
          <Home
          SeeTripsDetails = {(event) => this.SeeTripsDetails(event)}
          SeeDetails = {(event) => this.SeeDetails(event)}
          poptrip = {this.state.poptrip}
          popplace = {this.state.popplace}
          rectrip = {this.state.rectrip}
          onUpdateLike = {(event) => this.handleUpdateLike(event)}
          AddFav = {(event) => this.handleAddFav(event)}
          UpdateView = {(event) => this.handleUpdateView(event)}
          SeeDetails = {(event) => this.SeeDetails(event)}
          username = {this.state.username}
          />
        )
      }
    }

    HomeContainer.contextTypes = {
      router: React.PropTypes.object.isRequired
    }

export default HomeContainer
