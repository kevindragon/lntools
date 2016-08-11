import React from 'react';
import $ from 'jquery';

import Loading from '../../component/Loading.jsx';

export default class Dah extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: []
    };
    this.interval = null;
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  loading(display) {
    this.setState({loading: display});
  }

  getData() {
    const { loading } = this.state;
    if (loading) return;

    this.loading(true);
    $.get('autonomy/dah', (data) => {
      this.setState({data});
      this.loading(false);
    }, 'json').fail(() => {
      this.loading(false);
    });
  }

  engineOperate(id, engineId, status) {
    this.loading(true);
    $.post('autonomy/dah', {
      id, engineId, status
    }, (data) => {
      this.getData();
      this.loading(false);
    }, 'json').fail(() => {
      this.loading(false);
    });
  }

  render() {
    const { loading, data } = this.state;

    return <div class="dah">
      <Loading show={loading} />
      {data.map(
        (dah, index) => <table class="table" key={index}>
          <caption>
            <h3>{dah.name}</h3>
          </caption>
          <thead>
          <tr>
            <th>id</th>
            <th>host</th>
            <th>aciport</th>
            <th>status</th>
            <th>weight</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {dah.engines.map(
            (engine, index) => <tr key={index}>
              <td>{ engine.id }</td>
              <td>{ engine.host }</td>
              <td>{ engine.aciport }</td>
              <td>{ engine.status }</td>
              <td>{ engine.weight }</td>
              <td>
                <button onClick={() => this.engineOperate(dah.id, engine.id, 'down')}>Down</button>
                <button onClick={() => this.engineOperate(dah.id, engine.id, 'up')}>Up</button>
              </td>
            </tr>
          )}
          </tbody>
        </table>
      )}
    </div>;
  }
}