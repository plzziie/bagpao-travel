import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepOne from '../components/StepOne'

class StepOneContainer extends Component {

  constructor () {
    super()
    this.state = {
      vehicles: '',
      id: '',
      origin: '',
      depart: '',
      destination: '',
      arrive: '',
      price: '',
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
    /*fetch(`http://localhost:1200/transportation`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: this.state.origin,
        destination: this.state.destination
        })
    }).then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        var arrr = []
        var tname = ''
        var by = ''

        for(var i = 0; i < myObj.length; i++) {
          this.setState({
            vehicles: myObj[i].vehicles,
            id: myObj[i].id,
            depart: myObj[i].depart,
            arrive: myObj[i].arrive,
            price: myObj[i].price
          });
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

        this.context.router.push({
          pathname: '/steptwo',
          state: {
            arrr: this.state.arrr
          }
        })
      }
    }.bind(this))*/
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
     />
    )
  }
}

StepOneContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepOneContainer
