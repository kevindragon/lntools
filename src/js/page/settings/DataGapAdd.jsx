import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import Select from 'react-select';

export default class DataGap extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dbId: '',
      dahId: '',
      autnDBName: '',
      sqlStatement: '',
      dahs: [],
      databases: []
    };
  }

  componentDidMount() {
    this.getEngines();
    this.getDatabases();
  }

  getEngines() {
    $.get('settings/dah', (dahs) => {
      this.setState({dahs});
    }, 'json');
  }

  getDatabases() {
    $.get('settings/databases', (databases) => {
      this.setState({databases});
    }, 'json');
  }

  updateField(name, value) {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  dbOptions(databases) {
    return databases.map((db, i) => {
      return {value: db.id, label: db.name}
    });
  }

  dahOptions(dahs) {
    return dahs.map((dah, i) => {
      return {
        value: dah.id,
        label: dah.name + " - " + dah.host + ":" + dah.port
      }
    });
  }

  handleSubmit() {
    const { name, dbId, dahId, autnDBName, sqlStatement } = this.state;
    const data = {name, dbId, dahId, autnDBName, sqlStatement};
    $.ajax({
      url: 'settings/data_gap',
      type: 'PUT',
      data: data,
      success: (data) => {
        location.href = "#/settings/data_gap";
      },
      error: (xhr, status, msg) => {
        alert(msg);
      }
    });
  }

  render() {
    const { dbId, dahId, dahs, databases } = this.state;

    return (
      <div class="data-gap-add">
        <h2>Add another data gap definition</h2>
        <table class="table">
          <tbody>
          <tr>
            <td>name</td>
            <td>
              <input
                type="text"
                onChange={(e) => this.updateField('name', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Database</td>
            <td>
              <Select
                value={dbId}
                options={this.dbOptions(databases)}
                onChange={(o) => this.updateField('dbId', o.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Dah</td>
            <td>
              <Select
                value={dahId}
                options={this.dahOptions(dahs)}
                onChange={(o) => this.updateField('dahId', o.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Autonomy db</td>
            <td>
              <input type="text" onChange={(e) => this.updateField('autnDBName', e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>sql statement</td>
            <td>
              <textarea
                cols="60"
                rows="10"
                onChange={(e) => this.updateField('sqlStatement', e.target.value)}
              />
              <div class="tips">eg.: select id, display from table where datetime_field &gt;= ? and datetime_field &lt;= ?</div>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="bottom-btn-wrap">
          <Link to="settings/data_gap/add">
            <button onClick={() => this.handleSubmit()}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}