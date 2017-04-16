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


    )
  }
}


export default Admin
