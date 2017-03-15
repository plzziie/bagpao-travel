import React, {Component} from 'react'
import styles from '../styles'
import Trips from '../components/Trips'

class TripsContainer extends Component {

  constructor () {
    super()
    this.state = {
      name: '',
      message: [],
      creator: []
    }
  }

  handleUpdateUser(event) {
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
      if(myObj.message === 'cannot found this trip') {
        document.getElementById('test').innerHTML = myObj.message;
      }
      else {
        var arrr = []
        var tname = ''
        var by = ''

        for(var i = 0; i < myObj.length; i++) {
          this.setState({
            message: myObj[i].message,
            tname: myObj[i].name,
            creator: myObj[i].by
          });
          var result_obj = {
            tname: this.state.tname,
            by : this.state.creator
          }
          arrr[i] = result_obj;
        }
        console.log(arrr);
        document.getElementById('test').innerHTML = arrr[0].tname + '&nbsp; by &nbsp;' + arrr[0].by + '<br>' +
        arrr[1].tname + '&nbsp; by &nbsp;' + arrr[1].by + '<br>' + arrr[2].tname + '&nbsp; by &nbsp;' + arrr[2].by + '<br>';
      }
    }.bind(this))
  }


  render() {
    return(
     <Trips
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateUser={(event) => this.handleUpdateUser(event)}
      header = {this.props.route.header}
      name = {this.state.name}
      message = {this.state.message}
      creator = {this.state.creator}
      />
    )
  }
}

TripsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default TripsContainer;
