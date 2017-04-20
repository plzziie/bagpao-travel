import React, {Component} from 'react'
import styles from '../styles'
import Home from '../components/Home'

class HomeContainer extends Component {

  constructor () {
    super()
    this.state = {
      do: 'th',
      poptrip: [],
      popplace: [],
      name: ''
    }

  }

  componentDidMount() {
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

  SeeTripsDetails(id) {
    this.context.router.push('/trips-details/'+ id)
  }

  SeeDetails(id) {
    this.context.router.push('/places-details/'+ id)
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
          <Home
          SeeTripsDetails = {(event) => this.SeeTripsDetails(event)}
          SeeDetails = {(event) => this.SeeDetails(event)}
          poptrip = {this.state.poptrip}
          popplace = {this.state.popplace}
          onUpdateLike= {(event) => this.handleUpdateLike(event)}
          />
        )
      }
    }

    HomeContainer.contextTypes = {
      router: React.PropTypes.object.isRequired
    }

export default HomeContainer
