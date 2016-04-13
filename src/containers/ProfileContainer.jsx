import React, {
    Component,
    PropTypes
} from 'react';

import {connect} from 'react-redux';

import Profile from '../components/Profile.jsx';

class ProfileContainer extends Component {
  render() {
    const {username, savedBeers} = this.props;

    return (
        <Profile username={username} savedBeers={savedBeers}/>
    );
  }
}

ProfileContainer.propTypes = {
  username: PropTypes.string.isRequired,
  savedBeers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  ...state.profile
});

export default connect(
  mapStateToProps
)(ProfileContainer);
