import React, {Component} from 'react'
import ReactRouter from 'react-router'
import styles from '../styles'
import style from '../styles/detail.css'

function PlaceForm (props) {
  return(
    <div className="container-fluid">
    	<div className = "text-center">
        	<div className="detail_header "> Wat Phra Si Rattana Satsadaram </div>
           <img className = "img " src="app/img/places/000018.jpg" alt = "wat"  width="376" height="251"/></div>
           <div className="contentdetail col-md-offset-3 col-md-6">
           <label>Description</label>
           <p>Wat Phra Kaew (Thai: วัดพระแก้ว) is regarded as the most sacred Buddhist temple (wat)
              in Thailand. The Emerald Buddha housed in the temple is a potent religio-political symbol and the palladium
              (protective image) of Thai society.It is located in Phra Nakhon District, the historic centre of Bangkok.</p>

           <label>Contact</label> <p>Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200</p>
         </div>

    </div>
    )
  }

export default PlaceForm
