import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepHotel from '../components/StepHotel'

class StepHotelContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 2,
      search: '',
      found: true,
      showModal: false,
      tmr: '',
      places: [],
      place: [],
      result: [],
      test: [],
      dragn : [],
      temp: []
    }
  }

  componentWillMount() {
    this.setState({
      origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip,
      depart: this.props.location.state.depart,
      return: this.props.location.state.return,
      prices: this.props.location.state.prices,
      result: this.props.location.state.result
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
            places: myObj
          });
      }
  }.bind(this))
}

AllowDrop(event) {
    event.preventDefault();
    if (event.target.getAttribute("draggable") == "true")
      event.dataTransfer.dropEffect = "none";
    else
    event.dataTransfer.dropEffect = "all";
}

Drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

Drop(event) {
    event.preventDefault();
    var test = this.state.result
    var dragn = this.state.dragn
    var prices = []
    var placeid = event.dataTransfer.getData("text");
    var days = event.target.id
    event.target.appendChild(document.getElementById(placeid));

    prices = this.state.places.map(function(vals,indexs) {
      return (vals.placeid == placeid)
              ? vals.price
              : 0 })
    prices = prices.reduce(function(total, num){ return total + num }, 0);

    var x = test.map(function(val,index) {
      return (val.days == days)
              ? test.splice(index, 1)
              : null });

    if (days != 0) {
      this.state.test = test.concat({days,placeid})
      if (dragn.indexOf(days) == -1) {
        this.state.prices = this.state.prices+prices,
        dragn = dragn.concat(days)
        this.setState({
          showModal: false
        });
      }
      else {
        this.setState({
          showModal: true
        });
      }
    }
    else {
      this.state.test = test,
      dragn.splice(dragn.indexOf(days),1),
      this.state.prices = this.state.prices-prices
      this.setState({
        showModal: false
      });
    }

    this.setState({
      result: this.state.test,
      prices: this.state.prices,
      dragn: dragn
    });
}

  handleUpdateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleGetSearch(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/planning`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numstep: 3,
        name: this.state.search
        })
      }).then(function (response) {
        return response.text()
      }).then(function (body) {
        var myObj = JSON.parse(body);
        if (myObj.message === undefined) {
          this.setState({
            place: myObj,
            found: true
          });
        }
        else {
          this.setState({
            found: false
          });
        }
      }.bind(this))
    }

  handleSubmitTrip(event) {
    event.preventDefault()
    this.context.router.push({
      pathname: '/stepfive',
      state: {
        daytrip: this.state.daytrip,
        origin: this.state.origin,
        depart: this.state.depart,
        destination: this.state.destination,
        return: this.state.return,
        result: this.state.result,
        prices: this.state.prices
      }
    })
  }

  render() {
    return(
     <StepHotel
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateSearch = {(event) => this.handleUpdateSearch(event)}
     onGetSearch = {(event) => this.handleGetSearch(event)}
     AllowDrop = {(event) => this.AllowDrop(event)}
     Drop = {(event) => this.Drop(event)}
     Drag = {(event) => this.Drag(event)}
     open = {(event) => this.open(event)}
     close = {(event) => this.close()}
     depart = {this.state.depart}
     return = {this.state.return}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     search = {this.state.search}
     places = {this.state.places}
     place = {this.state.place}
     found = {this.state.found}
     test = {this.state.test}
     result = {this.state.result}
     prices = {this.state.prices}
     showModal = {this.state.showModal}
     temp = {this.state.temp}
     />
    )
  }
}

StepHotelContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepHotelContainer
