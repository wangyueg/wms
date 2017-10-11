import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from './route';
import { browserHistory } from 'react-router-dom';

ReactDOM.render(
	<AppContainer>
		{createHistory(browserHistory)}
	</AppContainer>,
	document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./route', () => {
    const NextApp = require('./route').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}