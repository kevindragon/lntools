import React from 'react';

export default class Hyperlink extends React.Component {
  render() {
    const { oprLoadStatus } = this.props;
    return <div>
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