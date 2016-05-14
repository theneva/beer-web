import React, {
    Component,
    PropTypes
} from 'react';

import {connect} from 'react-redux';

import LoginForm from '../components/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm.jsx';

class AuthContainer extends Component {
  constructor() {
    super();
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onSubmitLogin(username, password) {
    console.log('attempting to log in as', username, password);
    fetch(this.props.authenticateUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
        .then(res => {
          console.log('res', res);
          if (res.status === 401) {
            throw "Unauthorized";
          } else {
            return res.text()
          }
        })
        .then(token => {
          console.log('token', token);
          this.props.clearError();

          fetch(this.props.meUrl, {
            headers: {
              'X-Token': token
            }
          })
              .then(res => res.json())
              .then(({user, favorites}) => {
                console.log('user', user, 'fav', favorites)
                this.props.setCurrentUsername(user.username);
                this.props.setFavorites(favorites);
              })
              .catch(err => {
                console.error('caught error', err);
              });
        })
        .catch(err => {
          console.log('err', err);
          this.props.reportError('Wrong username or password!');
        });
  }

  render() {
    return (
        <div>
          <LoginForm error={this.props.error}
                     onSubmit={() => this.onSubmitLogin(this.props.loginUsername, this.props.loginPassword)}
                     onUpdateUsername={username => {
                       console.log('updating username to', username);
                       this.props.setLoginUsername(username);
                     }}
                     onUpdatePassword={this.props.setLoginPassword}/>
          <hr/>
          <RegisterForm/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  loginUsername: state.auth.loginUsername,
  loginPassword: state.auth.loginPassword,
  error: state.auth.error,
  authenticateUrl: state.api.authenticateUrl,
  meUrl: state.api.meUrl
});

const mapDispatchToProps = dispatch => ({
  setLoginUsername: username => dispatch({
    type: 'set login username',
    username
  }),
  setLoginPassword: password => dispatch({
    type: 'set login password',
    password
  }),
  reportError: (message) => dispatch({
    type: 'report error',
    error: message
  }),
  clearError: () => dispatch({
    type: 'clear error'
  }),
  setToken: token => dispatch({
    type: 'set token',
    token
  }),
  setCurrentUsername: username => dispatch({
    type: 'set current username',
    username
  }),
  setFavorites: favorites => dispatch({
    type: 'set favorites',
    favorites
  })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthContainer);

AuthContainer.propTypes = {};

