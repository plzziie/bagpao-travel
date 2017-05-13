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
      latitude: 0,
      longitude: 0,
      price: 0,
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
    .then(function (set) {
      this.setState({
        name: this.state.places[0].name[0],
        place: this.state.places[0].place,
        city: this.state.places[0].city,
        latitude: this.state.places[0].latitude,
        longitude: this.state.places[0].longitude,
        category: this.state.places[0].category,
        picture: this.state.places[0].picture,
        description: this.state.places[0].description,
        contact: this.state.places[0].contact,
        place: this.state.places[0].price
      });
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
    var x = Number(event.target.value)
    this.setState({
      latitude: x
    });
  }
  handleUpdateLongitude(event) {
    var x = Number(event.target.value)
    this.setState({
      longitude: x
    });
  }
  handleUpdateCategory(event) {
    this.setState({
      category: event.target.value
    });
  }
  handleUpdatePrice(event) {
    var x = Number(event.target.value)
    this.setState({
      price: x
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
        contact: this.state.contact,
        price: this.state.price
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
        <h2>Edit Place</h2>
        { this.state.places.map((val, index) => {
         return <form onSubmit = {this.handleSubmitEdit} key={index}>

        <div className="col-md-12"><label>Place</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.name} onChange = {this.handleUpdatePlace} /></div>
        <div className="col-md-12"><label>City</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.city} onChange = {this.handleUpdateCity} /></div>
        <div className="col-md-12"><label>Latitude</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.latitude}  onChange = {this.handleUpdateLatitude} /></div>
        <div className="col-md-12"><label>Longitude</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.longitude} onChange = {this.handleUpdateLongitude} /></div>

        <div className="col-md-12"><label>Picture</label>
        <input type = "text" className = "col-md-3 form-control" defaultValue = {val.picture} onChange = {this.handleUpdatePicture} /></div>
        <div className="col-md-12"><label>Price</label>
        <input type = "number" className = "col-md-3 form-control" defaultValue = {val.price} onChange = {this.handleUpdatePrice} /></div>
        <div className = "col-md-12 form-group"><label>Contact</label>
          <textarea className = 'form-control' defaultValue = {val.contact} rows = '1' type='text' onChange = {this.handleUpdateContact} />
        </div>
        <div className = "col-md-12 form-group"><label>Description</label>
          <textarea
            className = 'form-control' defaultValue = {val.description} rows = '4'  type='text' onChange = {this.handleUpdateDescription} />
        </div>
        <div className="col-md-12">
        <p>Choose the categories that fit in.</p>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "amusement park" onChange = {this.handleUpdateCategory} />Amusement Park
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "beach" onChange = {this.handleUpdateCategory} />Beach
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "department store" onChange = {this.handleUpdateCategory} />Department Store
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "market" onChange = {this.handleUpdateCategory} />Market
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "museum" onChange = {this.handleUpdateCategory} />Museum
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "national park" onChange = {this.handleUpdateCategory}/>National Park
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "public park" onChange = {this.handleUpdateCategory} />Public Park
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "temple" onChange = {this.handleUpdateCategory} />Temple
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "zoo" onChange = {this.handleUpdateCategory} />Zoo
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "other" onChange = {this.handleUpdateCategory} />Other
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "accommodation" onChange = {this.handleUpdateCategory} />Accommodation
            </label>
            <label className = "checkbox-inline">
              <input type = "checkbox" value = "restaurant" onChange = {this.handleUpdateCategory} />Restaurant
            </label>
        </div>

        <div className="col-md-3"><button type="submit" className = "btn btn-block btn-success"  type = "submit" style={styles.space}>Save</button></div>

          </form> })}


  </div>

  )
}
}

Admin_editplace.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Admin_editplace
