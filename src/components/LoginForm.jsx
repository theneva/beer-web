import React, {
    Component,
    PropTypes
} from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="#" onSubmit={() => console.log('login')}>
          <div className="form-group">
            <label for="login-username">Username</label>
            <input id="login-username" type="text" className="form-control" placeholder="Username"/>
          </div>
          <div className="form-group">
            <label for="login-password">Password</label>
            <input id="login-password" type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {

};
