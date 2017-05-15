import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {getIdToken} from '../lib/AuthService';
import styles from '../styles'
import StepFour from '../components/StepFour'

class StepFourContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 4,
      name: '',
      privacy: 'public',
      details: []
    }
  }

  componentWillMount() {
    this.setState({
      origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip,
      depart: this.props.location.state.depart,
      return: this.props.location.state.return,
      result: this.props.location.state.result,
      prices: this.props.location.state.prices
    })
  }

  componentDidMount() {
    fetch(`http://localhost:1200/getplaces`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        place: this.state.result
        })
      }).then(function (response) {
        return response.text()
      }).then(function (body) {
        var myObj = JSON.parse(body);
        if (myObj.message === undefined) {
          this.state.details = myObj.sort(function (a, b) {
            return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time);
          });
          this.setState({
            details: myObj
          })
      }
      else {
        console.log(myObj.message);
      };
    }.bind(this))
  }

  handleUpdateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleUpdatePrivacy(event) {
    this.setState({
      privacy: event.target.value
    });
  }

  handleUpdatePicture(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (upload) => {
      this.setState({
        picture: upload.target.result
      });
      var output = document.getElementById('output');
      output.src = this.state.picture;
    }
    reader.readAsDataURL(file)
  }

  handleSubmitTrip(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/planning`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numstep: 4,
        username: getIdToken(),
        numstep: this.state.numstep,
        origin: this.state.origin,
        destination: this.state.destination,
        daytrip: this.state.daytrip,
        depart: this.state.depart,
        return: this.state.return,
        name: this.state.name,
        privacy: this.state.privacy,
        place: this.state.details,
        picture: this.state.picture,
        prices: this.state.prices
        })
      })
      this.context.router.push({
        pathname: '/profile'
      })
    }

  render() {
    return(
     <StepFour
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateName = {(event) => this.handleUpdateName(event)}
     onUpdatePrivacy = {(event) => this.handleUpdatePrivacy(event)}
     onUpdatePicture={(event) => this.handleUpdatePicture(event)}
     depart = {this.state.depart}
     return = {this.state.return}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     name = {this.state.name}
     privacy = {this.state.privacy}
     result = {this.state.result}
     details = {this.state.details}
     prices = {this.state.prices}
     />
    )
  }
}

StepFourContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepFourContainer
