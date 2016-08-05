import React from 'react';
import $ from 'jquery';
import Select from 'react-select';
import Datetime from 'react-datetime';
import moment from 'moment';
import Loading from '../../component/Loading.jsx';

export default class DataGap extends React.Component {
  constructor() {
    super();
    this.dateFormat = "YYYY-MM-DD";
    this.timeFormat = "HH:mm:ss";
    this.format = this.dateFormat + " " + this.timeFormat;
    this.now = new Date();
    this.yesterday = new Date(this.now.getTime() - 86400000);
    this.state = {
      loading: false,
      gapSettings: [],
      dataGapId: '',
      from: moment(this.yesterday.getTime()).format(this.format),
      to: moment(this.now.getTime()).format(this.format),
      need_fetch: [],
      need_delete: []
    };
  }

  loading(display) {
    this.setState({loading: display});
  }

  componentDidMount() {
    this.getGapSettings();
  }

  getGapSettings() {
    $.get('autonomy/data_gap/settings', (gapSettings) => {
      this.setState({gapSettings});
    }, 'json');
  }

  updateField(name, value) {
    var obj = {};
    obj[name] = value;
    this.setState(obj);
  }

  updateDatetimeField(name, value) {
    var obj = {};
    obj[name] = value.format(this.format);
    this.setState(obj);
  }

  gapOptions(settings) {
    return settings.map((setting, index) => {
      return {value: setting.id, label: setting.name}
    });
  }

  handleSubmit() {
    const { dataGapId, from, to } = this.state;

    if (!dataGapId) {
      alert('请选择DB');
      return;
    }

    this.loading(true);

    $.get('autonomy/data_gap/calc', {
      dataGapId, from, to
    }, (data) => {
      this.setState(data);
      this.loading(false);
    }, 'json');
  }

  render() {
    const { loading, gapSettings, dataGapId, need_fetch, need_delete } = this.state;

    return (
      <div class="data-gap">
        <Loading show={loading} />
        <div class="control width-200">
          <div class="row">
            <span>DB:</span>
            <Select
              name="db"
              value={dataGapId}
              options={this.gapOptions(gapSettings)}
              onChange={(v) => this.updateField('dataGapId', v.value)}
            />
          </div>
          <div class="row">
            <span>date from:</span>
            <Datetime
              defaultValue={this.yesterday}
              dateFormat={this.dateFormat}
              timeFormat={this.timeFormat}
              onChange={dt => this.updateDatetimeField('from', dt)}
            />
          </div>
          <div class="row">
            <span>date to:</span>
            <Datetime
              defaultValue={this.now}
              dateFormat={this.dateFormat}
              timeFormat={this.timeFormat}
              onChange={dt => this.updateDatetimeField('to', dt)}
            />
          </div>
        </div>
        <div class="bottom-btn-wrap">
          <button onClick={() => this.handleSubmit()}>Calculate</button>
        </div>
        <div class="results">
          <div class="need-fetch">
            <h3>Need fetch</h3>
            <div>{need_fetch.length <= 0 ? 'No data': null}</div>
            <div>{need_fetch.join(',')}</div>
          </div>
          <hr/>
          <div>
            <h3>Need delete</h3>
            <div>{need_delete.length <= 0 ? 'No data': null}</div>
            <div>{need_delete.join(',')}</div>
          </div>
        </div>
      </div>
    );
  }
}
