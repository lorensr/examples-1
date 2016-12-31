import 'babel-polyfill';
import React from 'react';
import Helmet from 'react-helmet';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider } from 'material-ui';
import { AccountsClient } from '@accounts/accounts';
import '@accounts/react-material-ui';
import { accountRoutes } from '@accounts/react';
import packageConf from '../../package.json';

injectTapEventPlugin();

AccountsClient.config({
  title: 'rest-example',
}, {});

const Home = () => <div />;

render((
  <div>
    <Helmet
      title={`${packageConf.name} ${packageConf.version}`}
      meta={[
        {
          name: 'description',
          content: `${packageConf.description}`,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ]}
    />
    <MuiThemeProvider>
      <Router history={browserHistory}>
        {accountRoutes()}
      </Router>
    </MuiThemeProvider>
  </div>
), document.getElementById('root')); //eslint-disable-line
