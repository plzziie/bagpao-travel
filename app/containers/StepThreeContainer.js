import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepThree from '../components/StepThree'

class StepThreeContainer extends Component {

  constructor () {
    super()
    this.state = {
      vehicles: '',
      id: '',
      origin: '',
      depart: '',
      destination: '',
      arrive: '',
      price: ''
    }
  }

  /*componentDidMount() {
    fetch(`http://localhost:1200/transportation`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: this.props.location.state.origin,
        destination: this.props.location.state.destination
        })
    }).then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        for(var i = 0; i < myObj.length; i++) {
          this.setState({
            vehicles: myObj[i].vehicles,
            id: myObj[i].id,
            depart: myObj[i].depart,
            arrive: myObj[i].arrive,
            price: myObj[i].price,
            origin: myObj[i].origin,
            destination: myObj[i].destination,
            daytrip: this.props.location.state.daytrip
          });
        }
      }
    }.bind(this))
          var result_obj = {
            vehicles: this.state.vehicles,
            id: this.state.id,
            origin: this.state.origin,
            depart: this.state.depart,
            destination: this.state.destination,
            arrive: this.state.arrive,
            price: this.state.price
          }
          arrr[i] = result_obj;
        }
        console.log(arrr);
      }
    }.bind(this))
  }*/

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
     depart = {this.state.depart}
     arrive = {this.state.arrive}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     vehicles = {this.state.vehicles}
     id = {this.state.id}
     price = {this.state.price}
     />
    )
  }
}

StepThreeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepThreeContainer
