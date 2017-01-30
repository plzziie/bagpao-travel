import React from 'react'
import styles from '../styles'
import Contact from '../components/Contact'
 
var ContactContainer = React.createClass({

  getInitialState: function() {
    return {
      message: ''
    };
  },

  handleSubmit: function (event) {
    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  },

  sendFormData: function () {
    var formData = {
      email: React.findDOMNode(this.refs.email).value,
      name: React.findDOMNode(this.refs.name).value
    };
  },

  requestBuildQueryString: function (params) {
    var queryString = [];
    for(var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  },

  getSelected: function (fieldName) {
    var i;
    var fields = document.getElementsByName(fieldName);
    var selectedFields = [];
    for (i = 0; i < fields.length; i++) {
      if (fields[i].checked === true) {
        selectedFields.push(fields[i].value);
      }
    }
    return selectedFields.join(', ');
  },

  render: function () {
    return(
     <Contact
     onSubmitUser = {this.handleSubmit}
     sendFormData = {this.sendFormData}
     requestBuildQueryString = {this.requestBuildQueryString}
     getSelected = {this. getSelected}
     header = {this.props.route.header}
     message = {this.state.message}
     />
    )
  }
});
 
export default ContactContainer