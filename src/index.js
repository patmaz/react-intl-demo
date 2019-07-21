import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, defineMessages, addLocaleData} from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/pl';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

addLocaleData([...locale_en, ...locale_de]);

const messages = defineMessages({
  en: {
    id: 'hello.en',
    defaultMessage: 'Wazzup',
  },
  pl: {
    id: 'hello.pl',
    defaultMessage: 'Siemka PL',
  },
});

const urlParams = new URLSearchParams(window.location.search);
const locale = urlParams.get('locale') || 'en';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
