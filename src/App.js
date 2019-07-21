import React from 'react';
import {injectIntl} from 'react-intl';

import './App.css';

class App extends React.Component {
  render() {
    const {formatMessage, locale, messages} = this.props.intl;
    return (
      <div className="App">
        {formatMessage(messages[locale])}
      </div>
    );
  }
}

export default injectIntl(App);
