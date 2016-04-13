import React, {
    Component,
    PropTypes
} from 'react';

export default class Profile extends Component {
  render() {
    const {username, savedBeers} = this.props;

    return (
        <div>
          <h1>{username}'s profile</h1>

          <h3>Saved beers</h3>
          <ul className="list-group">
            {savedBeers.map(beer => <li key={beer.id} className="list-group-item">{beer.name}</li>)}
          </ul>
        </div>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  savedBeers: PropTypes.array.isRequired,
};
