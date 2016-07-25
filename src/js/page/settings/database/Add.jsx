import React from 'react';
import $ from 'jquery';

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      host: '',
      username: '',
      password: '',
      dbname: ''
    };
  }

  setField(name, value) {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  handleSubmit() {
    const { name, host, username, password, dbname } = this.state;
    if (!name || !host || !username || !password || !dbname) {
      alert('Fill that field, ok!');
      return;
    }
    $.post('settings/database', {
      name, host, username, password, dbname
    }, () => {
      alert('post ok');
      location.href = '#/settings/database';
    }, 'json');
  }

  render() {
    const { name, host, username, password, dbname } = this.state;
    return <div class="settings-database-add">
      <h2>Add a database</h2>
      <table class="table">
        <tbody>
        <tr>
          <td>name:</td>
          <td>
            <input type="text"
                   value={name}
                   onChange={(e) => this.setField('name', e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>host:</td>
          <td>
            <input type="text"
                   value={host}
                   onChange={(e) => this.setField('host', e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>username:</td>
          <td>
            <input type="text"
                   value={username}
                   onChange={(e) => this.setField('username', e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>password:</td>
          <td>
            <input type="text"
                   value={password}
                   onChange={(e) => this.setField('password', e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>dbname:</td>
          <td>
            <input type="text"
                   value={dbname}
                   onChange={(e) => this.setField('dbname', e.target.value)}/>
          </td>
        </tr>
        </tbody>
      </table>
      <div>
        <button onClick={() => this.handleSubmit()}>Add</button>
      </div>
    </div>;
  }
}