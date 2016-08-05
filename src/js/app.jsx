require('react-select/dist/react-select.css');
require('../sass/style.scss');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout.jsx';
import Home from './page/Home.jsx';

import SettingsUser from './page/settings/User.jsx';
import SettingsUserAdd from './page/settings/UserAdd.jsx';
import Settings from './page/settings/Settings.jsx';
import SettingsDatabase from './page/settings/Database.jsx';
import SettingsDatabaseAdd from './page/settings/database/Add.jsx';
import SettingsDih from './page/settings/Dih.jsx';
import SettingsDihAdd from './page/settings/DihAdd.jsx';
import SettingsDah from './page/settings/Dah.jsx';
import SettingsDahAdd from './page/settings/DahAdd.jsx';
import SettingsMemcache from './page/settings/Memcache.jsx';
import SettingsMemcacheAdd from './page/settings/MemcacheAdd.jsx';
import SettingsDataGap from './page/settings/DataGap.jsx';
import SettingsDataGapAdd from './page/settings/DataGapAdd.jsx';

import HyperlinkStatus from './page/hyperlink/Status.jsx';

import Autonomy from './page/Autonomy.jsx';
import AutonomyDih from './page/autonomy/Dih.jsx';
import AutonomyDah from './page/autonomy/Dah.jsx';
import AutonomyDataGap from './page/autonomy/DataGap.jsx';

import Memcache from './page/Memcache.jsx';


const app = document.getElementById('app');

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="settings" component={Settings}>
        <Route path="user" component={SettingsUser} />
        <Route path="user/add" component={SettingsUserAdd} />
        <Route path="database" component={SettingsDatabase} />
        <Route path="database/add" component={SettingsDatabaseAdd} />
        <Route path="dih" component={SettingsDih} />
        <Route path="dih/add" component={SettingsDihAdd} />
        <Route path="dah" component={SettingsDah} />
        <Route path="dah/add" component={SettingsDahAdd} />
        <Route path="memcache" component={SettingsMemcache} />
        <Route path="memcache/add" component={SettingsMemcacheAdd} />
        <Route path="data_gap" component={SettingsDataGap} />
        <Route path="data_gap/add" component={SettingsDataGapAdd} />
      </Route>
      <Route path="hyperlink">
        <Route path="status" component={HyperlinkStatus} />
      </Route>
      <Route path="autonomy" component={Autonomy}>
        <Route path="dih" component={AutonomyDih} />
        <Route path="dah" component={AutonomyDah} />
        <Route path="data_gap" component={AutonomyDataGap} />
      </Route>
      <Route path="memcache" component={Memcache} />
    </Route>
  </Router>,
  app
);