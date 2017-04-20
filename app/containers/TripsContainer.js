import React, {Component} from 'react'
import styles from '../styles'
import Trips from '../components/Trips'

class TripsContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      trips: [],
      show: [],
      searching: false,
      found: '',
      err: '',
      sort: true
    }
  }

  componentDidMount() {
    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "tp"
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
    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: event.target.value
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            show: myObj,
            sort: !this.state.sort
        });
      }
    }.bind(this))
  }

  SeeDetails(id) {
    this.context.router.push('/trips-details/'+ id)
  }

  handleUpdateSearch(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/trips`, {
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
            trips: myObj,
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


  render() {
    return(
     <Trips
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateSearch={(event) => this.handleUpdateSearch(event)}
      ChangeSort={(event) => this.ChangeSort(event)}
      SeeDetails={(event) => this.SeeDetails(event)}
      header = {this.props.route.header}
      name = {this.state.name}
      trips = {this.state.trips}
      show = {this.state.show}
      searching = {this.state.searching}
      found = {this.state.found}
      err = {this.state.err}
      sort = {this.state.sort}
      />
    )
  }
}

TripsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripsContainer
