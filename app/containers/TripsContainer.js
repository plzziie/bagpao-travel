import React, {Component} from 'react'
import styles from '../styles'
import Trips from '../components/Trips'

class TripsContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      message: [],
      creator: [],
      results: []
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
        for(var i = 0; i < myObj.length; i++) {
          this.setState({
            message: myObj[i].message,
            creator: myObj[i].by
          });
          results[i] = {message, creator}
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
      message = {this.state.message}
      creator = {this.state.creator}
      />
    )
  }
}

TripsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripsContainer;
