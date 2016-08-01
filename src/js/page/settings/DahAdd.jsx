import React from 'react';
import $ from 'jquery';

export default class DahAdd extends React.Component {
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

    $.post('settings/dah', {
      name, host, port
    }, () => {
      alert('post ok');
      location.href = '#/settings/dah';
    }, 'json');
  }

  render() {
    return <div class="dah-add">
      <h2>Add a dah</h2>
      <table class="table">
        <tbody>
        <tr>
          <td>name:</td>
          <td>
            <input type="text"
                   onChange={(e) => this.updateField('name', e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>host:</td>
          <td>
            <input type="text"
                   onChange={(e) => this.updateField('host', e.target.value)}/>
          </td>
        </tr>
        <tr>
          <td>port:</td>
          <td>
            <input type="text"
                   onChange={(e) => this.updateField('port', e.target.value)}/>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="bottom-btn-wrap">
        <button onClick={() => this.handleSubmit()}>Add</button>
      </div>
    </div>;
  }
}