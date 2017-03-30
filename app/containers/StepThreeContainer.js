import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepThree from '../components/StepThree'

class StepThreeContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 2,
      search: '',
      fromsearch: '',
      places: [],
      placess: []
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

  componentDidMount() {
    fetch(`http://localhost:1200/planning`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numstep: this.state.numstep,
        destination: this.state.destination
        })
      }).then(function (response) {
        return response.text()
      }).then(function (body) {
        var myObj = JSON.parse(body);
        if (myObj.message === undefined) {
          this.setState({
            places : myObj
          });
      }
  }.bind(this))
}

  handleUpdateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleUpdatePlaces(event) {
    const value = event.target.type === 'checkbox' ? event.target.value : null;
    var placess = this.state.placess
    this.setState({
      [placess] : value
    });
  }

  handleSubmitTrip(event) {
    event.preventDefault()
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
        price: this.state.price,
        placess: this.state.placess
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
     onUpdatePlaces = {(event) => this.handleUpdatePlaces(event)}
     depart = {this.state.depart}
     arrive = {this.state.arrive}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     vehicles = {this.state.vehicles}
     id = {this.state.id}
     price = {this.state.price}
     fromsearch = {this.state.fromsearch}
     search = {this.state.search}
     places = {this.state.places}
     placess = {this.state.placess}
     />
    )
  }
}

StepThreeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepThreeContainer
