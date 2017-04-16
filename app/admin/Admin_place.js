import React, {Component} from 'react'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_place extends Component {

    contextTypes: {
      router: React.PropTypes.object.isRequired
    }

    constructor () {
      super()
      this.state = {
        name: '',
        placeO: '',
        placeTW: '',
        placeTH: '',
        placeF: '',
        cityEN: '',
        cityTH: '',
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
      this.handleUpdatePlaceO = this.handleUpdatePlaceO.bind(this);
      this.handleUpdatePlaceTW = this.handleUpdatePlaceTW.bind(this);
      this.handleUpdatePlaceTH = this.handleUpdatePlaceTH.bind(this);
      this.handleUpdatePlaceF = this.handleUpdatePlaceF.bind(this);
      this.handleUpdateCityEN = this.handleUpdateCityEN.bind(this);
      this.handleUpdateCityTH = this.handleUpdateCityTH.bind(this);
      this.handleUpdateLatitude = this.handleUpdateLatitude.bind(this);
      this.handleUpdateLongitude = this.handleUpdateLongitude.bind(this);
      this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
      this.handleUpdatePicture = this.handleUpdatePicture.bind(this);
      this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
      this.handleUpdateContact = this.handleUpdateContact.bind(this);
      this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
      this.handleSubmitNew = this.handleSubmitNew.bind(this);
    }

    handleUpdateSearch(event) {
      this.setState({
        name: event.target.value
      });
    }

    handleUpdatePlaceO(event) {
      this.setState({
        placeO: event.target.value
      });
    }

    handleUpdatePlaceTW(event) {
      this.setState({
        placeTW: event.target.value
      });
    }
    handleUpdatePlaceTH(event) {
      this.setState({
        placeTH: event.target.value
      });
    }
    handleUpdatePlaceF(event) {
      this.setState({
        placeF: event.target.value
      });
    }
    handleUpdateCityEN(event) {
      this.setState({
        cityEN: event.target.value
      });
    }
    handleUpdateCityTH(event) {
      this.setState({
        cityTH: event.target.value
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
          admin: "place",
          name: [this.state.placeO, this.state.placeTW, this.state.placeTH, this.state.placeF],
          city: [this.state.cityEN, this.state.cityTH],
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

                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder = "Place name (required)" onChange = {this.handleUpdatePlaceO} required/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder = "Place name" onChange = {this.handleUpdatePlaceTW} /></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder = "Place name" onChange = {this.handleUpdatePlaceTH} /></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder = "Place name" onChange = {this.handleUpdatePlaceF} /></div>

                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City name (required)" onChange = {this.handleUpdateCityEN} required/></div>
                      <div className="col-md-2 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="City name" onChange = {this.handleUpdateCityTH} /></div>

                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Latitude" onChange = {this.handleUpdateLatitude}/></div>
                      <div className="col-md-3 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Longitude" onChange = {this.handleUpdateLongitude} /></div>
                      <div className="col-md-5 addmore"><input type = "text" className = "col-md-3 form-control" placeholder="Picture" onChange = {this.handleUpdatePicture} /></div>

                      <div className = "col-md-6 form-group">
                        <textarea
                          className = 'form-control' placeholder = 'Description' rows = '4'  type='text' onChange = {this.handleUpdateDescription} />
                      </div>
                      <div className = "col-md-5 form-group">
                        <textarea className = 'form-control' placeholder = 'Contact' rows = '2' type='text' onChange = {this.handleUpdateContact} />
                      </div>
                      <div className="col-md-3"><button type="submit" className = "btn btn-block btn-success"  type = "submit">Submit</button></div>
                </div>
          </form>
      </div>

      <div className="container bartrans">

          <table className="table">
            <thead className="bar"><tr>
              <th colSpan="4">Place Name</th>
              <th colSpan="2">City</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Picture</th>
              <th>Description</th>
              <th>Contact</th>
              <th></th>
            </tr></thead>

{/*   ------------------------body-----------------*/}

            <tbody>
              { this.state.places.map((val, index) => {
               return <tr key = {index}><td>{val.name[0]}</td><td>{val.name[1]}</td><td>{val.name[2]}</td><td>{val.name[3]}</td>
               <td>{val.city[0]}</td><td>{val.city[1]}</td>
               <td>{val.latitude}</td><td>{val.longitude}</td>
               <td><img className = "img" src = {val.picture} alt = {val.name[0]} width="60" height="50"/></td>
               <td>{val.description}</td>
               <td>{val.contact}</td>
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
               </td></tr>
           })}
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
