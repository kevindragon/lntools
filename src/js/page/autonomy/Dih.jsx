import React from 'react';
import $ from 'jquery';

export default class Dih extends React.Component {
  constructor() {
    super();
    this.state = {
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

  getData() {
    $.get('autonomy/dih', (data) => {
      this.setState({data});
    }, 'json');
  }

  render() {
    const { data } = this.state;

    return <div class="dih">
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