import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_place extends Component {
  render() {
    return (

      <div className="container-fluid">
      {/*   ------------------------head----------------      */}
      <div className="searchgap">
                  <div className="col-md-9">
                    <input  className = "form-control" placeholder = 'Place/City' type = 'text' />
                  </div>
                    <button type="button" className="btn btn-info">Search</button>&nbsp;
                    <button type="button" className="roundbutton btn btn-danger" data-toggle="collapse" data-target="#demo">+</button>

                    <div id="demo" className="collapse">

                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Place name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Place name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Place name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Place name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Place name"/></div>

                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City name"/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City name"/></div>

                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Latitude"/></div>
                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Longitude"/></div>
                      <div className="col-md-5 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Picture"/></div>

                      <div className = "col-md-6 form-group">
                        <textarea
                          className = 'form-control' placeholder = 'Description' rows = '4'  type='text' />
                      </div>
                      <div className = "col-md-5 form-group">
                        <textarea className = 'form-control' placeholder = 'Description' rows = '2' type='text'/>
                      </div>
                      <div className="col-md-3"><button type="submit" className = "btn btn-block btn-success"  type = "submit">Submit</button></div>

                </div>
      </div>

      <div className="container bartrans">

          <table className="table">
            <thead className="bar"><tr>
              <th colSpan="5">Place Name</th>
              <th colSpan="5">City</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Picture</th>
              <th>Description</th>
              <th>Contact</th>
              <th></th>
            </tr></thead>

{/*   ------------------------body-----------------*/}

            <tbody>
            <tr>
              <td>Wat Phra Kaew</td><td>The Emerald Buddha Temple</td><td>Wat Phra Si Rattana Satsadaram</td><td>วัดพระศรีรัตนศาสดาราม</td><td>วัดพระแก้ว</td>
              <td>Bangkok</td><td>Phra Nakorn</td><td>กรุงเทพมหานคร</td><td>พระนคร</td><td></td>
              <td>13.751591</td><td>100.492658</td>
              <td>https://s3.amazonaws.com/gttwl/attachments/global/1408391264_large.jpeg</td>
              <td>Wat Phra Kaew (Thai: วัดพระแก้ว) is regarded as the most sacred Buddhist temple (wat) in Thailand. The Emerald Buddha housed in the temple is a potent religio-political symbol and the palladium (protective image) of Thai society.It is located in Phra Nakhon District, the historic centre of Bangkok, </td>
              <td>Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200</td>
              <td>
                <a href="/places_details" target="_blank"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
                  <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                </button></a>&nbsp;
                <a href="#"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
                  <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                </button></a>&nbsp;
                <button type="button" className="btn btn-xs btn-danger" data-toggle="modal" data-target="#myModal">
                  <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </button>
              </td>

            </tr>
            <tr>
              <td>Wat Phra Kaew</td><td>The Emerald Buddha Temple</td><td>Wat Phra Si Rattana Satsadaram</td><td>วัดพระศรีรัตนศาสดาราม</td><td>วัดพระแก้ว</td>
              <td>Bangkok</td><td>Phra Nakorn</td><td>กรุงเทพมหานคร</td><td>พระนคร</td><td></td>
              <td>13.751591</td><td>100.492658</td>
              <td>https://s3.amazona</td>
              <td>Wat Phra Kaew (Thai: วัดพระแก้ว) is regarded as the most sacred Buddhist temple (wat) in Thailand. The Emerald Buddha housed in the temple is a potent religio-political symbol and the palladium (protective image) of Thai society.It is located in Phra Nakhon District, the historic centre of Bangkok, </td>
              <td>Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200</td>
              <td>
                <a href="#"><button type="button" className="btn btn-xs btn-info" data-toggle="modal" data-target="#myModal">
                  <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                </button></a>&nbsp;
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


      {/*   ------------------Pop Up----------------      */}
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">

                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Delete Place</h4>
                          </div>
                          <div className="modal-body">
                            Are you sure you want to delete this place?
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

export default Admin_place
