import React, {Component} from 'react'
import ReactRouter from 'react-router'
import { login, logout, isLoggedIn, getIdToken} from '../lib/AuthService';
import styles from '../styles'
import style from '../styles/test1.css'


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default bgwhite"  >
    <div className="container bgwhite">


        <div className="navbar">
          <div >
            <a href = "/" ><img className="img_header" src = "./app/img/header.png" /></a>
          </div>

          <button type = "button" className = "navbar-toggle collapsed" data-toggle = "collapse"
          data-target = "#bs-example-navbar-collapse-1" aria-expanded = "false">
            <span className = "sr-only">Toggle navigation</span>
            <span className = "icon-bar"></span>
            <span className = "icon-bar"></span>
            <span className = "icon-bar"></span>
          </button>
        </div>



        <div className = "collapse navbar-collapse" id = "bs-example-navbar-collapse-1" >

          <ul className = "nav navbar-nav navbar-right">
            <li className="header_menu">{(isLoggedIn()) ? (<a href = "/stepone"><h4>Plan</h4></a>)
             : null }</li>
             <li className="header_menu">{(isLoggedIn()) ? (<a href="/mytrip"><h4>{getIdToken()}</h4></a>)
              : null }</li>
            <li className = "header_menu">{(isLoggedIn()) ? (<a><h4 onClick={() => logout()}>Logout</h4></a>)
             : (<a href = "/login"><h4>Login/Sign Up</h4 ></a>)} </li>

          </ul>

          <div className=" col-sm-offset-3 col-md-offset-4 ">
              <ul className = "nav navbar-nav">
                <li><a className = "hvr-underline-from-center header_menu" href = "/"><h4>Home</h4></a></li>
                <li><a className = "hvr-underline-from-center header_menu" href = "/trips"><h4>Trips</h4></a></li>
                <li><a className = "hvr-underline-from-center header_menu" href = "/places"><h4>Places</h4></a></li>
                <li><a className = "hvr-underline-from-center header_menu" href = "/contact"><h4>Contact Us</h4></a></li>
              </ul>
          </div>

        </div>


    </div>
  </nav>

    );
  }
}

export default Navbar
