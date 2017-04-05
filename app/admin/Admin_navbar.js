import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'
import style from '../admin/admin.css'


class Admin_navbar extends Component {
  render() {
    return (
           <div>
             <ul className="nav nav-pills nav-stacked">
                 <li>
                     <a href="/admin_trip">
                         Trips
                     </a>
                 </li>
                 <li>
                     <a href="/admin_place">Places</a>
                 </li>
                 <li>
                     <a href="/admin_member">Members</a>
                 </li>
                 <li>
                     <a href="/Admin_transport">Transportation</a>
                 </li>

             </ul>

           </div>
        )
      }
    }
export default Admin_navbar
