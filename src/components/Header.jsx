import React, {
    Component,
    PropTypes
} from 'react';

import {Link} from 'react-router';

import HeaderLink from './HeaderLink.jsx';

export default class Header extends Component {
  render() {
    const { headers, activeHeader, onSelect, currentUsername } = this.props;

    return (
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" onClick={() => onSelect('home')} className="navbar-brand">
                Beer app
              </Link>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                {headers.map(header =>(
                    <HeaderLink {...header}
                        key={header.id}
                        active={activeHeader === header.id}
                        onSelect={() => onSelect(header.id)}/>
                    ))}
              </ul>
              {
                currentUsername
                  ?
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                          <Link to="/me" onClick={() => onSelect('profile')}>{currentUsername}</Link>
                      </li>
                      <li>
                          <Link to="/" onClick={() => console.log('signing out')}>Sign out</Link>
                      </li>
                    </ul>
                  :
                    <ul className="nav navbar-nav navbar-right">
                      <Link to="/login" onClick={() => onSelect('login')}>Sign in</Link>
                    </ul>
              }
            </div>
          </div>
        </nav>
    );
  }
}

Header.propTypes = {
  headers: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  currentUsername: PropTypes.string
};
