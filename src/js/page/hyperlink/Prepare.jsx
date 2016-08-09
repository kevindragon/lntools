import React from 'react';
import Select from 'react-select';
import $ from 'jquery';

export default class Prepare extends React.Component {
  constructor() {
    super();
    this.state = {
      dbId: 0,
      providerId: 0,
      status: 0,
      rows: 0,
      to: 0,
      dbs: []
    };
  }

  componentDidMount() {
    this.getDBData();
  }

  getDBData() {
    $.get("settings/databases", (dbs) => {
      this.setState({dbs});
    }, 'json');
  }

  updateField(name, value) {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  validate() {
    const { dbId, providerId, status, rows, to } = this.state;
    return !(dbId <= 0 || providerId <= 0 || status <= 0 || rows <= 0 || to <= 0);
  }

  handleSubmit() {
    if (!this.validate()) {
      alert('Oops!!!');
      return;
    }

    const { dbId, providerId, status, rows, to } = this.state;
    $.post("hyperlink/prepare", {
      dbId, providerId, status, rows, to
    }, (data) => {
      alert('update ' + data.message);
    }, 'json').fail((xhr, status, msg) => {
      alert('error:' + msg);
    });
  }

  options() {
    const { dbs } = this.state;
    return dbs.map((db) => {
      return {value: db.id, label: db.name}
    });
  }

  render() {
    const { dbId } = this.state;

    return (
      <div class="prepare">
        <h2>Prepare data</h2>
        <h3>Keep data to run hyperlink</h3>
        <table class="table">
          <tbody>
          <tr>
            <td>DB</td>
            <td>
              <Select
                value={dbId}
                options={this.options()}
                onChange={(o) => this.updateField('dbId', o.value)}
              />
            </td>
          </tr>
          <tr>
            <td>provider id</td>
            <td>
              <input
                type="text"
                onChange={(e) => this.updateField('providerId', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>status</td>
            <td>
              <input
                type="text"
                onChange={(e) => this.updateField('status', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>rows</td>
            <td>
              <input
                type="text"
                onChange={(e) => this.updateField('rows', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>status to</td>
            <td>
              <input
                type="text"
                onChange={(e) => this.updateField('to', e.target.value)}
              />
            </td>
          </tr>
          </tbody>
        </table>
        <div class="bottom-btn-wrap">
          <button onClick={() => this.handleSubmit()}>Update</button>
        </div>
      </div>
    );
  }
}
