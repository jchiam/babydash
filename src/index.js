/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension, react/no-children-prop */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Dashboard from 'Dashboard';

import 'styles/stylesheet.scss';

// check environment
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction || !!module.hot) {
  ReactDOM.render(<Dashboard />, document.getElementById('root'));
} else {
  ReactDOM.render(
    <AppContainer>
      <Dashboard />
    </AppContainer>,
    document.getElementById('root')
  );
  module.hot.accept();
}
