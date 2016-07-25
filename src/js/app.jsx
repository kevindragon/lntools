require('../sass/style.scss');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Nav from './component/nav/Nav.jsx';
import Home from './page/Home.jsx';
import SettingsDatabase from './page/settings/Database.jsx';
import SettingsDatabaseAdd from './page/settings/database/Add.jsx';
import StatusHyperlink from './page/status/Hyperlink.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div class="container">
        <Nav />
        <div class="playground">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const app = document.getElementById('app');

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="settings">
        <Route path="database" component={SettingsDatabase} />
        <Route path="database/add" component={SettingsDatabaseAdd} />
      </Route>
      <Route path="status">
        <Route path="hyperlink" component={StatusHyperlink} />
      </Route>
    </Route>
  </Router>,
  app
);