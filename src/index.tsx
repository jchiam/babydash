import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Dashboard from 'Dashboard';

import 'styles/stylesheet.scss';

if (module.hot) {
  ReactDOM.render(
    <AppContainer>
      <Dashboard />
    </AppContainer>,
    document.getElementById('root')
  );
  module.hot.accept();
} else {
  ReactDOM.render(<Dashboard />, document.getElementById('root'));
}
