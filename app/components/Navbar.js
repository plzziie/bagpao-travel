import React, {Component} from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';


class Navbar extends Component {

  render() {

    return (

      <nav className = "navbar navbar-default" style = {styles.transparentBg}>
      <div className = "container-fluid">
        <div className="container">
      <div className = "navbar-header">

        <div className='col-md-7 col-md-offset-4'>
          <a href="/" ><img src="./app/img/header.png" style={styles.img_header}  /></a>
        </div>
        <button type = "button" className = "navbar-toggle collapsed" data-toggle = "collapse"
          data-target = "#bs-example-navbar-collapse-1" aria-expanded = "false">
          <span className = "sr-only">Toggle navigation</span>
          <span className = "icon-bar"></span>
          <span className = "icon-bar"></span>
          <span className = "icon-bar"></span>
        </button>

     </div>

      <div className = "collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <div className="row">
          <ul className = "nav navbar-nav navbar-right">
            <li className={styles.header_menu} ><a href = "/login"><h4>Login/Sign Up</h4 ></a></li>
          </ul>
        </div>

        <div className="row">
        <div className = "col-md-7s col-md-offset-4">
          <ul className = "nav navbar-nav">
           <li style = {styles.header_menu}><a href = "/"><h4>Home</h4></a></li>
            <li style = {styles.header_menu}><a href = "/trips"><h4>Trips</h4></a></li>
            <li style = {styles.header_menu}><a href = "/places"><h4>Places</h4></a></li>
            <li style = {styles.header_menu}><a href = "/contact"><h4>Contact Us</h4></a></li>

          </ul>
        </div>
      </div>
    </div>
</div>
    </div>
      </nav>


    );
  }
}

export default Navbar
