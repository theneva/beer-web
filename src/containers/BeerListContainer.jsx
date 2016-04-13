import React, {
    Component,
    PropTypes
} from 'react';

import {connect} from 'react-redux';

import BeerList from '../components/BeerList.jsx';

class BeerListContainer extends Component {
  render() {
    const {beers} = this.props;

    return (
        <div>
          <BeerList beers={beers}/>
        </div>
    );
  }
}

BeerListContainer.propTypes = {
  beers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  ...state.beers
});

export default connect(
    mapStateToProps
)(BeerListContainer);
