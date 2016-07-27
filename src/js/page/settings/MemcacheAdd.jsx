import React from 'react';
import $ from 'jquery';

export default class MemcacheAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      host: '',
      port: ''
    };
  }

  updateField(name, value) {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  handleSubmit() {
    const { name, host, port } = this.state;
    $.post('settings/memcache', {
      name, host, port
    }, () => {
      alert('post ok');
      location.href = '#/settings/memcache';
    }, 'json');
  }

  render() {
    return <div class="memcache-add">
      <table class="table">
        <tbody>
        <tr>
          <td>name:</td>
          <td>
            <input type="text"
                   onChange={(e) => this.updateField('name', e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>host:</td>
          <td>
            <input type="text"
                   onChange={(e) => this.updateField('host', e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>port:</td>
          <td>
            <input type="text"
                   onChange={(e) => this.updateField('port', e.target.value)} />
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