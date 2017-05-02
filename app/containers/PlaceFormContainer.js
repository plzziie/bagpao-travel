import React, {Component} from 'react'
import PlaceForm from '../components/PlaceForm'


class PlaceFormContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      show: [],
      map: [],
      lat: '',
      lng: '',
      place: ''
    }
  }

  
  componentDidMount() {
    fetch(`http://localhost:1200/show`, {
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
            place: myObj[0].name[0],
            lat: myObj[0].latitude,
            lng: myObj[0].longitude
        });
      }
    }.bind(this))
  }

  render() {
    return(
     <PlaceForm
      show = {this.state.show}
      place = {this.state.place}
      lat = {this.state.lat}
      lng = {this.state.lng}

      />
    )
  }
}

PlaceFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PlaceFormContainer
