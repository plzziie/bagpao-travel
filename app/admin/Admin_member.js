import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_member extends Component {

  constructor () {
    super()
    this.state = {
      username: '',
      err: '',
      profile: []
    }
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.EditMember = this.EditMember.bind(this);
    this.DeleteMember = this.DeleteMember.bind(this);
  }

  handleUpdateSearch(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmitSearch(event) {
    event.preventDefault();
    fetch(`http://128.199.106.245:8999/show`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "mem",
        username: this.state.username
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            profile: myObj
        })
      }
      else {
        this.setState({
            err: myObj.message
        })
      }
    }.bind(this))
  }

  EditMember(ev) {
    event.preventDefault();
    this.context.router.push('/editmember/'+ev);
  }

  DeleteMember(ev) {
    event.preventDefault();
    fetch(`http://128.199.106.245:8999/admin`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "delete",
        types: "member",
        name: ev
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      window.location.reload()
  })
  }

  render() {
    return (

      <div className="container-fluid">
      {/*   ------------------------head----------------      */}
      <form onSubmit = {this.handleSubmitSearch}>
      <div className="searchgap">
        <div className="col-md-9">
          <input  className = "form-control" placeholder = 'Name' type = 'text' onChange = {this.handleUpdateSearch} />
        </div>
        <button type="submit" className="btn btn-info">Search</button>&nbsp;
      </div>
      </form>

      <div className="container-fluid">

          <table className="table">
            <thead className="bar"><tr>
              <th>Member</th>
              <th></th>
            </tr></thead>

      {/*   ------------------------body-----------------      */}

      <tbody>

      { this.state.profile.map((val, index) => {
       return <tr key = {index}><td>{val.username}</td>
       <td>
       <button type="button" className="btn btn-xs btn-info">
         <span className="glyphicon glyphicon-eye-open" aria-hidden="true"  onClick={() => this.EditMember(val.username)}></span>
       </button>&nbsp;
       <button type="button" className="btn btn-xs btn-danger" onClick={() => this.DeleteMember(val.username)}>
         <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
       </button></td></tr>

   })}

 </tbody>
</table>
      {/*onClick={() => this.DeleteMember(val.username)}*/}
   </div>
 </div>

      )
    }
  }

  Admin_member.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

export default Admin_member
