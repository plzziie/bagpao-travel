import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_trip extends Component {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }

  constructor () {
    super()
    this.state = {
      name: '',
      err: '',
      trips: []
    }
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.DeleteTrip = this.DeleteTrip.bind(this);
  }

  handleUpdateSearch(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmitSearch(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/show`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "detailtrip",
        name: this.state.name
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            trips: myObj
        })
      }
      else {
        this.setState({
            err: myObj.message
        })
      }
    }.bind(this))
  }

  DeleteTrip(ev) {
    event.preventDefault();
    fetch(`http://localhost:1200/admin`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "delete",
        types: "trip",
        name: ev
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
<form onSubmit = {this.handleSubmitSearch}>
<div className="searchgap">
            <div className="col-md-9">
              <input  className = "form-control" placeholder = 'Search Trip' type = 'text' onChange = {this.handleUpdateSearch} />
            </div>
              <button type="submit" className="btn btn-info">Search</button>
</div>
</form>
            <div  className="container-fluid bar">
                    <div className="col-md-12">Trip Name</div>
            </div>

{/*   ------------------------body-----------------      */}

{ this.state.trips.map((val, index) => {
 return <div key = {index}><h4 className="fontsize"><div className="col-md-10">{val.name}</div>&nbsp;&nbsp;
 <a href="/trips-details" target="_blank"><button type="button" className="btn btn-xs btn-info">
   <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
 </button></a>&nbsp;
 <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal">
   <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
 </button></h4>
 <div className ="underline">
</div></div>
})}

{/*onClick={() => this.DeleteTrip(val.name)}*/}
{/*   ------------------Pop Up----------------      */}
              <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Delete Trip</h4>
                    </div>
                    <div className="modal-body">
                      Are you sure you want to delete this trip?
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

export default Admin_trip
