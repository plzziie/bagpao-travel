import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'

function Trips (props) {
    return(
    <div>
      <div className = "jumbotron text-center"  style = {styles.transparentBg}>
        <h2>{props.header}</h2>
        <div className = "col-sm-12">
          <form onSubmit = {props.onSubmitUser}>
            <div className = "form-group col-sm-6 col-sm-offset-3">
              <input
                className = "form-control"
                placeholder = 'Trip Name/ City/ Place'
                onChange = {props.onUpdateUser}
                defaultValue = {props.username}
                type = 'text' />
            </div>
            <div className = "form-group col-sm-1">
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className = "row" style = {styles.space}>
      <div className = "col-sm-4">
        <img className = "img" src = "https://i.ytimg.com/vi/HGwClTbsSns/maxresdefault.jpg" alt = "Nan" width = "200" height = "150"/>
        <h3>Nan</h3>
        <h5>by dammy</h5>
      </div>
      <div className = "col-sm-4">
        <img className = "img" src = "https://www.thestar.com/content/dam/thestar/life/travel/asiatravel/2013/06/27/asia_travel_the_magical_mysteries_of_ayutthaya_thailand/temple_in_ayutthaya_thailand.jpg" alt = "Ayutthaya" width = "200" height = "150"/>
        <h3>Old Town</h3>
        <h5>by jahyon</h5>
      </div>
      <div className  ="col-sm-4">
        <img className ="img" src="http://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/other-islands/pagePropertiesImage/top-samui-islands.jpg" alt = "Samui Island" width = "200" height = "150"/>
        <h3>Happy Island</h3>
        <h5>by poppypop</h5>
      </div>
      </div>
    </div>
    )
  }

  Trips.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default Trips