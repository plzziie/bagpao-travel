import React, {Component} from 'react'
import {PropTypes} from 'react'
import ReactRouter from 'react-router'
import {Link} from 'react-router'
import CreatePlan from '../containers/CreatePlanContainer'
import styles from '../styles/home.css'
import style from '../styles'

function Home (props) {
  console.log(props);
    return(
  <div>
  <div className = "container-fluid homebg1">
    <CreatePlan/>
  </div>

  <div className="container-fluid">
    <div className = "col-md-offset-1 col-md-10 transparentBg">
      <h3 className = "col-xs-offset-1 col-md-offset-0 col-sm-offset-0 title">Popular Trips</h3>
        <div className = "row">
             {props.poptrip.map((val, index) => {
                  return <a href="trips-details"><div key = {index} className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
                    <img className = "img" src = {val.picture} alt = {val.name} width="376" height="251"/>
                    <div className="bottomleft1">{val.name}</div>
                    <div className="box"></div>
                    <div className="bottomleft2">by {val.creator}</div>
                  </div></a>
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
                onClick = {props.SeeDetails} id = {val.name[0]}>
                <img className = "img" src = {val.picture} alt = {val.name[0]} id = {val.name[0]} width="376" height="251"/>
                <div className="bottomleft1">{val.name[0]}</div>
                <div className="box"></div>
                <div className="bottomleft2">{val.city[0]}</div>
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
  SeeDetails: PropTypes.func.isRequired
}

export default Home
