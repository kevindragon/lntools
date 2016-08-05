import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class DataGap extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      dahId: '',
      autnDBName: '',
      sqlStatement: '',
      dahs: []
    };
  }

  componentDidMount() {
    this.getEngines();
  }

  getEngines() {
    $.get('settings/dah', (dahs) => {
      this.setState({dahs});
    }, 'json');
  }

  updateField(name, value) {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  handleSubmit() {
    const { name, dahId, autnDBName, sqlStatement } = this.state;
    const data = {name, dahId, autnDBName, sqlStatement};
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
    const { dahs } = this.state;

    return (
      <div class="data-gap-add">
        <h2>Add another data gap definition</h2>
        <table class="table">
          <tbody>
          <tr>
            <td>name</td>
            <td>
              <input type="text" onChange={(e) => this.updateField('name', e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>engine</td>
            <td>
              <select onChange={(e) => this.updateField('dahId', e.target.value)}>
                <option value="0">-- select --</option>
                {dahs.map(
                  (dah, index) => <option value={dah.id} key={index}>
                    {dah.name} - {dah.host}:{dah.port}
                  </option>
                )}
              </select>
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
              <textarea cols="60" rows="10" onChange={(e) => this.updateField('sqlStatement', e.target.value)}></textarea>
              <div class="tips">需要：datetime_field &gt;= ? and datetime_field &lt;= ?</div>
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