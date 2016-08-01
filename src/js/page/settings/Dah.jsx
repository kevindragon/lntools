import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

export default class Dah extends React.Component {
  constructor() {
    super();
    this.state = {
      dahs: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.get('settings/dah', (dahs) => {
      this.setState({dahs});
    }, 'json');
  }

  handleDelete(id) {
    $.ajax({
      url: 'settings/dah',
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
    const { dahs } = this.state;

    return <div class="dah">
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
        {dahs.map(
          (dah, index) => <tr key={index}>
            <td>{ dah.id }</td>
            <td>{ dah.name }</td>
            <td>{ dah.host }</td>
            <td>{ dah.port }</td>
            <td>
              <button onClick={(e) => this.handleDelete(dah.id)}>Delete</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
      <div class="bottom-btn-wrap">
        <Link to="settings/dah/add">
          <button>Add dah</button>
        </Link>
      </div>
    </div>;
  }
}