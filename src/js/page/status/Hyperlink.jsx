import React from 'react';
import $ from 'jquery';

export default class Hyperlink extends React.Component {
  constructor() {
    super();
    this.state = {
      article: [],
      oprLoadStatus: [],
      parallel: []
    };
    this.loading = false;
    this.inteval = null;
  }

  componentDidMount() {
    this.getData();
    this.inteval = setInterval(() => {
      this.getData();
    }, 20000)
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  getData() {
    if (this.loading) return;

    this.loading = true;

    $.get('status/hyperlink', (data) => {
      this.setState(data);
      this.loading = false;
    }, 'json');
  }

  render() {
    const { article, oprLoadStatus, parallel } = this.state;

    return <div class="hyperlink">
      <h2>Hyperlink Status</h2>
      <h3>lnc.article</h3>
      <table class="table">
        <thead>
        <tr>
          <th>provider id</th>
          <th>status</th>
          <th>count</th>
        </tr>
        </thead>
        <tbody>
        {article.map(
          (row, index) => <tr key={index}>
            <td>{row.provider_id}</td>
            <td>{row.status}</td>
            <td>{row.cnt}</td>
          </tr>
        )}
        </tbody>
      </table>
      <hr/>
      <h3>lnc.parallel</h3>
      <table class="table">
        <thead>
        <tr>
          <th>count</th>
        </tr>
        </thead>
        <tbody>
        {parallel.map(
          (row, index) => <tr key={index}>
            <td>{row.cnt}</td>
          </tr>
        )}
        </tbody>
      </table>
      <hr/>
      <h3>stg.opr_load_status</h3>
      <table class="table">
        <thead>
        <tr>
          <th>provider id</th>
          <th>status</th>
          <th>count</th>
        </tr>
        </thead>
        <tbody>
        {oprLoadStatus.map(
          (row, index) => <tr key={index}>
            <td>{row.provider_id}</td>
            <td>{row.status}</td>
            <td>{row.cnt}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>;
  }
}