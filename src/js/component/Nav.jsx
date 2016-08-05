import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      settings: {
        show: false,
        text: "+"
      }
    };
  }

  foldOpen(ref) {
    const { text, show } = this.state[ref];
    var obj = {};
    obj[ref] = {show: !show, text: text == "+" ? "-" : "+"};
    this.setState(obj);
  }

  render() {
    const { settings } = this.state;

    return <div class="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <span onClick={() => this.foldOpen("settings")}
                class="fold">{settings.text} </span>
          <span>Settings</span>
          <ul class={settings.show ? "sub" : "sub hide"} ref="settings">
            <li><Link to="settings/user">User</Link></li>
            <li><Link to="settings/database">Database</Link></li>
            <li><Link to="settings/dih">Dih</Link></li>
            <li><Link to="settings/dah">Dah</Link></li>
            <li><Link to="settings/memcache">Memcache</Link></li>
            <li><Link to="settings/data_gap">Data gap</Link></li>
          </ul>
        </li>
        <li>
          <span>Hyperlink</span>
          <ul class="sub">
            <li>
              <Link to="hyperlink/status">Status</Link>
            </li>
          </ul>
        </li>
        <li>
          <span>Autonomy</span>
          <ul class="sub">
            <li>
              <Link to="autonomy/dih">Dih</Link>
            </li>
            <li>
              <Link to="autonomy/dah">Dah</Link>
            </li>
            <li>
              <Link to="autonomy/data_gap">Data gap</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="memcache">Memcache</Link>
        </li>
        <li>
          <a href="/logout">Sign out</a>
        </li>
      </ul>
    </div>
  }
}