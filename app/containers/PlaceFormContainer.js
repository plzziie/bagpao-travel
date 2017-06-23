import React, {Component} from 'react'
import PlaceForm from '../components/PlaceForm'

class PlaceFormContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      show: [],
      center: {lat: 0, lng: 0},
      zoom: 16
    }
  }

  componentDidMount() {
    fetch(`http://128.199.106.245:8999/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "detailplace",
        name: this.props.params.id
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            show: myObj,
            center: {lat: myObj[0].latitude, lng: myObj[0].longitude}
        });
      }
    }.bind(this))
  }

  render() {
    return(
     <PlaceForm
      show = {this.state.show}
      center = {this.state.center}
      zoom = {this.state.zoom}
      />
    )
  }
}

PlaceFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PlaceFormContainer
