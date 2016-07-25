import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class SettingsDatabase extends React.Component {
  constructor() {
    super();
    this.state = {
      databases: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.get('settings/databases', (databases) => {
      this.setState({databases});
    }, 'json');
  }

  handleDelete(id) {
    $.ajax({
      url: 'settings/database',
      type: 'DELETE',
      data: {id},
      success: () => {
        this.getData();
        alert('Delete ok');
      },
      error: () => {
        alert('Failed');
      }
    })
  }

  render() {
    const { databases } = this.state;

    return <div class="settings-database">
      <h2>Database list</h2>
      <table class="table">
        <thead>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>host</td>
          <td>username</td>
          <td>password</td>
          <td>dbname</td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        {databases.map(
          (database, index) => <tr key={index}>
            <td>{ database.id }</td>
            <td>{ database.name }</td>
            <td>{ database.host }</td>
            <td>{ database.username }</td>
            <td>{ database.password }</td>
            <td>{ database.dbname }</td>
            <td><button onClick={() => this.handleDelete(database.id)}>Delete</button></td>
          </tr>
        )}
        </tbody>
      </table>
      <div>
        <Link to="settings/database/add">Add</Link>
      </div>
    </div>
  }
}