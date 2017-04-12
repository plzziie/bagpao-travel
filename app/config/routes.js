import React from 'react'
import ReactRouter from 'react-router'
import { Router } from 'react-router'
import { Route } from 'react-router'
import { browserHistory } from 'react-router'
import { IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../containers/HomeContainer'
import LoginForm from '../containers/LoginFormContainer'
import SignupForm from '../containers/SignupFormContainer'
import Trips from '../containers/TripsContainer'
import Places from '../containers/PlacesContainer'
import Contact from '../containers/ContactContainer'
import Member from '../containers/MemberContainer'
import EditProfile from '../components/EditProfile'
import MyTrip from '../components/MyTrip'
import Draft from '../components/Draft'
import Favorite from '../components/Favorite'
import DetailsForm from '../components/DetailsForm'
import PlaceForm from '../components/PlaceForm'
import StepOne from '../containers/StepOneContainer'
import StepTwo from '../containers/StepTwoContainer'
import StepThree from '../containers/StepThreeContainer'
import StepFour from '../containers/StepFourContainer'
import Admin from '../admin/Admin'
import Admin_place from '../admin/Admin_place'
import Admin_trip from '../admin/Admin_trip'
import Admin_member from '../admin/Admin_member'
import Admin_transport from '../admin/Admin_transport'

var routes = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {Main}>
      <IndexRoute component = {Home} />
      <Route path = 'trips' header = 'Find the trips' component = {Trips}/>
      <Route path = 'places' header = 'Find the places' component = {Places}/>
      <Route path = 'contact' header = 'Contact Us' component = {Contact}/>
      <Route path = 'login' header = 'Login' component = {LoginForm}/>
      <Route path = 'signup' header = 'Sign Up' component = {SignupForm}/>
      <Route path = 'member' component = {Member}/>
      <Route path = 'editprofile' component = {EditProfile}/>
      <Route path = 'mytrip' component = {MyTrip}/>
      <Route path = 'draft' component = {Draft}/>
      <Route path = 'favorite' component = {Favorite}/>
      <Route path = 'trips-details' component = {DetailsForm}/>
      <Route path = 'places-details' component = {PlaceForm}/>
      <Route path = 'stepone' component = {StepOne}/>
      <Route path = 'steptwo' component = {StepTwo}/>
      <Route path = 'stepthree' component = {StepThree}/>
      <Route path = 'stepfour' component = {StepFour}/>
    </Route>

      <Route path = '/admin' component = {Admin}>
        <Route path = '/admin_trip' component = {Admin_trip}/>
        <Route path = '/admin_place' component = {Admin_place}/>
        <Route path = '/admin_member' component = {Admin_member}/>
        <Route path = '/admin_transport' component = {Admin_transport}/>
      </Route>
  </Router>

);

export default routes
