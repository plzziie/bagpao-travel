import React, {Component} from 'react'
import styles from '../styles'
import Trips from '../components/Trips'
 
class TripsContainer extends Component {
  
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  handleUpdateUser(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });
  }

  render() {
    return(
     <Trips
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateUser={(event) => this.handleUpdateUser(event)}
      header = {this.props.route.header}
      username = {this.state.username}
      />
    )
  }
}

TripsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
 
export default TripsContainer;