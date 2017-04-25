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
            {props.searching ? <h2>Results</h2> : props.sort ? <h2>Categories</h2> : <h2>Popular</h2>}
        </div>
        {props.searching ? null : <div className = "col-md-offset-7 col-sm-offset-6 col-xs-offset-5 col-md-2 col-sm-3 col-xs-3" >
        <select onChange = {props.ChangeSort} className = "select btn-info">
          <option value = "pc">Categories</option>
          <option value = "pp">Popular</option>
        </select>
        </div> }
        </div>

        <div className="container-fluid footergap">
        <div className = "col-md-offset-1 col-md-10 transparentBg">
        {props.searching
          ? props.found ? props.places.map((val, index) => {
                          return <div key = {index} className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0  photo"
                            onClick={() => props.SeeDetails(val.name[0])}>
                                    <img  src = {val.picture} alt = {val.name[0]} width="376" height="251" onClick={() => props.UpdateView(val.name[0])}/>
                                    <div className="bottomleft1">{val.name[0].toUpperCase()}</div>
                                    <div className="box"></div>
                                    <div className="bottomleft2">{val.city[0].toUpperCase()}</div>
                                  </div>
                        })
                      : <h4>{props.err}</h4>
          : props.sort
          ? <div> <div className = "photoo" onClick={() => props.ChangeCategories("nationalpark")}>
                  <img src = "app/img/places/HKM_9050.jpg"/>
                  <img src = "app/img/places/000027.jpg"/>
                  <img src = "app/img/places/000030.jpg"/>
                  <div className = "text national">National Park</div>
                  </div>

                  <div className = "photoo" onClick={() => props.ChangeCategories("temple")}>
                  <img src = "app/img/places/000008.jpg"/>
                  <img src = "app/img/places/000018.jpg"/>
                  <img src = "app/img/places/000031.jpg"/>
                  <div className = "text temple">Temple</div>
                  </div>

                  <div className = "photoo" onClick={() => props.ChangeCategories("beach")}>
                  <img src = "app/img/places/HKM_0504.jpg"/>
                  <img src = "app/img/places/HKM_0353.jpg"/>
                  <img src = "app/img/places/000015.jpg"/>
                  <div className = "text beach">Beach</div>
                  </div>

                  <div className = "photoo" onClick={() => props.ChangeCategories("safari")}>
                  <img src = "app/img/places/safari.jpg"/>
                  <img src = "app/img/places/safari2.jpg"/>
                  <img src = "app/img/places/safari3.jpg"/>
                  <div className = "text safari">Safari</div>
                  </div>

                  <div className = "photoo" onClick={() => props.ChangeCategories("market")}>
                  <img src = "app/img/places/market1.jpg"/>
                  <img src = "app/img/places/market2.jpg"/>
                  <img src = "app/img/places/market3.jpg"/>
                  <div className = "text market">Market</div>
                  </div>

                  <div className = "photoo" onClick={() => props.ChangeCategories("museum")}>
                  <img src = "app/img/places/museum1.jpg"/>
                  <img src = "app/img/places/museum2.jpg"/>
                  <img src = "app/img/places/museum3.jpg"/>
                  <div className = "text museum">Museum</div>
                  </div>

                  <div className = "photoo" onClick={() => props.ChangeCategories("other")}>
                  <img src = "https://travelingwithkrushworth.files.wordpress.com/2013/01/sunset-cowley-ridge.jpg"/>
                  <img src = "http://www.lonelyplanet.com/news/wp-content/uploads/2016/07/1st-Prize-Winner-category-Travel-Basilica-of-Saint-Francis-of-Assisi-Umbria-Italy-by-fcatutto.jpg"/>
                  <img src = "http://www.pdcdc.org/wp-content/uploads/2016/03/restaurant-939435_960_720.jpg"/>
                  <div className = "text museum">Other</div>
                  </div>
            </div>

            : props.show.map((val, index) => {
             return (val.category != "restaurant")
               ? (val.category != "accommodation")
                 ? <div key = {index} className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0  photo"
             onClick={() => props.SeeDetails(val.name[0])}>
               <img className = "img" src = {val.picture} alt = {val.name[0]} width="376" height="251" onClick={() => props.UpdateView(val.name[0])}/>
               <div className="bottomleft1">{val.name[0].toUpperCase()}</div>
               <div className="box"></div>
               <div className="bottomleft2">{val.city[0].toUpperCase()}</div>
               </div>
               : null
              : null
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
type: PropTypes.string.isRequired,
found: PropTypes.bool.isRequired,
UpdateView: PropTypes.func.isRequired
}

export default Places
