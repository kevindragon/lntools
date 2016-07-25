import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return <div class="nav">
      <ul>
        <li>Home</li>
        <li>
          <span>Settings</span>
          <ul class="sub">
            <li><Link to="settings/database"> - Database</Link></li>
          </ul>
        </li>
        <li>
          <span>Status</span>
          <ul class="sub">
            <li>
              <Link to="status/hyperlink">- Hyperlink</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  }
}