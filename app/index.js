import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Login from './Login';

ReactDOM.render(
	<AppContainer>
		<Login />
	</AppContainer>,
	document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Login', () => {
    const NextApp = require('./Login').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}