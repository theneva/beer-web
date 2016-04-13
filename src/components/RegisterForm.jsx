import React, {
    Component,
    PropTypes
} from 'react';

export default class RegisterForm extends Component {
  render() {
    return (
        <div>
          <h1>Register</h1>
          <form action="#" onSubmit={() => console.log('register')}>
            <div className="form-group">
              <label for="register-username">Username</label>
              <input id="register-username" type="text" className="form-control" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label for="register-password">Password</label>
              <input id="register-password" type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-group">
              <label for="register-password-verification">Verify password</label>
              <input id="register-password-verification" type="password" className="form-control" placeholder="Verify password"/>
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>

    );
  }
}

RegisterForm.propTypes = {

};
