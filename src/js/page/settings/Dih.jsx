import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

export default class Dih extends React.Component {
  constructor() {
    super();
    this.state = {
      dihs: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.get('settings/dih', (dihs) => {
      this.setState({dihs});
    }, 'json');
  }

  handleDelete(id) {
    $.ajax({
      url: 'settings/dih',
      type: 'DELETE',
      data: {id},
      success: () => {
        this.getData();
        alert('delete ok');
      },
      error: () => {
        alert('error');
      }
    });
  }

  render() {
    const { dihs } = this.state;

    return <div class="dih">
      <table class="table">
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>host</th>
          <th>port</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {dihs.map(
          (dih, index) => <tr key={index}>
            <td>{ dih.id }</td>
            <td>{ dih.name }</td>
            <td>{ dih.host }</td>
            <td>{ dih.port }</td>
            <td>
              <button onClick={(e) => this.handleDelete(dih.id)}>Delete</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
      <div>
        <Link to="settings/dih/add"><button>Add</button></Link>
      </div>
    </div>;
  }
}