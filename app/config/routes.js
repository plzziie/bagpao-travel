import React from 'react'
import ReactRouter from 'react-router'
import { Router } from 'react-router'
import { Route } from 'react-router'
import { browserHistory } from 'react-router'
import { IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../containers/HomeContainer'
import LoginForm from '../containers/LoginFormContainer'
import Forget from '../containers/ForgetContainer'
import SignupForm from '../containers/SignupFormContainer'
import Profile from '../containers/ProfileContainer'
import Trips from '../containers/TripsContainer'
import Places from '../containers/PlacesContainer'
import Place from '../containers/PlaceContainer'
import Contact from '../containers/ContactContainer'
import EditProfile from '../containers/EditProfileContainer'
import TripForm from '../containers/TripDetailContainer'
import PlaceForm from '../containers/PlaceFormContainer'
import StepOne from '../containers/StepOneContainer'
import StepTwo from '../containers/StepTwoContainer'
import StepThree from '../containers/StepThreeContainer'
import StepFour from '../containers/StepFourContainer'
import StepHotel from '../containers/StepHotelContainer'
import Admin from '../admin/Admin'
import Admin_place from '../admin/Admin_place'
import Admin_trip from '../admin/Admin_trip'
import Admin_member from '../admin/Admin_member'
import Admin_review from '../admin/Admin_review'
import Admin_transport from '../admin/Admin_transport'
import Admin_edittransport from '../admin/Admin_edittransport'
import Admin_editplace from '../admin/Admin_editplace'
import Admin_editmember from '../admin/Admin_editmember'
import Admin_edittrip from '../admin/Admin_edittrip'

import {requireAuth, requireAdmin, requireUser} from '../lib/AuthService';

var routes = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {Main}>
      <IndexRoute component = {Home} />
      <Route path = 'trips' header = 'Find the trips' component = {Trips}/>
      <Route path = 'places' header = 'Find the places' component = {Places}/>
      <Route path = 'contact' header = 'Contact Us' component = {Contact}/>
      <Route path = 'login' header = 'Login' component = {LoginForm}/>
      <Route path = 'forget' header = 'Forget Password' component = {Forget}/>
      <Route path = 'signup' header = 'Sign Up' component = {SignupForm}/>
      <Route path = 'editprofile' component = {EditProfile} onEnter = {requireUser}/>
      <Route path = 'trips-details/:id' component = {TripForm}/>
      <Route path = 'places-details/:id' component = {PlaceForm}/>
      <Route path = 'stepone' component = {StepOne} onEnter = {requireAuth}/>
      <Route path = 'steptwo' component = {StepTwo} onEnter = {requireAuth}/>
      <Route path = 'stepthree' component = {StepThree} onEnter = {requireAuth}/>
      <Route path = 'stepfour' component = {StepHotel} onEnter = {requireAuth}/>
      <Route path = 'stepfive' component = {StepFour} onEnter = {requireAuth}/>
      <Route path = 'places/:type' component = {Place}/>
      <Route path = 'profile' component={Profile} onEnter = {requireUser}/>
    </Route>

      <Route path = '/admin' component = {Admin} onEnter = {requireAdmin}>
        <Route path = '/admin_trip' component = {Admin_trip} onEnter = {requireAdmin}/>
        <Route path = '/admin_place' component = {Admin_place} onEnter = {requireAdmin}/>
        <Route path = '/admin_member' component = {Admin_member} onEnter = {requireAdmin}/>
        <Route path = '/admin_transport' component = {Admin_transport} onEnter = {requireAdmin}/>
        <Route path = '/editplace/:name' component = {Admin_editplace} onEnter = {requireAdmin}/>
        <Route path = '/edittransport/:id' component = {Admin_edittransport} onEnter = {requireAdmin}/>
        <Route path = '/editmember/:username' component = {Admin_editmember} onEnter = {requireAdmin}/>
        <Route path = '/edittrip/:name' component = {Admin_edittrip} onEnter = {requireAdmin}/>
        <Route path = '/editreview/:name' component = {Admin_review} onEnter = {requireAdmin}/>
      </Route>
  </Router>

);

export default routes
