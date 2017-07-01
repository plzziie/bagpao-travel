import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_review extends Component {

  constructor () {
    super()
    this.state = {
      trip: '',
      creator: '',
      comment: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.DeleteComment = this.DeleteComment.bind(this);
  }

  componentDidMount() {
    fetch(`http://128.199.106.245:8999/reviews`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip: this.props.params.name
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
        this.setState({
            comment: myObj
        });
        console.log(myObj);
    }.bind(this))
  }

  DeleteComment(ev) {
    event.preventDefault();
    fetch(`http://128.199.106.245:8999/admin`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "delete",
        types: "reviews",
        name: this.props.params.name,
        comment: ev
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      location.replace('/admin_trip');
  })
  }

  render() {
    return (

<div className="container-fluid">
{/*   ------------------------head----------------      */}


                <table className="table">
                  <thead className="bar"><tr>
                    <th>User</th>
                    <th>Comments</th>
                    <th></th>
                  </tr></thead>


{/*   ------------------------body-----------------      */}

            <tbody>

              { this.state.comment.map((val, index) => {
               return <tr key = {index}><td>{val.user}</td><td>{val.comment}</td>
               <td><button type="button" className="btn btn-xs btn-danger">
                 <span className="glyphicon glyphicon-trash" aria-hidden="true" onClick={() => this.DeleteComment(val.comment)}></span>
               </button>
             </td></tr>


              })}
            </tbody>
          </table>

          {/*onClick={() => this.DeleteTrip(val.name)}*/}

        </div>

      )
    }
  }

  Admin_review.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

export default Admin_review
