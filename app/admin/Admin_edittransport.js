import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'

class Admin_edittransport extends Component {

    contextTypes: {
      router: React.PropTypes.object.isRequired
    }

    constructor () {
      super()
      this.state = {
        name: '',
        place: '',
        city: '',
        latitude: '',
        longitude: '',
        category: '',
        picture: '',
        description: '',
        contact: '',
        err: '',
        places: []
      }
      this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
      this.handleUpdatePlace = this.handleUpdatePlace.bind(this);
      this.handleUpdateCity = this.handleUpdateCity.bind(this);
      this.handleUpdateLatitude = this.handleUpdateLatitude.bind(this);
      this.handleUpdateLongitude = this.handleUpdateLongitude.bind(this);
      this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
      this.handleUpdatePicture = this.handleUpdatePicture.bind(this);
      this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
      this.handleUpdateContact = this.handleUpdateContact.bind(this);
      this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
      this.handleSubmitNew = this.handleSubmitNew.bind(this);
      this.DeletePlace = this.DeletePlace.bind(this);
    }

    handleUpdateSearch(event) {
      this.setState({
        name: event.target.value
      });
    }

  EditPlace(ev) {
    event.preventDefault();
    window.open("/places-details/"+ev);
}

  DeletePlace(ev) {
    event.preventDefault();
    fetch(`http://localhost:1200/admin`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "delete",
        types: "place",
        name: ev
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      console.log(myObj);
      window.location.reload()
  })
}

  render() {
    return (

      <div className="container-fluid"><form onSubmit = {this.handleSubmitNew}>
      <div id="demo" className="collapse">
        <h2>Add new Place</h2>

        <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder = "Place Name" onChange = {this.handleUpdatePlace} required/></div>
        <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City Name" onChange = {this.handleUpdateCity} required/></div>
        <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Latitude" onChange = {this.handleUpdateLatitude} required/></div>
        <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Longitude" onChange = {this.handleUpdateLongitude} required/></div>

        <div className="col-md-5 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Picture" onChange = {this.handleUpdatePicture} required/></div>
        <div className = "col-md-7 form-group">
          <textarea className = 'form-control' placeholder = 'Contact' rows = '1' type='text' onChange = {this.handleUpdateContact} required/>
        </div>
        <div className = "col-md-5 form-group">
          <textarea
            className = 'form-control' placeholder = 'Description' rows = '4'  type='text' onChange = {this.handleUpdateDescription} required/>
        </div>
        <div className="col-md-6">
        <p>Choose the categories that fit in.</p>
            <label className="radio-inline">
              <input type="radio" value="National Park" onChange = {this.handleUpdateCategory}/>National Park
            </label>
            <label className="radio-inline">
              <input type="radio" value="Temple" onChange = {this.handleUpdateCategory}/>Temple
            </label>
            <label className="radio-inline">
              <input type="radio" value="Beach" onChange = {this.handleUpdateCategory}/>Beach
            </label>
            <label className="radio-inline">
              <input type="radio" value="Safari" onChange = {this.handleUpdateCategory}/>Safari
            </label>
            <label className="radio-inline">
              <input type="radio" value="Market" onChange = {this.handleUpdateCategory}/>Market
            </label>
            <label className="radio-inline">
              <input type="radio" value="Museum" onChange = {this.handleUpdateCategory}/>Museum
            </label>
        </div>
        <div className="col-md-3"><button type="submit" className = "btn btn-block btn-success"  type = "submit">Submit</button></div>
  </div>
</form>

</div>
  )
}
}

export default Admin_edittransport
