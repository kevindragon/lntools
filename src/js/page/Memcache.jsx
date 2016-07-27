import React from 'react';
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

  handleClear(id) {
    $.post('memcache/clear', {id}, () => {
      alert('clear ok');
    }, 'json').fail((data, status, statusText) => {
      alert(status + ": " + statusText);
    });
  }

  render() {
    const {memcaches} = this.state;

    return <div class="memcache">
      <h2>Memcache management</h2>
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
              <button onClick={(e) => this.handleClear(mc.id)}>Clear content</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>;
  }
}