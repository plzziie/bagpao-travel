import React from 'react'
import ReactRouter from 'react-router'
import { Router } from 'react-router'
import { Route } from 'react-router'
import { browserHistory } from 'react-router'
import { IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Login from '../components/Login'
import Trips from '../containers/TripsContainer'
import Places from '../containers/PlacesContainer'
import Contact from '../containers/ContactContainer'
import Member from '../containers/MemberContainer'
import EditProfile from '../components/EditProfile'
import MyTrip from '../components/MyTrip'
import Draft from '../components/Draft'
import Favorite from '../components/Favorite'
import DetailsForm from '../components/DetailsForm'

var routes = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {Main}>
      <IndexRoute component = {Home} />
      <Route path = 'trips' header = 'Find the trips' component = {Trips}/>
      <Route path = 'places' header = 'Find the places' component = {Places}/>
      <Route path = 'contact' header = 'Contact Us' component = {Contact}/>
      <Route path = 'login' header = 'Login/Sign Up' component = {Login}/>
      <Route path = 'member' component = {Member}/>
      <Route path = 'editprofile' component = {EditProfile}/>
      <Route path = 'mytrip' component = {MyTrip}/>
      <Route path = 'draft' component = {Draft}/>
      <Route path = 'favorite' component = {Favorite}/>
      <Route path = 'places-details' component = {DetailsForm}/>
    </Route>
  </Router>
);

export default routes