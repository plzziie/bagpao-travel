import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import CreatePlan from '../components/CreatePlan'

class CreatePlanContainer extends Component {

  constructor () {
    super()
    this.state = {
      origin: '',
      destination: '',
      daytrip: ''
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
    this.context.router.push({
      pathname: '/steptwo',
      state: {
        origin: this.state.origin,
        destination: this.state.destination,
        daytrip: this.state.daytrip
      }
    })
  }

  render() {
    return(
     <CreatePlan
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateOrigin = {(event) => this.handleUpdateOrigin(event)}
     onUpdateDestination = {(event) => this.handleUpdateDestination(event)}
     onUpdateDaytrip = {(event) => this.handleUpdateDaytrip(event)}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     />
    )
  }
}

CreatePlanContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CreatePlanContainer
