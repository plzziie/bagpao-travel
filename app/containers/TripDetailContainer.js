import React, {Component} from 'react'
import TripDetail from '../components/TripDetail'

class TripDetailContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      show: [],
      comment: '',
      daytrip: ''
    }
  }

  componentDidMount() {
    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "showdetailtrip",
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
            daytrip: myObj[0].daytrip,
            name: myObj[0].name,
            picture: myObj[0].picture
        });
      }
      else {
        console.log(myObj.message);
      }
    }.bind(this))
  }



  render() {
    return(
     <TripDetail
     show = {this.state.show}
     daytrip = {this.state.daytrip}
     name = {this.state.name}
     picture = {this.state.picture}
     />
    )
  }
}

TripDetailContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripDetailContainer
