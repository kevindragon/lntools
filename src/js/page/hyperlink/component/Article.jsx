import React from 'react';

export default class Article extends React.Component {
  render() {
    const { article } = this.props;
    return <div>
      <h3>lnc.article</h3>
      <table class="table">
        <thead>
        <tr>
          <th>provider id</th>
          <th>status</th>
          <th>count</th>
        </tr>
        </thead>
        <tbody>
        {article.map(
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