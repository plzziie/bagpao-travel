import React, {Component} from 'react';
import styles from '../styles';

class LoginForm extends Component {

  render() {

    return (
      <div className = "jumbotron col-sm-8 col-sm-offset-2" style={styles.transparentBg}>

          <form onSubmit = "">
            <div className="form-group text-left">
              <input
                className='form-control'
                placeholder='username'
                type='text' />
            </div>
            <div className="form-group">
              <input
                className='form-control'
                placeholder='password'
                type='text' />
            </div>


            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                 Login
              </button>
            </div>
          </form>
      </div>

    );
  }
}


export default LoginForm;
