import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'

class Admin_edittransport extends Component {

  constructor () {
    super()
    this.state = {
      type: '',
      route: '',
      name: '',
      origin: '',
      stationstart: '',
      depart: '',
      destination: '',
      stationend: '',
      arrive: '',
      price: '',
      transportation: []
    }

    this.handleUpdateType = this.handleUpdateType.bind(this);
    this.handleUpdateRoute = this.handleUpdateRoute.bind(this);
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleUpdateOrigin = this.handleUpdateOrigin.bind(this);
    this.handleUpdateDestination = this.handleUpdateDestination.bind(this);
    this.handleUpdateStart = this.handleUpdateStart.bind(this);
    this.handleUpdateStop = this.handleUpdateStop.bind(this);
    this.handleUpdateDepart = this.handleUpdateDepart.bind(this);
    this.handleUpdateArrive = this.handleUpdateArrive.bind(this);
    this.handleUpdatePrice = this.handleUpdatePrice.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
    fetch(`http://localhost:1200/admin`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "show",
        types: "transport",
        id: this.props.params.id
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      this.setState({
          transportation: myObj.message
      });
    }.bind(this))
    .then(function (set) {
      this.setState({
        type: this.state.transportation[0].type,
        route: this.state.transportation[0].route,
        name: this.state.transportation[0].name,
        origin: this.state.transportation[0].origin,
        stationstart: this.state.transportation[0].stationstart,
        depart: this.state.transportation[0].depart,
        destination: this.state.transportation[0].stationstart,
        stationend: this.state.transportation[0].stationend,
        arrive: this.state.transportation[0].arrive,
        price: this.state.transportation[0].price,
      });
    }.bind(this))
  }


  handleUpdateType(event) {
    this.setState({
      type: event.target.value
    });
  }
  handleUpdateRoute(event) {
    this.setState({
      route: event.target.value
    });
  }
  handleUpdateName(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleUpdateOrigin(event) {
    this.setState({
      origin: event.target.value
    });
  }
  handleUpdateDestination(event) {
    this.setState({
      destination: event.target.value
    });
  }
  handleUpdateStart(event) {
    this.setState({
      stationstart: event.target.value
    });
  }
  handleUpdateStop(event) {
    this.setState({
      stationend: event.target.value
    });
  }
  handleUpdateDepart(event) {
    this.setState({
      depart: event.target.value
    });
  }
  handleUpdateArrive(event) {
    this.setState({
      arrive: event.target.value
    });
  }
  handleUpdatePrice(event) {
    this.setState({
      price: event.target.value
    });
  }

  handleSubmitEdit(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/admin`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "update",
        types: "trans",
        id: this.props.params.id,
        type: this.state.type,
        route: this.state.route,
        name: this.state.name,
        origin: this.state.origin,
        destination: this.state.destination,
        stationstart: this.state.stationstart,
        stationend: this.state.stationend,
        depart: this.state.depart,
        arrive: this.state.arrive,
        price: this.state.price
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      console.log(myObj);
      location.replace('/Admin_transport');
  })
}

  render() {
    console.log(this.props);
    return (

      <div className = "container-fluid">
        <h2>Edit Transportation</h2>
        { this.state.transportation.map((val, index) => {
         return <form onSubmit = {this.handleSubmitEdit} key={index}>

        <div className="col-md-12"><label>Type</label>
          <input type = "text" className = "col-md-3 form-control" defaultValue = {val.type} onChange = {this.handleUpdateType} /></div>
        <div className="col-md-12"><label>Route</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.route} onChange = {this.handleUpdateRoute} /></div>
        <div className="col-md-12"><label>Name</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.name}  onChange = {this.handleUpdateName} /></div>
        <div className="col-md-12"><label>Origin</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.origin} onChange = {this.handleUpdateOrigin} /></div>
        <div className="col-md-12"><label>Destination</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.destination} onChange = {this.handleUpdateDestination} /></div>
        <div className="col-md-12"><label>From</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.stationstart} onChange = {this.handleUpdateStart} /></div>
        <div className="col-md-12"><label>To</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.stationend} onChange = {this.handleUpdateStop} /></div>
        <div className="col-md-12"><label>Depart</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.depart} onChange = {this.handleUpdateDepart} /></div>
        <div className="col-md-12"><label>Arrive</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.arrive} onChange = {this.handleUpdateArrive} /></div>
        <div className="col-md-12"><label>Price</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.price} onChange = {this.handleUpdatePrice} /></div>

        <div className="col-md-3"><button type="submit" className = "btn btn-block btn-success"  type = "submit" style={styles.space}>Save</button></div>

          </form> })}
    </div>

  )
}
}

Admin_edittransport.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Admin_edittransport
