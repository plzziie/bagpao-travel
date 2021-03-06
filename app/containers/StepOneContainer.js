import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepOne from '../components/StepOne'

class StepOneContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 1,
      origin: '',
      destination: '',
      daytrip: '',
      transportation: []
    }
  }

  handleUpdateOrigin(event) {
    this.setState({
      origin: event.target.value
    });
  }

  handleUpdateDestination(event) {
    this.setState({
      destination: event.target.value
    });
  }

  handleUpdateDaytrip(event) {
    this.setState({
      daytrip: event.target.value
    });
  }

  handleSubmitTrip(event) {
    event.preventDefault();
    fetch(`http://128.199.106.245:8999/planning`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: this.state.origin,
        destination: this.state.destination,
        numstep: this.state.numstep
        })
      }).then(function (response) {
        return response.text()
      }).then(function (body) {
        var myObj = JSON.parse(body);
        if (myObj.message === undefined) {
          this.setState({
              transportation: myObj
          });
          this.context.router.push({
            pathname: '/steptwo',
            state: {
              origin: this.state.origin,
              destination: this.state.destination,
              daytrip: this.state.daytrip,
              transportation: this.state.transportation
          }
        })
      }
    }.bind(this))
  }

  render() {
    return(
     <StepOne
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateOrigin = {(event) => this.handleUpdateOrigin(event)}
     onUpdateDestination = {(event) => this.handleUpdateDestination(event)}
     onUpdateDaytrip = {(event) => this.handleUpdateDaytrip(event)}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     transportation = {this.state.transportation}
     />
    )
  }
}

StepOneContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepOneContainer
