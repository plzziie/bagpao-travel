import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepTwo from '../components/StepTwo'

class StepTwoContainer extends Component {

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
      tst: []
    }
  }

/*  componentDidMount() {
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
      //console.log(myObj)
      /*var tst = myObj.map(function(transport) {
        return (
          transport
        );
      })
      console.log(tst)
      this.setState ({
        tst: myObj
      })
      console.log(this.state.tst)
    }.bind(this))
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
      else {
        console.log(myObj.message)
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
        tst: this.state.tst
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
     tst = {this.state.tst}
     />
    )
  }
}

StepTwoContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepTwoContainer
