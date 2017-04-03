import React, {Component} from 'react'
import styles from '../styles'
import Trips from '../components/Trips'

class TripsContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      trips: []
    }
  }

  handleUpdateUser(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/trips`, {
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
      if (myObj.message == 'cannot found this trip') {
        document.getElementById('test').innerHTML = myObj.message;
      }
      else {
        this.setState({
            trips: myObj
        })

      }
    }.bind(this))
  }


  render() {
    return(
     <Trips
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateUser={(event) => this.handleUpdateUser(event)}
      header = {this.props.route.header}
      name = {this.state.name}
      trips = {this.state.trips}
      />
    )
  }
}

TripsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripsContainer
