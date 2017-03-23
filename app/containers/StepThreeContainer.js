import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepThree from '../components/StepThree'

class StepThreeContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 3,
      search: '',
      fromsearch: ''
    }
  }

  componentWillMount() {
    this.setState({
      origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip,
      transportation: this.props.location.state.transportation,
      vehiclesD: this.props.location.state.vehiclesD,
      vehiclesR: this.props.location.state.vehiclesR,
      depart: this.props.location.state.depart,
      return: this.props.location.state.return,
      price: this.props.location.state.price
    })
  }

  handleUpdateSearch(event) {
    this.setState({
      search: event.target.value
    });

    fetch(`http://localhost:1200/planning`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numstep: this.state.numstep,
        search: this.state.search
        })
      }).then(function (response) {
        return response.text()
      }).then(function (body) {
        var myObj = JSON.parse(body);
        if (myObj.message === undefined) {
          this.setState({
              fromsearch: myObj
          });
      }
    }.bind(this))
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
      pathname: '/stepfour',
      state: {
        daytrip: this.state.daytrip,
        vehicles: this.state.vehicles,
        id: this.state.id,
        origin: this.state.origin,
        depart: this.state.depart,
        destination: this.state.destination,
        arrive: this.state.arrive,
        price: this.state.price
      }
    })
  }

  render() {
    return(
     <StepThree
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateDeparture = {(event) => this.handleUpdateDeparture(event)}
     onUpdateReturn = {(event) => this.handleUpdateReturn(event)}
     onUpdateSearch = {(event) => this.handleUpdateSearch(event)}
     depart = {this.state.depart}
     arrive = {this.state.arrive}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     vehicles = {this.state.vehicles}
     id = {this.state.id}
     price = {this.state.price}
     fromsearch = {this.state.fromsearch}
     />
    )
  }
}

StepThreeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepThreeContainer
