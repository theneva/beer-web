import React, {
    Component,
    PropTypes
} from 'react';

import BeerListItem from './BeerListItem.jsx';

export default class BeerList extends Component {
  render() {
    const {beers} = this.props;

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
                  key={beer._id}/>
          ))}
        </div>
      </div>
    );
  }
}

BeerList.propTypes = {
  beers: PropTypes.array.isRequired
};
