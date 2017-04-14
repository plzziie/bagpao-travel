import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/trips.css'
import sty from '../styles/places.css'

function Places (props) {
  console.log(props);
  return(
    <div>
      <div className = "jumbotron text-center"  style = {styles.transparentBg}>
        <h2 className="title2">{props.header}</h2>
        <div className = "col-xs-12" style = {styles.gap}>
          <form onSubmit = {props.onSubmitUser}>
            <div className = "form-group col-xs-6 col-xs-offset-3">
              <input
                className = "form-control"
                placeholder = 'Place/ City'
                onChange = {props.onUpdateSearch}
                defaultValue = {props.username}
                type = 'text' />
            </div>
            <div className = "form-group col-md-1 col-xs-2">
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Search
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className = "jumbotron col-md-offset-1" style={styles.transparentBg}>
        <div className = "title2 col-md-offset-0 col-sm-offset-0 col-xs-offset-1 col-md-3 col-sm-3 col-xs-3" >
            {props.sort ? <h2>Categories</h2> : <h2>Popular</h2>}
        </div>
        <div className = "col-md-offset-7 col-sm-offset-6 col-xs-offset-5 col-md-2 col-sm-3 col-xs-3" >
        <select onChange = {props.ChangeSort} className = "select btn-info">
          <option value = "pc">Categories</option>
          <option value = "pp">Popular</option>
        </select>
        </div>
        </div>

        <div className="container-fluid footergap">
        <div className = "col-md-offset-1 col-md-10 transparentBg">
        {props.sort
          ? <div> <div className = "photoo" onClick = {props.ChangeCategories} id = "nationalpark">
                  <img src = "app/img/places/HKM_9050.jpg" id = "nationalpark"/>
                  <img src = "app/img/places/000027.jpg" id = "nationalpark"/>
                  <img src = "app/img/places/000030.jpg" id = "nationalpark"/>
                  <div className = "text national" id = "nationalpark">National Park</div>
                  </div>

                  <div className = "photoo" onClick = {props.ChangeCategories} id = "temple">
                  <img src = "app/img/places/000008.jpg" id = "temple"/>
                  <img src = "app/img/places/000018.jpg" id = "temple"/>
                  <img src = "app/img/places/000031.jpg" id = "temple"/>
                  <div className = "text temple" id = "temple">Temple</div>
                  </div>

                  <div className = "photoo" onClick = {props.ChangeCategories} id = "beach">
                  <img src = "app/img/places/HKM_0504.jpg"/>
                  <img src = "app/img/places/HKM_0353.jpg"/>
                  <img src = "app/img/places/000015.jpg"/>
                  <div className = "text beach" id = "beach">Beach</div>
                  </div>
            </div>

            : props.show.map((val, index) => {
             return <div key = {index} className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0  photo"
             onClick = {props.SeeDetails} id = {val.name[0]}>
               <img className = "img" src = {val.picture} alt = {val.name[0]} id = {val.name[0]} width="376" height="251"/>
               <div className="bottomleft1">{val.name[0]}</div>
               <div className="box"></div>
               <div className="bottomleft2">{val.city[0]}</div>
               </div>
            })
            }

    </div>
  </div>
  </div>
    )
}

Places.PropTypes = {
onSubmitUser: PropTypes.func.isRequired,
onUpdateSearch: PropTypes.func.isRequired,
ChangeSort: PropTypes.func.isRequired,
ChangeCategories: PropTypes.func.isRequired,
SeeDetails: PropTypes.func.isRequired,
header: PropTypes.string.isRequired,
places: PropTypes.object.isRequired,
show: PropTypes.object.isRequired,
sort: PropTypes.bool.isRequired,
searching: PropTypes.bool.isRequired,
type: PropTypes.string.isRequired
}

export default Places
