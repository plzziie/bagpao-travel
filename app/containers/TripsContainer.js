import React, {Component} from 'react'
import styles from '../styles'
import Trips from '../components/Trips'

class TripsContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  handleUpdateUser(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    var name = this.state.name;

    fetch(`http://localhost:1200/places`, {
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
      document.getElementById('test').innerHTML = myObj.message;
    })
  }


  render() {
    return(
     <Trips
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateUser={(event) => this.handleUpdateUser(event)}
      header = {this.props.route.header}
      username = {this.state.username}
      />
    )
  }
}

TripsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripsContainer;
