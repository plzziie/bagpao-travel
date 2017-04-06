import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepThree from '../components/StepThreeee'

class StepThreeContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 2,
      search: '',
      fromsearch: '',
      places: [],
      placess: [],
      data: ''
    }
  }

  allowDrop(event) {
      event.preventDefault();
  }

  drag(event) {
      event.dataTransfer.setData("text", event.target.id);
  }

  drop(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("text");
      event.target.appendChild(document.getElementById(data));
  }


/*  generateId () {
    Math.floor(Math.random()*90000) + 10000;
  }

  handleNodeRemoval(nodeId) {
    var data = this.state.data;
    data = data.filter(function (el) {
      return el.id !== nodeId;
    });
    this.setState({
      data: this.state.data
    })
  }

  handleSubmit(task) {
		var data = this.state.data;
		var id = this.generateId().toString();
		var complete = 'false';
		data = data.concat([{id, task, complete}]);
		this.setState({
      data: this.state.data
    })
	}

	handleToggleComplete(nodeId) {
		var data = this.state.data;
		for (var i in data) {
			if (data[i].id == nodeId) {
				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({
      data: this.state.data
    })
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
      return: this.props.location.state.return
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

  handleUpdateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleUpdatePlaces(event) {
    const value = event.target.type === 'checkbox' ? event.target.value : null;
    var placess = this.state.placess
    this.setState({
      placess : value
    });
  }

  handleSubmitTrip(event) {
    event.preventDefault()
    this.context.router.push({
      pathname: '/stepfour',
      state: {
        daytrip: this.state.daytrip,
        vehiclesD: this.state.vehiclesD,
        vehiclesR: this.state.vehiclesR,
        origin: this.state.origin,
        depart: this.state.depart,
        destination: this.state.destination,
        return: this.state.return,
        placess: this.state.placess
      }
    })
  }*/

  render() {
    return(
     <StepThree
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateDeparture = {(event) => this.handleUpdateDeparture(event)}
     onUpdateReturn = {(event) => this.handleUpdateReturn(event)}
     onUpdateSearch = {(event) => this.handleUpdateSearch(event)}
     onUpdatePlaces = {(event) => this.handleUpdatePlaces(event)}
     allowDrop = {(event) => this.allowDrop(event)}
     drop = {(event) => this.drop(event)}
     drag = {(event) => this.drag(event)}
     depart = {this.state.depart}
     arrive = {this.state.arrive}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     vehicles = {this.state.vehicles}
     fromsearch = {this.state.fromsearch}
     search = {this.state.search}
     />
    )
  }
}

StepThreeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepThreeContainer
