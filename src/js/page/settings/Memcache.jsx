import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class Memcache extends React.Component {
  constructor() {
    super();
    this.state = {
      memcaches: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    $.get('settings/memcache', (data) => {
      this.setState({memcaches: data});
    }, 'json');
  }

  handleDelete(id) {
    $.ajax({
      url: 'settings/memcache',
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
    const {memcaches} = this.state;

    return <div class="memcache">
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
        {memcaches.map(
          (mc, index) => <tr key={index}>
            <td>{ mc.id }</td>
            <td>{ mc.name }</td>
            <td>{ mc.host }</td>
            <td>{ mc.port }</td>
            <td>
              <button onClick={() => this.handleDelete(mc.id)}>Delete</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
      <div class="bottom-btn-wrap">
        <Link to="/settings/memcache/add">
          <button>Add</button>
        </Link>
      </div>
    </div>;
  }
}