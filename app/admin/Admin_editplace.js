import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'

class Admin_editplace extends Component {

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

    this.handleUpdatePlace = this.handleUpdatePlace.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
    this.handleUpdateLatitude = this.handleUpdateLatitude.bind(this);
    this.handleUpdateLongitude = this.handleUpdateLongitude.bind(this);
    this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
    this.handleUpdatePicture = this.handleUpdatePicture.bind(this);
    this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
    this.handleUpdateContact = this.handleUpdateContact.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount() {
    fetch(`http://localhost:1200/show`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: "detailplace",
        name: this.props.params.name
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            places: myObj
        });
      }
      else {
        console.log("error");
      }
    }.bind(this))
  }

  handleUpdatePlace(event) {
    this.setState({
      name: event.target.value
    });
  }
  handleUpdateCity(event) {
    this.setState({
      city: event.target.value
    });
  }
  handleUpdateLatitude(event) {
    this.setState({
      latitude: event.target.value
    });
  }
  handleUpdateLongitude(event) {
    this.setState({
      longitude: event.target.value
    });
  }
  handleUpdateCategory(event) {
    this.setState({
      category: event.target.value
    });
  }
  handleUpdatePicture(event) {
    this.setState({
      picture: event.target.value
    });
  }
  handleUpdateDescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  handleUpdateContact(event) {
    this.setState({
      contact: event.target.value
    });
  }

  handleSubmitEdit(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/admin`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        admin: "update",
        types: "place",
        name: this.state.name,
        city: this.state.city,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        category: this.state.category,
        picture: this.state.picture,
        description: this.state.description,
        contact: this.state.contact
        })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      console.log(myObj);
      location.replace('/Admin_place');
  })
}

  render() {
    console.log(this.props);
    return (

      <div className = "container-fluid">


      <div>
        <h2>Edit Place</h2>
        { this.state.places.map((val, index) => {
         return <form onSubmit = {this.handleSubmitEdit} key={index}>

        <div className="col-md-12"><label>Place</label>
          <input type = "text" className = "col-md-3 form-control" placeholder = {val.name} onChange = {this.handleUpdatePlace} /></div>
        <div className="col-md-12"><label>City</label>
        <input type = "text" className = "col-md-3 form-control" placeholder = {val.city} onChange = {this.handleUpdateCity} /></div>
        <div className="col-md-12"><label>Latitude</label>
        <input type = "text" className = "col-md-3 form-control" placeholder = {val.latitude}  onChange = {this.handleUpdateLatitude} /></div>
        <div className="col-md-12"><label>Longitude</label>
        <input type = "text" className = "col-md-3 form-control" placeholder = {val.longitude} onChange = {this.handleUpdateLongitude} /></div>

        <div className="col-md-12"><label>Picture</label>
        <input type = "text" className = "col-md-3 form-control" placeholder = "Picture" onChange = {this.handleUpdatePicture} /></div>
        <div className = "col-md-12 form-group"><label>Contact</label>
          <textarea className = 'form-control' placeholder = {val.contact} rows = '1' type='text' onChange = {this.handleUpdateContact} />
        </div>
        <div className = "col-md-12 form-group"><label>Description</label>
          <textarea
            className = 'form-control' placeholder = {val.description} rows = '4'  type='text' onChange = {this.handleUpdateDescription} />
        </div>
        <div className="col-md-12">
        <p>Choose the categories that fit in.</p>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "National Park" onChange = {this.handleUpdateCategory} />National Park
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "Temple" onChange = {this.handleUpdateCategory} />Temple
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "Beach" onChange = {this.handleUpdateCategory}/>Beach
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "Safari" onChange = {this.handleUpdateCategory} />Safari
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "Market" onChange = {this.handleUpdateCategory} />Market
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "Museum" onChange = {this.handleUpdateCategory} />Museum
            </label>
        </div>

        <div className="col-md-3"><button type="submit" className = "btn btn-block btn-success"  type = "submit" style={styles.space}>Save</button></div>

          </form> })}
  </div>

  </div>

  )
}
}

Admin_editplace.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Admin_editplace
