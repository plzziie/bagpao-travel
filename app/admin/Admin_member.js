import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_member extends Component {

  contextTypes: {
    router: React.PropTypes.object.isRequired
  }

  constructor () {
    super()
    this.state = {
      username: '',
      err: '',
      profile: []
    }
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.DeleteMember = this.DeleteMember.bind(this);
  }

  handleUpdateSearch(event) {
    this.setState({
      username: event.target.value
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

  DeleteMember(ev) {
    event.preventDefault();
    fetch(`http://localhost:1200/admin`, {
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
          <input  className = "form-control" placeholder = 'Name' type = 'text' onChange = {this.handleUpdateSearch} />
        </div>
        <button type="submit" className="btn btn-info">Search</button>&nbsp;
      </div>
      </form>
      <div  className="container-fluid bar">
        <div className="col-md-6">Member Name</div>
      </div>

      {/*   ------------------------body-----------------      */}

      { this.state.profile.map((val, index) => {
       return <div key = {index}><h4><div className="col-md-10 fontsize">{val.username}</div>
       <a href="/mytrip" target="_blank"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
         <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
       </button></a>&nbsp;
       <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal" >
         <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
       </button></h4>
       <div className ="underline">
     </div></div>
   })}
{/*onClick={() => this.DeleteMember(val.username)}*/}
      {/*   ------------------Pop Up----------------      */}
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">

                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Delete Member</h4>
                          </div>
                          <div className="modal-body">
                            Are you sure you want to delete this member?
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

export default Admin_member
