import React, {
    Component,
    PropTypes
} from 'react';

import {Link} from 'react-router';

export default class HeaderLink extends Component {
  render() {
    const {text, target, active, onSelect} = this.props;

    return (
        <li className={active ? 'active' : ''}>
          <Link to={target} onClick={onSelect}>{text}</Link>
        </li>
    );
  }
}

HeaderLink.propTypes = {
  text: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};
