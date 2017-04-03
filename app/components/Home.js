import React, {Component} from 'react'
import ReactRouter from 'react-router'
import {Link} from 'react-router'
import CreatePlan from '../containers/CreatePlanContainer'
import styles from '../styles/home.css'
import style from '../styles'

function Home (props) {
return(
  <div>
  <div className = "container-fluid homebg1">
    <CreatePlan/>
  </div>

  <div className="container-fluid">
    <div className = "col-md-offset-1 col-md-10 transparentBg">
      <h3 className = "col-xs-offset-1 col-md-offset-0 col-sm-offset-0 title">Popular Trips</h3>
        <div className = "row">
          <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
            <img className = "img" src = "app/img/chiangdao.jpg" alt = "Northnow" width="376" height="251"/>
            <div className="bottomleft1">North Now</div>
            <div className="box"></div>
            <div className="bottomleft2">by nokky</div>
          </div>
          <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
            <img className = "img" src = "app/img/phuket.jpg" alt = "Phuketgetaway"  width="376" height="251"/>
            <div className="bottomleft1">Phuket Get Away</div>
            <div className="box"></div>
            <div className="bottomleft2">by daojai</div>
          </div>
          <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
            <img className = "img" src="app/img/bkk.jpg" alt = "Onedaytour"  width="376" height="251"/>
            <div className="bottomleft1">One Day Tour</div>
            <div className="box"></div>
            <div className="bottomleft2">by nanon</div>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid padding">
    <div className = "col-md-offset-1 col-md-10 transparentBg" >
        <h3 className="col-xs-offset-1 col-md-offset-0 col-sm-offset-0 title ">Popular Places</h3>

    <div className = "row">
      <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0  photo">
        <img className = "img" src = "app/img/chiangmai.jpg" alt = "doisuthep" width="376" height="251"/>
        <div className="bottomleft1">Doi Suthep-Pui National Park</div>
        <div className="box"></div>
        <div className="bottomleft2">Chiangmai</div>
      </div>
      <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
        <img className = "img" src = "app/img/samui.jpg" alt = "samui"  width="376" height="251"/>
        <div className="bottomleft1">Samui Island</div>
        <div className="box"></div>
        <div className="bottomleft2">Surat Thani</div>
      </div>
      <div className = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 photo">
        <img className = "img" src = "app/img/huahin.jpg" alt = "samroiyot"  width="376" height="251"/>
        <div className="bottomleft1">Khao Sam Roi Yot National Park</div>
        <div className="box"></div>
        <div className="bottomleft2">Prachuap Khiri Khan</div>
      </div>
    </div>
  </div>
</div>

      </div>
    )
}

export default Home
