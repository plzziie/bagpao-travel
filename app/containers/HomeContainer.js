import React, {Component} from 'react'
import styles from '../styles'
import Home from '../components/Home'

class HomeContainer extends Component {

  constructor () {
    super()
    this.state = {
      do: 'tp',
      chse: '',
      poptrip: [],
      popplace: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: this.state.do
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            poptrip: myObj
        });
      }
    }.bind(this))

    fetch(`http://localhost:1200/show`, {
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
            popplace: myObj
        });
      }
    }.bind(this))
  }

  SeeDetails(event) {
    var chse = this.state.chse;
    this.setState({
      chse: event.target.id
    });
    this.context.router.push('/places-details/'+ this.state.chse)
  }

      render() {
        return(
          <Home
          SeeDetails = {(event) => this.SeeDetails(event)}
          poptrip = {this.state.poptrip}
          popplace = {this.state.popplace}
          />
        )
      }
    }

    HomeContainer.contextTypes = {
      router: React.PropTypes.object.isRequired
    }

export default HomeContainer
