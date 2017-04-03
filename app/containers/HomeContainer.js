import React, {Component} from 'react'
import styles from '../styles'
import Home from '../components/Home'

class HomeContainer extends Component {

      constructor () {
        super()
        this.state = {
          do: 'tp'
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
          console.log(myObj);
        })
      }

      render() {
        return(
          <Home
           />
        )
      }
    }

    HomeContainer.contextTypes = {
      router: React.PropTypes.object.isRequired
    }

export default HomeContainer
