require('../sass/style.scss');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout.jsx';
import Home from './page/Home.jsx';

import Settings from './page/settings/Settings.jsx';
import SettingsDatabase from './page/settings/Database.jsx';
import SettingsDatabaseAdd from './page/settings/database/Add.jsx';
import SettingsDih from './page/settings/Dih.jsx';
import SettingsDihAdd from './page/settings/DihAdd.jsx';

import HyperlinkStatus from './page/hyperlink/Status.jsx';

import Autonomy from './page/Autonomy.jsx';
import AutonomyDih from './page/autonomy/Dih.jsx';


const app = document.getElementById('app');

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="settings" component={Settings}>
        <Route path="database" component={SettingsDatabase} />
        <Route path="database/add" component={SettingsDatabaseAdd} />
        <Route path="dih" component={SettingsDih} />
        <Route path="dih/add" component={SettingsDihAdd} />
      </Route>
      <Route path="hyperlink">
        <Route path="status" component={HyperlinkStatus} />
      </Route>
      <Route path="autonomy" component={Autonomy}>
        <Route path="dih" component={AutonomyDih} />
      </Route>
    </Route>
  </Router>,
  app
);