import React, {
    Component,
    PropTypes
} from 'react';

export default class BeerListItem extends Component {
  render() {
    const {name, category} = this.props;

    return (
        <div className="row">
          <div className="col-xs-6">{name}</div>
          <div className="col-xs-6">{category}</div>
        </div>
    );
  }
}

BeerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};
