import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_transport extends Component {
  render() {
    return (

      <div className="container-fluid">
      {/*   ------------------------head----------------      */}
      <div className="searchgap">
                  <div className="col-md-9">
                    <input  className = "form-control" placeholder = 'Name' type = 'text' />
                  </div>

                    <button type="button" className="btn btn-info">Search</button>&nbsp;
                      <button type="button" className="roundbutton btn btn-danger" data-toggle="collapse" data-target="#demo">+</button>
                    <div id="demo" className="collapse">
                      <h2>Add new transportation</h2>
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Type"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Route"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Origin"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="From"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Depart"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Destination"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="To"/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Arrive"/>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Price"/>
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
                  <tr>
                      <td>Bus</td><td>Northen</td><td>283</td><td>Chiangmai</td><td>Chiangmai</td>
                      <td>22:30</td><td>Bangkok</td><td>Mochit</td><td>7:30</td><td>900</td>
                      <td>
                        <a href="#"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
                          <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                        </button></a>&nbsp;
                        <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal">
                          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Train</td><td>Northen</td><td>273</td><td>Chiangmai</td><td>Chiangmai</td>
                      <td>22:30</td><td>Bangkok</td><td>Mochit</td><td>7:30</td><td>900</td>
                      <td>
                        <a href="#"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
                          <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                        </button></a>&nbsp;
                        <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal">
                          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
              </div>


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
