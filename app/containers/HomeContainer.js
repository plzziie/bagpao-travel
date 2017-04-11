import React, {Component} from 'react'
import styles from '../styles'
import Home from '../components/Home'

class HomeContainer extends Component {

  constructor () {
    super()
    this.state = {
      do: 'tp',
      poptrip: []
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
  }

      render() {
        return(
          <Home
          poptrip = {this.state.poptrip}
           />
        )
      }
    }

    HomeContainer.contextTypes = {
      router: React.PropTypes.object.isRequired
    }

export default HomeContainer
