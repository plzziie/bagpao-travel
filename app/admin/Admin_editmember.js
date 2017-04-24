import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'

class Admin_editmember extends Component {

  constructor () {
    super()
    this.state = {
      member: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:1200/show`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "mem",
        username: this.props.params.username
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            member: myObj
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
        <h2>View Member</h2>
        { this.state.member.map((val, index) => {
         return <form key={index}>
        <div className="col-md-12"><label>Username</label>
          <input type = "text" className = "col-md-3 form-control" defaultValue = {val.username} disabled/></div>
        <div className="col-md-12"><label>Email</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.email} disabled/></div>
        <div className="col-md-12"><label>Birthday</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.birthday}  disabled/></div>
        <div className="col-md-12"><label>Current City</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.currentcity} disabled/></div>
        <div className="col-md-12"><label>Interest</label>
         { val.interest.map((vals, indexs) => {
        return <div key = {indexs}><input type = "text" className = "col-md-3 form-control" defaultValue = {vals} disabled/></div>
        })}</div>
        <div className = "col-md-12 form-group"><label>Bio</label>
          <textarea className = 'form-control' defaultValue = {val.bio} rows = '4' type='text' disabled/>
        </div>
        <div className="col-md-3"><a className="btn btn-success" href = "/admin_member">Back</a></div>
          </form> })}
      </div>
  )
}
}

Admin_editmember.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Admin_editmember
