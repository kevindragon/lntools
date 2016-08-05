import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class DataGap extends React.Component {
  constructor() {
    super();
    this.state = {
      dataGaps: []
    };
  }

  componentDidMount() {
    this.getDataGaps();
  }

  getDataGaps() {
    $.get('settings/data_gap', (dataGaps) => {
      this.setState({dataGaps});
    }, 'json');
  }

  handleDelete(id) {
    $.ajax({
      url: 'settings/data_gap',
      type: 'DELETE',
      data: {id},
      success: () => {
        this.getDataGaps();
      },
      error: (xhr, status, msg) => {
        alert(msg);
      }
    });
  }

  render() {
    const { dataGaps } = this.state;

    return (
      <div class="data-gap">
        <table class="table">
          <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>dah</th>
            <th>autonomy db</th>
            <th>sql statement</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {dataGaps.map(
            (dataGap, index) => <tr key={index}>
              <td>{ dataGap.id }</td>
              <td>{ dataGap.name }</td>
              <td>{ dataGap.dah_name}-{ dataGap.dah_host }:{ dataGap.dah_port }</td>
              <td>{ dataGap.autn_db_name }</td>
              <td>{ dataGap.sql_statement }</td>
              <td>
                <button onClick={(e) => this.handleDelete(dataGap.id)}>Delete</button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <div class="bottom-btn-wrap">
          <Link to="settings/data_gap/add">
            <button>Add</button>
          </Link>
        </div>
      </div>
    );
  }
}