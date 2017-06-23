import React, {Component} from 'react'
import styles from '../styles'
import Places from '../components/Places'

class PlacesContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      places: [],
      show: [],
      sort: true,
      searching: false,
      type: '',
      err: '',
      found: ''
    }
  }

  componentDidMount() {
    fetch(`http://128.199.106.245:8999/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "pp"
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

  ChangeSort(event) {
    this.setState({
      sort: !this.state.sort
    });
  }

  ChangeCategories(type) {
    this.context.router.push('/places/'+ type)
  }

  SeeDetails(id) {
    this.context.router.push('/places-details/'+ id)
  }

  handleUpdateSearch(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    fetch(`http://128.199.106.245:8999/places`, {
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
      if (myObj.message === undefined) {
        this.setState({
            places: myObj,
            searching: true,
            found: true
        })
      }
      else {
        this.setState({
            err: myObj.message,
            searching: true,
            found: false
        })
      }
    }.bind(this))
  }
  handleUpdateView(view) {
  fetch(`http://128.199.106.245:8999/view`, {
  method: 'POST',
  headers:{
  'Content-Type': 'application/json'
},
  body: JSON.stringify({
    name: view
  })
})
}


  render() {
    return(
     <Places
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateSearch={(event) => this.handleUpdateSearch(event)}
      ChangeSort = {(event) => this.ChangeSort(event)}
      ChangeCategories = {(event) => this.ChangeCategories(event)}
      SeeDetails = {(event) => this.SeeDetails(event)}
      UpdateView = {(event) => this.handleUpdateView(event)}
      header = {this.props.route.header}
      name = {this.state.name}
      places = {this.state.places}
      show = {this.state.show}
      sort = {this.state.sort}
      searching = {this.state.searching}
      type = {this.state.type}
      err = {this.state.err}
      found = {this.state.found}
      />
    )
  }
}

PlacesContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PlacesContainer
