import React from 'react';
import $ from 'jquery';

import Article from './component/Article.jsx';
import Parallel from './component/Parallel.jsx';
import OprLoadStatus from './component/OprLoadStatus.jsx';
import Loading from '../../component/Loading.jsx';

export default class Status extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      article: [],
      oprLoadStatus: [],
      parallel: []
    };
    this.inteval = null;
  }

  componentDidMount() {
    this.getData();
    this.inteval = setInterval(() => {
      this.getData();
    }, 15000)
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  loading(display) {
    this.setState({loading: display});
  }

  getData() {
    const { loading } = this.state;

    if (loading) return;

    this.loading(true);
    $.get('hyperlink/status', (data) => {
      this.setState(data);
      this.loading(false);
    }, 'json');
  }

  render() {
    const { loading, article, oprLoadStatus, parallel } = this.state;

    return <div class="hyperlink">
      <Loading show={loading} />
      <h2>Hyperlink Status</h2>
      <div class="status-list">
        <div class="column">
          <Article article={article} />
        </div>

        <div class="column">
          <Parallel parallel={parallel} />
        </div>

        <div class="column">
          <OprLoadStatus oprLoadStatus={oprLoadStatus} />
        </div>
      </div>
    </div>;
  }
}