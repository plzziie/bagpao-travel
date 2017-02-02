import React from 'react'
import ReactRouter from 'react-router'
import {Link} from 'react-router'
import styles from '../styles'

var Navbar = React.createClass({
  render: function () {
    return (
      <div>
        <nav className = "navbar navbar-default" style = {styles.transparentBg}>
          <div className = "container">
            <div className = "navbar-header" style = {styles.transparentBg}>
              <button type = "button" className = "navbar-toggle" data-toggle = "collapse" data-target = "#navb">
                <span className = "icon-bar"></span>
                <span className = "icon-bar"></span>
                <span className = "icon-bar"></span>
                <span className = "icon-bar"></span>                       
              </button>
            </div>
            <div className = "col-xs-12">
                <p style = {styles.hlarge}>Bagpao Travel</p>
            </div>
            <div className = "collapse navbar-collapse" id = "navb">
              <ul className = "nav navbar-nav navbar-right">
                <li><a href = "/login"><h4>Login/Sign Up</h4></a></li>
              </ul>
              <ul className ="nav navbar-nav">
                <li style = {styles.header_menu}><a href = "/"><h4>Home</h4></a></li>
                <li style = {styles.header_menu}><a href = "/trips"><h4>Trips</h4></a></li>
                <li style = {styles.header_menu}><a href = "/places"><h4>Places</h4></a></li>
                <li style = {styles.header_menu}><a href = "/contact"><h4>Contact Us</h4></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

export default Navbar