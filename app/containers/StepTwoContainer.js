import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepTwo from '../components/StepTwo'

class StepTwoContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 2,
      vehicles: '',
      id: '',
      depart: '',
      arrive: '',
      price: ''
    }
  }
  componentDidMount(){
    this.setState({
      origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip,
      transportation: this.props.location.state.transportation
    })

    this.state.transportation.map(function(t,k){
      console.log(t)
    })
  }

  handleUpdateDeparture(event) {
    this.setState({
      depart: event.target.value
    });
  }

  handleUpdateReturn(event) {
    this.setState({
      arrive: event.target.value
    });
  }

  handleSubmitTrip(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/stepthree',
      state: {
        daytrip: this.state.daytrip,
        vehicles: this.state.vehicles,
        id: this.state.id,
        origin: this.state.origin,
        depart: this.state.depart,
        destination: this.state.destination,
        arrive: this.state.arrive,
        price: this.state.price,
        transportation: this.state.transportation
      }
    })
  }

  render() {
    return(
     <StepTwo
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateDeparture = {(event) => this.handleUpdateDeparture(event)}
     onUpdateReturn = {(event) => this.handleUpdateReturn(event)}
     depart = {this.state.depart}
     arrive = {this.state.arrive}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     vehicles = {this.state.vehicles}
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
