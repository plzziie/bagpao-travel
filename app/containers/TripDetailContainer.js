import React, {Component} from 'react'
import TripDetail from '../components/TripDetail'
import {getIdToken} from '../lib/AuthService'

class TripDetailContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      show: [],
      showw: [],
      comment: '',
      daytrip: '',
      username: '',
      trip: ''
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
            picture: myObj[0].picture,
            prices: myObj[0].prices
        });
      }
      else {
        console.log(myObj.message);
      }
    }.bind(this))

    fetch(`http://localhost:1200/reviews`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip: this.props.params.id
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            showw: myObj
        });
      }
    }.bind(this))
  }

  handleUpdateReview(event) {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmitComment(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/addreviews`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip: this.props.params.id,
        comment: this.state.comment,
        username: getIdToken()
        })
    }).then(function (body) {
      location.replace('/trips');
    })
  }

  render() {
    return(
     <TripDetail
     show = {this.state.show}
     daytrip = {this.state.daytrip}
     name = {this.state.name}
     picture = {this.state.picture}
     prices = {this.state.prices}
     showw = {this.state.showw}
     onUpdateReview={(event) => this.handleUpdateReview(event)}
     onUpdateComment={(event) => this.handleSubmitComment(event)}
     />
    )
  }
}

TripDetailContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripDetailContainer
