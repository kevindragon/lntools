import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      canAdd: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.get('settings/user', (data) => {
      this.setState(data);
    }, 'json');
  }

  handleDelete(id) {
    $.ajax({
      url: 'settings/user',
      type: 'DELETE',
      data: {id},
      success: () => {
        this.getData();
      },
      error: () => {
        alert('error');
      }
    });
  }

  render() {
    const { users, canAdd } = this.state;

    return <div class="user">
      <table class="table">
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>passport</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {users.map(
          (user, index) => <tr key={index}>
            <td>{ user.id }</td>
            <td>{ user.name }</td>
            <td>{ user.passport }</td>
            <td>
              <button onClick={() => this.handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
      {canAdd ? <div class="bottom-btn-wrap">
        <Link to="/settings/user/add">
          <button>Add</button>
        </Link>
      </div> : null}
    </div>;
  }
}