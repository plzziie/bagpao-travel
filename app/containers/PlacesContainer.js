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
      type: ''
    }
  }

  componentDidMount() {
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

  Test(event) {
    var type = this.state.type;
    this.setState({
      type: event.target.id
    });

    this.context.router.push('/')
  }

  handleCategories(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/show`, {
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
      if (myObj.message == 'cannot found this place') {
        document.getElementById('test').innerHTML = myObj.message;
      }
      else {
        this.setState({
            places: myObj,
            searching: true
        })
      }
    }.bind(this))
  }

  handleUpdateSearch(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/places`, {
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
      if (myObj.message == 'cannot found this place') {
        document.getElementById('test').innerHTML = myObj.message;
      }
      else {
        this.setState({
            places: myObj
        })
      }
    }.bind(this))
  }


  render() {
    return(
     <Places
      onSubmitUser={(event) => this.handleSubmitUser(event)}
      onUpdateSearch={(event) => this.handleUpdateSearch(event)}
      ChangeSort = {(event) => this.ChangeSort(event)}
      Test = {(event) => this.Test(event)}
      header = {this.props.route.header}
      name = {this.state.name}
      places = {this.state.places}
      show = {this.state.show}
      sort = {this.state.sort}
      searching = {this.state.searching}
      type = {this.state.type}
      />
    )
  }
}

PlacesContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default PlacesContainer
