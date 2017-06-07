import React, {Component} from 'react'
import styles from '../styles'
import Place from '../components/Place'

class PlaceContainer extends Component {

  constructor () {
    super()
    this.state = {
      show: []
    }
  }

  componentDidMount() {
    fetch(`http://128.199.106.245/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "pc",
        category: this.props.params.type
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
  handleUpdateView(view) {
  fetch(`http://128.199.106.245/view`, {
  method: 'POST',
  headers:{
  'Content-Type': 'application/json'
},
  body: JSON.stringify({
    name: view
  })
})
}

  SeeDetails(id) {
    this.context.router.push('/places-details/'+ id)
  }

  render() {
    return(
     <Place
      SeeDetails = {(event) => this.SeeDetails(event)}
      header = {this.props.route.header}
      show = {this.state.show}
      UpdateView = {(event) => this.handleUpdateView(event)}
      />
    )
  }
}

PlaceContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PlaceContainer
