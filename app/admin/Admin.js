import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'
import style from '../admin/admin.css'
import Admin_navbar from '../admin/Admin_navbar'
import {PropTypes} from 'react'

class Admin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h4>Admin</h4>
        <div className=" sidebar">
        <Admin_navbar/>
      </div>
           <div className="admin_content">
             {this.props.children}
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
