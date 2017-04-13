import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from '../styles'
import StepFour from '../components/StepFour'

class StepFourContainer extends Component {

  constructor () {
    super()
    this.state = {
      numstep: 4,
      name: '',
      privacy: 'public'
    }
  }

  componentWillMount() {
    this.setState({
      origin: this.props.location.state.origin,
      destination: this.props.location.state.destination,
      daytrip: this.props.location.state.daytrip,
      depart: this.props.location.state.depart,
      return: this.props.location.state.return
    })
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

  handleSubmitTrip(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/planning`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numstep: this.state.numstep,
        origin: this.state.origin,
        destination: this.state.destination,
        daytrip: this.state.daytrip,
        depart: this.state.depart,
        return: this.state.return,
        name: this.state.name,
        privacy: this.state.privacy
        })
      })
      this.context.router.push({
        pathname: '/mytrip'
      })
    }

  render() {
    return(
     <StepFour
     onSubmitTrip = {(event) => this.handleSubmitTrip(event)}
     onUpdateName = {(event) => this.handleUpdateName(event)}
     onUpdatePrivacy = {(event) => this.handleUpdatePrivacy(event)}
     depart = {this.state.depart}
     return = {this.state.return}
     origin = {this.state.origin}
     destination = {this.state.destination}
     daytrip = {this.state.daytrip}
     name = {this.state.name}
     privacy = {this.state.privacy}
     />
    )
  }
}

StepFourContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default StepFourContainer
