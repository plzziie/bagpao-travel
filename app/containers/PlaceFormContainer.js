import React, {Component} from 'react'
import PlaceForm from '../components/PlaceForm'

class PlaceFormContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      show: [],
      map: []
    }
  }

  componentWillMount() {
    fetch(`http://localhost:1200/apigeo/?lat=13.8056762&lng=100.6930041`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
        this.setState({
            map: myObj
        });
        console.log(this.state.map);
    }.bind(this))
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
