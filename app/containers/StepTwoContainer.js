import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepTwo from '../components/StepTwo'

class StepTwoContainer extends Component {

  constructor () {
    super()
    this.state = {
      departure: '',
      retrn:'',
      origin:'',
      destination: '',
      daytrip:''
    }
  }

  componentDidMount() {
    this.setState ({
      origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip
    })
  }

  handleUpdateDeparture(event) {
    this.setState({
      departure: event.target.value
    });
  }

  handleUpdateReturn(event) {
    this.setState({
      retrn: event.target.value
    });
  }

  handleSubmitTrip(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/stepthree',
      state: {
        departure: this.state.departure,
        retrn: this.state.retrn,
        origin: this.state.origin,
        destination: this.state.destination,
        daytrip: this.state.daytrip
      }
    })
  }

  render() {
    return(
     <StepTwo
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateDeparture = {(event) => this.handleUpdateDeparture(event)}
     onUpdateReturn = {(event) => this.handleUpdateReturn(event)}
     departure = {this.state.departure}
     retrn = {this.state.retrn}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     />
    )
  }
}

StepTwoContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepTwoContainer
