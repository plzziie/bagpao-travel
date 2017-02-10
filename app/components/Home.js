import React, {Component} from 'react'
import ReactRouter from 'react-router'
import {Link} from 'react-router'
import CreatePlan from '../components/CreatePlan'
import styles from '../styles'

class Home extends Component {
  //componentDidMout() {
    //fetch(`http://localhost:3000/posts/1`)
  //.then(function(response) {
  //  return response.text()
//  }).then(function(body) {
//    document.body.innerHTML = body
//  })
  //}
  render() {
    return (
      <div>
        <div className = "jumbotron col-xs-6 col-xs-offset-3" style = {styles.transparentBg}>
          <CreatePlan/>
        </div>

        <div className = "jumbotron col-xs-12 text-center" style = {styles.transparentBg}>
          <h2><u> POPULAR TRIPS </u></h2>
        </div>
        <div className = "row" style = {styles.space}>
        <div className = "col-xs-4" style = {styles.center}>
          <img className = "img" src = "app/img/chiangmai.jpg" alt = "doisuthep" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>Doi Suthep-Pui National Park</h4>
          <h5>Chiangmai</h5>
        </div>
        <div className = "col-xs-4" style = {styles.center}>
          <img className = "img" src = "app/img/samui.jpg" alt = "samui" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>Samui Island</h4>
          <h5>Surat Thani</h5>
        </div>
        <div className  = "col-xs-4" style = {styles.center}>
          <img className = "img" src="app/img/huahin.jpg" alt = "samroiyot" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>Khao Sam Roi Yot National Park</h4>
          <h5>Prachuap Khiri Khan</h5>
        </div>
        </div>

        <div className = "jumbotron col-xs-12 text-center" style = {styles.transparentBg}>
          <h2><u> POPULAR PLACES </u></h2>
        </div>
        <div className = "row" style = {styles.space}>
        <div className = "col-xs-4" style = {styles.center}>
         <img className = "img" src = "app/img/chiangmai.jpg" alt = "doisuthep" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>Doi Suthep-Pui National Park</h4>
          <h5>Chiangmai</h5>
        </div>
        <div className = "col-xs-4" style = {styles.center}>
          <img className = "img" src = "app/img/samui.jpg" alt = "samui" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>Samui Island</h4>
          <h5>Surat Thani</h5>
        </div>
        <div className  = "col-xs-4" style = {styles.center}>
          <img className = "img" src="app/img/huahin.jpg" alt = "samroiyot" width = "200" height = "150"/>
          <h4 style = {styles.gapp}>Khao Sam Roi Yot National Park</h4>
          <h5>Prachuap Khiri Khan</h5>
        </div>
        </div>
      </div>
    )
  }
}

export default Home
