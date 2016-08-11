import React from 'react';
import $ from 'jquery';

import Loading from '../../component/Loading.jsx';

export default class Dih extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: []
    };
    this.interval = null;
  }

  loading(display) {
    this.setState({loading: display});
  }

  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData() {
    const { loading } = this.state;
    if (loading) return;

    this.loading(true);
    $.get('autonomy/dih', (data) => {
      this.setState({data});
      this.loading(false);
    }, 'json').fail(() => {
      this.loading(false);
    });
  }

  render() {
    const { loading, data } = this.state;

    return <div class="dih">
      <Loading show={loading} />
      {data.map(
        (dih, index) => <table class="table" key={index}>
          <caption>
            <h3>{dih.name}</h3>
          </caption>
          <thead>
          <tr>
            <th>id</th>
            <th>received time</th>
            <th>description</th>
          </tr>
          </thead>
          <tbody>
          {dih.items.map(
            (item, index) => <tr key={index}>
              <td>{ item.id }</td>
              <td>{ item.received_time }</td>
              <td>{ item.description }</td>
            </tr>
          )}
          </tbody>
        </table>
      )}
    </div>;
  }
}