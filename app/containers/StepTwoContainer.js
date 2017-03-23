import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepTwo from '../components/StepTwo'

class StepTwoContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 2,
      vehiclesD: '',
      vehiclesR: '',
      depart: '',
      return: '',
      price: ''
    }
  }
  componentWillMount(){
    this.setState({
      origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip,
      transportation: this.props.location.state.transportation
    })
  }

  handleUpdateVehiclesD(event) {
    this.setState({
      vehiclesD: event.target.value
    });
  }

  handleUpdateVehiclesR(event) {
    this.setState({
      vehiclesR: event.target.value
    });
  }

  handleUpdateDepart(event) {
    this.setState({
      depart: event.target.value
    });
  }

  handleUpdateReturn(event) {
    this.setState({
      return: event.target.value
    });
  }

  handleSubmitTrip(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/stepthree',
      state: {
        daytrip: this.state.daytrip,
        vehiclesD: this.state.vehiclesD,
        vehiclesR: this.state.vehiclesR,
        origin: this.state.origin,
        depart: this.state.depart,
        destination: this.state.destination,
        return: this.state.return,
        price: this.state.price
      }
    })
  }

  render() {
    return(
     <StepTwo
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateVehicles = {(event) => this.handleUpdateVehicles(event)}
     onUpdateDepart = {(event) => this.handleUpdateDepart(event)}
     onUpdateReturn = {(event) => this.handleUpdateReturn(event)}
     onUpdateVehiclesD = {(event) => this.handleUpdateVehiclesD(event)}
     onUpdateVehiclesR = {(event) => this.handleUpdateVehiclesR(event)}
     depart = {this.state.depart}
     return = {this.state.return}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     vehiclesD = {this.state.vehiclesD}
     vehiclesR = {this.state.vehiclesR}
     id = {this.state.id}
     price = {this.state.price}
     transportation = {this.state.transportation}
     />
    )
  }
}

StepTwoContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepTwoContainer
