import React, {Component} from 'react'
import {PropTypes} from 'react'
import Select from 'react-select'
import ReactRouter from 'react-router'
import {Link} from 'react-router'
import CreatePlan from '../containers/CreatePlanContainer'
import styles from '../styles/home.css'
import style from '../styles'
import { login, logout, isLoggedIn, getIdToken} from '../lib/AuthService'

function Home (props) {
  console.log(props);
    return(
  <div>
  <div className = "container-fluid homebg1">
    <CreatePlan/>
  </div>



  <div className="container-fluid">{(isLoggedIn()) ?
    <div className = "col-md-offset-1 col-md-10 transparentBg">
      <h3 className = "col-xs-offset-1 col-md-offset-0 col-sm-offset-0 title">Recommend Trips</h3>
        <div className = "row">
             {props.poptrip.map((val, index) => {
                  return <div key = {index}><div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
                            <img className = "img favgap" src = {val.picture} alt = {val.name} width="376" height="251" onClick={() => props.SeeTripsDetails(val.name)}/>
                            <div className="bottomlefttrip1">{val.name.toUpperCase()}</div>
                            <div className="boxtrip"></div>
                            <div className="bottomlefttrip2">by {val.creator.toUpperCase()}</div>
                            <input type="checkbox" value={val.name} className="checklike" onClick={() => props.onUpdateLike(val.name)}/><label className="like">Like</label>
                            <input type="checkbox" id="fav"  className="cb_position" onClick={() => props.AddFav(val.name)}/>&nbsp;&nbsp;<label className="heart"></label>
                            <label className="col-md-offset-8 text-right"><div className="share">share</div></label>
                          </div>
                        </div>

             })}
        </div>
      </div>
   : null }  </div>

  <div className="container-fluid padding">
    <div className = "col-md-offset-1 col-md-10 transparentBg">
      <h3 className = "col-xs-offset-1 col-md-offset-0 col-sm-offset-0 title">Popular Trips</h3>
        <div className = "row">
             {props.poptrip.map((val, index) => {
                  return <div key = {index}><div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
                            <img className = "img favgap" src = {val.picture} alt = {val.name} width="376" height="251" onClick={() => props.SeeTripsDetails(val.name)}/>
                            <div className="bottomlefttrip1">{val.name.toUpperCase()}</div>
                            <div className="boxtrip"></div>
                            <div className="bottomlefttrip2">by {val.creator.toUpperCase()}</div>
                            <input type="checkbox" value={val.name} className="checklike" onClick={() => props.onUpdateLike(val.name)}/><label className="like">Like</label>

                            {(isLoggedIn()) ?  <input type="checkbox" id="fav" className="cb_position" onClick={() => props.AddFav(val.name)}/>: null } &nbsp;&nbsp;
                            <label className="heart"></label>

                            <label className="col-md-offset-8 text-right"><div className="share">share</div></label>
                          </div>
                        </div>

             })}
        </div>
      </div>
    </div>


    <div className="container-fluid padding">
      <div className = "col-md-offset-1 col-md-10 transparentBg" >
        <h3 className="col-xs-offset-1 col-md-offset-0 col-sm-offset-0 title ">Popular Places</h3>
          <div className = "row">
            {props.popplace.map((val, index) => {
                return <div key = {index} className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo"
                onClick={() => props.SeeDetails(val.name[0])}>
                <img className = "img" src = {val.picture} alt = {val.name[0]} width="376" height="251" onClick={() => props.UpdateView(val.name[0])}/>
                <div className="bottomleft1">{val.name[0].toUpperCase()}</div>
                <div className="box"></div>
                <div className="bottomleft2">{val.city[0].toUpperCase()}</div>
                </div>
            })}
          </div>
        </div>
      </div>


</div>

    )
}

Home.PropTypes = {
  poptrip: PropTypes.object.isRequired,
  popplace: PropTypes.object.isRequired,
  SeeDetails: PropTypes.func.isRequired,
  SeeTripsDetails: PropTypes.func.isRequired,
  onUpdateLike: PropTypes.func.isRequired,
  UpdateView: PropTypes.func.isRequired,
  AddFav: PropTypes.func.isRequired
}

export default Home
