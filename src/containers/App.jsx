import React, {
    Component
} from 'react';

import HeaderContainer from './HeaderContainer.jsx';

export default class App extends Component {
  render() {
    const { children } = this.props;

    return (
        <div>
          <HeaderContainer/>
          <div className="container">
            {children}
          </div>
        </div>
    );
  }
}
