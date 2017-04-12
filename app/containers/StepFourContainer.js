import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepFour from '../components/StepFour'

class StepFourContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 4
    }
  }

  componentDidMount() {
    this.setState({
    /*  origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip,
      transportation: this.props.location.state.transportation,
      vehiclesD: this.props.location.state.vehiclesD,
      vehiclesR: this.props.location.state.vehiclesR,
      depart: this.props.location.state.depart,
      return: this.props.location.state.return,*/
      data: this.props.location.state.data
    })
  }

  render() {
    return(
     <StepFour /*
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateDeparture = {(event) => this.handleUpdateDeparture(event)}
     onUpdateReturn = {(event) => this.handleUpdateReturn(event)}
     onUpdateSearch = {(event) => this.handleUpdateSearch(event)}
     onUpdatePlaces = {(event) => this.handleUpdatePlaces(event)}
     depart = {this.state.depart}
     return = {this.state.return}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     vehicles = {this.state.vehicles}
     id = {this.state.id}
     price = {this.state.price}
     fromsearch = {this.state.fromsearch}
     search = {this.state.search}
     places = {this.state.places}
     placess = {this.state.placess}*/
     data = {this.state.data}
     />
    )
  }
}

StepFourContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepFourContainer
