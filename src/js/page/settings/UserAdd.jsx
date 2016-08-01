import React from 'react';
import $ from 'jquery';

export default class UserAdd extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      passport: ''
    };
  }

  updateField(name, value) {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  handleSubmit() {
    const { name, passport } = this.state;

    $.ajax({
      url: 'settings/user',
      type: 'PUT',
      data: {name, passport},
      dataType: 'json',
      success: () => {
        location.href = '#/settings/user';
      },
      error: () => {
        alert('error');
      }
    });
  }

  render() {
    return <div class="dih-add">
      <h2>Add a user</h2>
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
          <td>passport:</td>
          <td>
            <input type="text"
                   onChange={(e) => this.updateField('passport', e.target.value)}/>
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