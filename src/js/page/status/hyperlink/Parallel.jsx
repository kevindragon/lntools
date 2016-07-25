import React from 'react';

export default class Parallel extends React.Component {
  render() {
    const { parallel } = this.props;
    return <div>
      <h3>lnc.parallel</h3>
      <table class="table">
        <thead>
        <tr>
          <th>count</th>
        </tr>
        </thead>
        <tbody>
        {parallel.map(
          (row, index) => <tr key={index}>
            <td>{row.cnt}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>;
  }
}