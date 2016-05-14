import React, {
    Component,
    PropTypes
} from 'react';

import {connect} from 'react-redux';

import BeerList from '../components/BeerList.jsx';

class BeerListContainer extends Component {
  componentWillMount() {
    const {setBeers} = this.props;

    fetch(this.props.beersUrl)
      .then(res => res.json())
      .then(beers => setBeers(beers))
      .catch(err => console.error('caught error', err));
  }

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
  beers: PropTypes.array
};

const mapStateToProps = state => ({
  ...state.beers,
  beersUrl: state.api.beersUrl
});

const mapDispatchToProps = dispatch => ({
  setBeers: beers => dispatch({
    type: 'set beers',
    beers
  })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerListContainer);
