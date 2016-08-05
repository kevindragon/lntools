import React from 'react';
import $ from 'jquery';
import Select from 'react-select';

export default class DataGap extends React.Component {
  constructor() {
    super();
    this.state = {
      gapSettings: [],
      dataGapId: ''
    };
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

  gapOptions(settings) {
    return settings.map((setting, index) => {
      return {value: setting.id, label: setting.name}
    });
  }

  render() {
    const { gapSettings, dataGapId } = this.state;

    console.log(this.state);

    const options = this.gapOptions(gapSettings);

    return (
      <div class="data-gap">
        <div class="control">
          <div>
            <span>DB:</span>
            <div class="gap-select">
              <Select
                name="form-field-name"
                value={dataGapId}
                options={options}
                onChange={(v) => this.updateField('dataGapId', v.value)}
              />
            </div>
          </div>
          <div>
            <span>date from:</span>
          </div>

        </div>
      </div>
    );
  }
}
