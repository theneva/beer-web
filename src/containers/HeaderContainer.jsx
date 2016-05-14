import React, {
    Component,
    PropTypes
} from 'react';

import {connect} from 'react-redux';

import Header from '../components/Header.jsx';

class HeaderContainer extends Component {
  render() {
    const {headers, setActivePage, activePage, currentUsername} = this.props;

    return (
        <Header headers={headers}
            onSelect={key => setActivePage(key)}
            activeHeader={activePage}
            currentUsername={currentUsername}/>
    );
  }
}

HeaderContainer.propTypes = {
  headers: PropTypes.array.isRequired,
  setActivePage: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  currentUsername: PropTypes.string
};

const mapStateToProps = state => ({
  ...state.navigation,
  currentUsername: state.user.username
});

const mapDispatchToProps = dispatch => ({
  setActivePage: id => dispatch({
    type: 'set active page',
    id
  })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
