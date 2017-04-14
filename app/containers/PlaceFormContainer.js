import React, {Component} from 'react'
import PlaceForm from '../components/PlaceForm'

class PlaceFormContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      show: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:1200/places`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.props.params.chse
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            show: myObj
        });
      }
    }.bind(this))
  }

  render() {
    return(
     <PlaceForm
      show = {this.state.show}
      />
    )
  }
}

PlaceFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PlaceFormContainer
