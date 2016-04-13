import React, {
    Component,
    PropTypes
} from 'react';

import BeerListItem from './BeerListItem.jsx';

export default class BeerList extends Component {
  render() {
    const {beers} = this.props;

    if (!beers) {
      return (
          <h1>Loading beers…</h1>
      );
    }

    if (beers.length === 0) {
      return (
          <h1>No beers to display!</h1>
      );
    }

    return (
      <div>
        <h1>Beers</h1>
        <div className="row">
          <div className="col-xs-6">
            <strong>Name</strong>
          </div>
          <div className="col-xs-6">
            <strong>Category</strong>
          </div>
        </div>
        <div>
          {beers.map(beer => (
              <BeerListItem {...beer}
                  key={beer.id}/>
          ))}
        </div>
      </div>
    );
  }
}

BeerList.propTypes = {
  beers: PropTypes.array
};
