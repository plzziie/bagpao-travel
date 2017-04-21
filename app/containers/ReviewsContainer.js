import React, {Component} from 'react'
import Reviews from '../components/Reviews'

class ReviewsContainer extends Component {

  constructor () {
    super()
    this.state = {
      show: [],
      comment: '',
      tripname: ''
    }
  }

  componentDidMount() {
    fetch(`http://localhost:1200/reviews`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tripname: this.props.params.id
      })
    })
    .then(function (response) {
      return response.text()
    }).then(function (body) {
      var myObj = JSON.parse(body);
      if (myObj.message === undefined) {
        this.setState({
            show: myObj
        });
      }
    }.bind(this))
  }

  handleUpdateReview(event) {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmitComment(event) {
    event.preventDefault();
    fetch(`http://localhost:1200/addreviews`, {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tripname: this.props.params.id,
        comment: this.state.comment,
        username: getIdToken()
        })
    })


  render() {
    return(
     <Reviews
     show = {this.state.show}
     onUpdateReview={(event) => this.handleUpdateReview(event)}
     onUpdateComment={(event) => this.handleSubmitComment(event)}
     />
    )
  }
}

ReviewsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ReviewsContainer
