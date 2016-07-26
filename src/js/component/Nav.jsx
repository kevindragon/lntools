import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return <div class="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <span>Settings</span>
          <ul class="sub">
            <li><Link to="settings/database"> - Database</Link></li>
            <li><Link to="settings/dih"> - Dih</Link></li>
          </ul>
        </li>
        <li>
          <span>Hyperlink</span>
          <ul class="sub">
            <li>
              <Link to="hyperlink/status">- Status</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>Autonomy</span>
          <ul class="sub">
            <li>
              <Link to="autonomy/dih">- Dih</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  }
}