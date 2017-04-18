import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'

class Admin_editplace extends Component {
  render() {
    return (

      <div className = "container-fluid">
      <div>
        <h2>Add new Place</h2>

        <div className="col-md-3"><input type = "text" className = "col-md-3 form-control" placeholder = "Place Name" required/></div>
        <div className="col-md-3"><input type = "text" className = "col-md-3 form-control" placeholder = "City Name" required/></div>
        <div className="col-md-3"><input type = "text" className = "col-md-3 form-control" placeholder = "Latitude"  required/></div>
        <div className="col-md-3"><input type = "text" className = "col-md-3 form-control" placeholder = "Longitude" required/></div>

        <div className="col-md-5"><input type = "text" className = "col-md-3 form-control" placeholder = "Picture"  required/></div>
        <div className = "col-md-7 form-group">
          <textarea className = 'form-control' placeholder = 'Contact' rows = '1' type='text' required/>
        </div>
        <div className = "col-md-5 form-group">
          <textarea
            className = 'form-control' placeholder = 'Description' rows = '4'  type='text'  required/>
        </div>
        <div className="col-md-6">
        <p>Choose the categories that fit in.</p>
            <label className = "radio-inline">
              <input type = "radio" value = "National Park"/>National Park
            </label>
            <label className = "radio-inline">
              <input type = "radio" value = "Temple"/>Temple
            </label>
            <label className = "radio-inline">
              <input type = "radio" value = "Beach"/>Beach
            </label>
            <label className = "radio-inline">
              <input type = "radio" value = "Safari"/>Safari
            </label>
            <label className = "radio-inline">
              <input type = "radio" value = "Market"/>Market
            </label>
            <label className = "radio-inline">
              <input type = "radio" value = "Museum"/>Museum
            </label>
        </div>
        <div className="col-md-3"><button type="submit" className = "btn btn-block btn-success"  type = "submit">Submit</button></div>
  </div>
  </div>

  )
}
}

export default Admin_editplace
