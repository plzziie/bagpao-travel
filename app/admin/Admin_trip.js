import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_trip extends Component {
  render() {
    return (

<div className="container-fluid">
{/*   ------------------------head----------------      */}
<div className="searchgap">
            <div className="col-md-9">
              <input  className = "form-control" placeholder = 'Search Trip' type = 'text' />
            </div>
              <button type="button" className="btn btn-info">Search</button>
</div>

            <div  className="container-fluid bar">
                    <div className="col-md-12">Trip Name</div>
            </div>

{/*   ------------------------body-----------------      */}


              <h4 className="fontsize"><div className="col-md-10">Chiangmai Chalalala</div>&nbsp;&nbsp;
              <a href="/trips-details" target="_blank"><button type="button" className="btn btn-xs btn-info">
                <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
              </button></a>&nbsp;
              <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal">
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
              </button></h4>
              <div className ="underline">
            </div>

            <h4 className="fontsize"><div className="col-md-10">Chiangmai Chalalala</div>&nbsp;&nbsp;
            <a href="/trips-details" target="_blank"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
              <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
            </button></a>&nbsp;
            <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal">
              <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button></h4>
            <div className ="underline">
          </div>

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
