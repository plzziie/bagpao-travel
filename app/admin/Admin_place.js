import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_place extends Component {

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
      this.EditPlace = this.EditPlace.bind(this);
    }

    handleUpdateSearch(event) {
      this.setState({
        name: event.target.value
      });
    }
    handleUpdatePlace(event) {
      this.setState({
        place: event.target.value
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

    handleSubmitSearch(event) {
      event.preventDefault();
      fetch(`http://localhost:1200/show`, {
          method: 'POST',
          headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          do: "detailplace",
          name: this.state.name
          })
      })
      .then(function (response) {
        return response.text()
      }).then(function (body) {
        var myObj = JSON.parse(body);
        console.log(myObj);
        if (myObj.message === undefined) {
          this.setState({
              places: myObj
          })
        }
        else {
          this.setState({
              err: myObj.message
          })
        }
      }.bind(this))
    }

    handleSubmitNew(event) {
      event.preventDefault();
      fetch(`http://localhost:1200/admin`, {
          method: 'POST',
          headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          admin: "add",
          types: "place",
          name: this.state.place,
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
        window.location.reload()
    })
  }

  EditPlace(ev) {
    event.preventDefault();
    this.context.router.push('/editplace/'+ev);
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
      window.location.reload()
  })
}

  render() {
    return (

      <div className="container-fluid">
      {/*   ------------------------head----------------      */}
      <div className="searchgap">
              <form onSubmit = {this.handleSubmitSearch}>
                  <div className="col-md-9">
                    <input  className = "form-control" placeholder = 'Place/City' type = 'text' onChange = {this.handleUpdateSearch}/>
                  </div>
                    <button type = "submit" className="btn btn-info">Search</button>&nbsp;
                    <button type="button" className="roundbutton btn btn-danger" data-toggle="collapse" data-target="#demo">+</button>
              </form>
              <form onSubmit = {this.handleSubmitNew}>
                    <div id="demo" className="collapse">
                      <h2>Add new Place</h2>

                      <div className="col-md-6 addmore"><input type = "text" className = "col-md-3 form-control" placeholder = "Place Name" onChange = {this.handleUpdatePlace} required/></div>
                      <div className="col-md-6 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City Name" onChange = {this.handleUpdateCity} required/></div>
                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Latitude" onChange = {this.handleUpdateLatitude} required/></div>
                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Longitude" onChange = {this.handleUpdateLongitude} required/></div>

                      <div className="col-md-6 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Picture" onChange = {this.handleUpdatePicture} required/></div>
                      <div className = "col-md-7 form-group">
                        <textarea
                          className = 'form-control' placeholder = 'Description' rows = '4'  type='text' onChange = {this.handleUpdateDescription} required/>
                      </div>
                      <div className = "col-md-5 form-group">
                        <textarea className = 'form-control' placeholder = 'Contact' rows = '4' type='text' onChange = {this.handleUpdateContact} required/>
                      </div>

                      <div className="col-md-12">
                      <p>Choose the categories that fit in.</p>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "national Park" onChange = {this.handleUpdateCategory} />National Park
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "temple" onChange = {this.handleUpdateCategory} />Temple
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "beach" onChange = {this.handleUpdateCategory}/>Beach
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "safari" onChange = {this.handleUpdateCategory} />Safari
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "market" onChange = {this.handleUpdateCategory} />Market
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "museum" onChange = {this.handleUpdateCategory} />Museum
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "accommodation" onChange = {this.handleUpdateCategory} />Accommodation
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "restaurant" onChange = {this.handleUpdateCategory} />Restaurant
                          </label>
                          <label className = "checkbox-inline">
                            <input type = "checkbox" value = "other" onChange = {this.handleUpdateCategory} />Other
                          </label>

                      </div>
                      <div className="col-md-offset-4 col-md-3 step-bottom"><button type="submit" className = "btn btn-block btn-success"  type = "submit">Submit</button></div>
                </div>
          </form>
      </div>

      <div className="container-fluid">

          <table className="table">
            <thead className="bar"><tr>
              <th>Place Name</th>
              <th>City</th>
              <th>Picture</th>
              <th></th>
            </tr></thead>

{/*   ------------------------body-----------------*/}

            <tbody>
              { this.state.places.map((val, index) => {
               return <tr key = {index}><td>{val.name[0]}</td><td>{val.city[0]}</td>
               <td><img className = "img" src = {val.picture} alt = {val.name[0]} width="120" height="100"/></td>
               <td>
                 <button type="button" className="btn btn-xs btn-info" onClick={() => this.EditPlace(val.name[0])}>
                   <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
                 </button>&nbsp;
                 <button type="button" className = "btn btn-xs btn-danger" onClick={() => this.DeletePlace(val.name[0])}>
                   <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                 </button>
               </td></tr>
             })}

            </tbody>
          </table>
            {/*onClick={() => this.DeletePlace(val.name[0])}*/}
      </div>
    </div>
      )
    }
  }

  Admin_place.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

export default Admin_place
