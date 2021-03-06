import React from 'react'
import {PropTypes} from 'react'
import styles from '../styles'
import style from '../styles/trips.css'

function Trips (props) {
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
                placeholder = 'Trip Name/ City/ Place'
                onChange = {props.onUpdateSearch}
                defaultValue = 'Trip Name/ City/ Place'
                type = 'text' />
            </div>
            <div className = "form-group col-xs-2 col-md-1">
              <button
                className = "btn btn-block btn-success"
                type = "submit">
                  Search
              </button>
            </div>
          </form>
        </div>
      </div>


        <div className = "jumbotron col-md-offset-1" style = {styles.transparentBg}>
        <div className = "title2 col-md-offset-0 col-sm-offset-0 col-xs-offset-1 col-md-3 col-sm-3 col-xs-3" >
            {props.searching ? <h2>Results</h2> : props.sort ? <h2>Popular</h2> : <h2>Recent</h2>}
        </div>
        {props.searching ? null : <div className = "col-md-offset-7 col-sm-offset-6 col-xs-offset-5 col-md-2 col-sm-3 col-xs-3" >
        <select onChange = {props.ChangeSort} className="select btn-info">
          <option value = "tp">Popular</option>
          <option value = "tr">Recent</option>
        </select>
        </div>}
        </div>


      <div className="container-fluid footergap">
      <div className = "col-md-offset-1 col-md-10 transparentBg">
      {props.searching
        ? props.found ? props.trips.map((valx, indexx) => {
          return <div key = {indexx}><div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
                    <img className = "img favgap" src = {valx.picture} alt = {valx.name} width="376" height="251" onClick={() => props.SeeDetails(valx.name)}/>
                    <div className="bottomlefttrip1">{valx.name.toUpperCase()}</div>
                    <div className="boxtrip"></div>
                    <div className="bottomlefttrip2">by {valx.creator.toUpperCase()}</div>

                    { valx.liker.map((vals, indexs) => {
                      return (vals == props.username)
                        ? <input key={indexs} type="checkbox" value={valx.name} className="like_position" checked/>
                        : <input key={indexs} type="checkbox" value={valx.name} className="like_position" onClick={() => props.onUpdateLike(valx.name)}/>
                    })} <label className="like"></label>

                    <input type="checkbox" id="fav"  className="cb_position" onClick={() => props.AddFav(valx.name)}/>&nbsp;&nbsp;<label className="heart"></label>
                    <label className="col-md-offset-8 text-right"><div className="share">share</div></label>

                  </div>
                </div>
                      })
                    : <h4>{props.err}</h4>

      : props.show.map((val, index) => {
        return <div key = {index}><div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
                  <img className = "img favgap" src = {val.picture} alt = {val.name} width="376" height="251" onClick={() => props.SeeDetails(val.name)}/>
                  <div className="bottomlefttrip1">{val.name.toUpperCase()}</div>
                  <div className="boxtrip"></div>
                  <div className="bottomlefttrip2">by {val.creator.toUpperCase()}</div>
                  <input type="checkbox" id="like" className="like_position" onClick={() => props.onUpdateLike(val.name)}/ ><label className="like"></label>
                  <input type="checkbox" id="fav"  className="cb_position" onClick={() => props.AddFav(val.name)}/>&nbsp;&nbsp;<label className="heart"></label>
                  <label className="col-md-offset-8 text-right"><div className="share">share</div></label>

                </div>
              </div>
                  })
      }
    </div>
  </div>
</div>

    )
  }

  Trips.PropTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
  SeeDetails: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  trips: PropTypes.object.isRequired,
  show: PropTypes.object.isRequired,
  searching: PropTypes.bool.isRequired,
  found: PropTypes.bool.isRequired,
  err: PropTypes.string.isRequired,
  do: PropTypes.string.isRequired,
  test: PropTypes.bool.isRequired,
  sort: PropTypes.bool.isRequired,
  onUpdateLike: PropTypes.func.isRequired,
  AddFav: PropTypes.func.isRequired
}

export default Trips
