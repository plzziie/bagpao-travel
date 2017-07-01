import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'

class Admin_edittrip extends Component {

  constructor () {
    super()
    this.state = {
      trip: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch(`http://128.199.106.245:8999/show`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "detailtrip",
        name: this.props.params.name
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            trip: myObj
        })
      }
      else {
        console.log("error");
      }
    }.bind(this))
  }

  render() {
    console.log(this.props);
    return (
      <div className = "container-fluid">
        <h2>View Trip</h2>
        { this.state.trip.map((val, index) => {
         return <form key={index}>
        <div className="col-md-12"><label>Name</label>
          <input type = "text" className = "col-md-3 form-control" defaultValue = {val.name} disabled/></div>
        <div className="col-md-12"><label>Creator</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.creator} disabled/></div>
        <div className="col-md-12"><label>Origin</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.origin}  disabled/></div>
        <div className="col-md-12"><label>Destination</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.destination} disabled/></div>
        <div className="col-md-12"><label>Destination</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.destination} disabled/></div>
        <div className="col-md-12"><label>How many days</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.daytrip} disabled/></div>
        <div className="col-md-12"><label>Privacy</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.privacy} disabled/></div>
        <div className="col-md-12"><label>Like</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.like} disabled/></div>
        <div className="col-md-12"><label>Datesubmit</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.datesubmit} disabled/></div>
        <div className="col-md-3"><a className="btn btn-success" href = "/admin_trip" style = {styles.gapp}>Back</a></div>
          </form> })}
      </div>
  )
}
}

Admin_edittrip.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Admin_edittrip
