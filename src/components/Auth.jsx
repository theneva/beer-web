import React, {
    Component,
    PropTypes
} from 'react';

import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

export default class Auth extends Component {
  render() {
    return (
        <div>
          <LoginForm/>
          <hr/>
          <RegisterForm/>
        </div>
    );
  }
}

Auth.propTypes = {};

