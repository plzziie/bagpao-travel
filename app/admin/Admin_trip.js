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

  EditTrip(ev) {
    event.preventDefault();
    window.open("/editplace");
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
  }).then(function (body) {
    location.replace('/admin_trip');
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


            <div className="container-fluid">

                <table className="table">
                  <thead className="bar"><tr>
                    <th>Trip name</th>
                    <th></th>

                  </tr></thead>


{/*   ------------------------body-----------------      */}

            <tbody>

              { this.state.trips.map((val, index) => {
               return <tr key = {index}><td>{val.name}</td>
               <td><button type="button" className="btn btn-xs btn-info">
                 <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
               </button>&nbsp;
               <button type="button" className="btn btn-xs btn-danger">
                 <span className="glyphicon glyphicon-trash" aria-hidden="true" onClick={() => this.DeleteTrip(val.name)}></span>
               </button>
             </td></tr>


              })}
            </tbody>
          </table>

          {/*onClick={() => this.DeleteTrip(val.name)}*/}
        </div>
        </div>

      )
    }
  }

export default Admin_trip
