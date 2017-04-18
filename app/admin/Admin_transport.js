import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_transport extends Component {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }

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
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
    this.DeleteTransport = this.DeleteTransport.bind(this);
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
        types: "trans"
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
        this.setState({
            transportation: myObj.message
        });
        console.log(this.state.transportation);
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

  handleSubmitNew(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/admin`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "add",
        types: "trans",
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
  })
}

DeleteTransport(ev) {
  event.preventDefault();
  fetch(`http://localhost:1200/admin`, {
      method: 'POST',
      headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      admin: "delete",
      types: "trans",
      id: ev
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
    return (

      <div className="container-fluid">
      {/*   ------------------------head----------------      */}
      <div className="searchgap">


                      <button type="button" className="roundbutton btn btn-danger" data-toggle="collapse" data-target="#demo">+</button>

                    <div id="demo" className="collapse">
                      <h2>Add new transportation</h2>
                      <form className="form-inline" onSubmit = {this.handleSubmitNew}>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Type" onChange = {this.handleUpdateType}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Route" onChange = {this.handleUpdateRoute}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name" onChange = {this.handleUpdateName}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Origin" onChange = {this.handleUpdateOrigin}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="From" onChange = {this.handleUpdateStart}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Depart" onChange = {this.handleUpdateDepart}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Destination" onChange = {this.handleUpdateDestination}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="To" onChange = {this.handleUpdateStop}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Arrive" onChange = {this.handleUpdateArrive}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Price" onChange = {this.handleUpdatePrice}/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                      </form>
                    </div>

      </div>

              <div className="container bartran">

                  <table className="table">
                    <thead className="bar"><tr>
                      <th>Type</th>
                      <th>Route</th>
                      <th>Name</th>
                      <th>Origin</th>
                      <th>From</th>
                      <th>Depart</th>
                      <th>Destination</th>
                      <th>To</th>
                      <th>Arrive</th>
                      <th>Price</th>
                      <th></th>
                    </tr></thead>

      {/*   ------------------------body-----------------*/}

                    <tbody>
                    { this.state.transportation.map((val, index) => {
                     return <tr key ={index}>
                         <td>{val.type}</td><td>{val.route}</td><td>{val.name}</td><td>{val.origin}</td><td>{val.stationstart}</td>
                         <td>{val.depart}</td><td>{val.destination}</td><td>{val.stationend}</td><td>{val.arrive}</td><td>{val.price}</td>
                         <td>
                           <a href="#"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
                             <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                           </button></a>&nbsp;
                           <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal">
                             <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                           </button>
                         </td>
                       </tr>
                 })}

                    </tbody>
                  </table>
              </div>

{/*onClick={() => this.DeleteTransport(val._id)}*/}
      {/*   ------------------Pop Up----------------*/}
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">

                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Delete Transport</h4>
                          </div>
                          <div className="modal-body">
                            Are you sure you want to delete this transportation?
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                          </div>
                        </div>
                  </div>
                  </div>
                </div>

      )
    }
  }

export default Admin_transport
