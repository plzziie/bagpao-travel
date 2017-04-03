import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin extends Component {
  render() {
    return (
      <div className="container-fluid">
           <ul className="nav nav-pills nav-stacked">
               <li className="active">
                   <a href="#">
                       Transportation
                   </a>
               </li>
               <li>
                   <a href="#">Dashboard</a>
               </li>
               <li>
                   <a href="#">Shortcuts</a>
               </li>
               <li>
                   <a href="#">Overview</a>
               </li>
               <li>
                   <a href="#">Events</a>
               </li>
               <li>
                   <a href="#">About</a>
               </li>
               <li>
                   <a href="#">Services</a>
               </li>
               <li>
                   <a href="#">Contact</a>
               </li>
           </ul>

           <div className="admin_content">
           </div>
       </div>

/*
       <div id="page-content-wrapper">
           <div className="container-fluid">
               <div className="row">
                   <div className="col-lg-12">
                       <h1>Simple Sidebar</h1>
                       <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
                       <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>

                   </div>
               </div>
           </div>
       </div> */
/* page content*/






    )
  }
}

export default Admin
