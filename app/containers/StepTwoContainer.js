import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepTwo from '../components/StepTwo'

class StepTwoContainer extends Component {

  constructor () {
    super()
    this.state = {
      vehiclesD: '',
      vehiclesR: '',
      depart: '',
      return: '',
      prices: 0,
      dep: [],
      re: []
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
    var dep = []
    this.setState({
      depart: event.target.value
    });

    dep = this.state.transportation.map(function(val,index) {
      return (val.name == event.target.value)
              ? val.price
              : 0 })
    dep = dep.reduce(function(total, num){ return total + num }, 0);
    this.state.dep = dep
  }

  handleUpdateReturn(event) {
    var re = []
    this.setState({
      return: event.target.value
    });

    re = this.state.transportation.map(function(val,index) {
      return (val.name == event.target.value)
              ? val.price
              : 0 })
    re = re.reduce(function(total, num){ return total + num }, 0);
    this.state.re = re
  }

  handleSubmitTrip(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/stepthree',
      state: {
        daytrip: this.state.daytrip,
        origin: this.state.origin,
        depart: this.state.depart,
        destination: this.state.destination,
        return: this.state.return,
        prices: this.state.dep + this.state.re
      }
    })
  }

  render() {
    return(
     <StepTwo
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
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
     transportation = {this.state.transportation}
     prices = {this.state.prices}
     />
    )
  }
}

StepTwoContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepTwoContainer
