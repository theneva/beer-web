import React, {
    Component,
    PropTypes
} from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.props.error ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {this.props.error}
            </div>
        ) : ''}
        <form action="#" onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit();
        }}>
          <div className="form-group">
            <label for="login-username">Username</label>
            <input id="login-username"
                   type="text"
                   onChange={e => this.props.onUpdateUsername(e.target.value)}
                   className="form-control"
                   placeholder="Username"/>
          </div>
          <div className="form-group">
            <label for="login-password">Password</label>
            <input id="login-password"
                   type="password"
                   onChange={e => this.props.onUpdatePassword(e.target.value)}
                   className="form-control"
                   placeholder="Password"/>
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
