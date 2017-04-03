import React, {Component} from 'react'
import styles from '../styles'
import Places from '../components/Places'

class PlacesContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      places: []
    }
  }

  handleUpdateUser(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/places`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message == 'cannot found this place') {
        document.getElementById('test').innerHTML = myObj.message;
      }
      else {
        this.setState({
            places: myObj
        })

      }
    }.bind(this))
  }


  render() {
    return(
     <Places
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateUser={(event) => this.handleUpdateUser(event)}
      header = {this.props.route.header}
      name = {this.state.name}
      places = {this.state.places}
      />
    )
  }
}

PlacesContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PlacesContainer
