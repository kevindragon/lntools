import React from 'react';
import $ from 'jquery';

import Article from './hyperlink/Article.jsx';
import Parallel from './hyperlink/Parallel.jsx';
import OprLoadStatus from './hyperlink/OprLoadStatus.jsx';

export default class Hyperlink extends React.Component {
  constructor() {
    super();
    this.state = {
      article: [],
      oprLoadStatus: [],
      parallel: []
    };
    this.loading = false;
    this.inteval = null;
  }

  componentDidMount() {
    this.getData();
    this.inteval = setInterval(() => {
      this.getData();
    }, 20000)
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  getData() {
    if (this.loading) return;

    this.loading = true;

    $.get('status/hyperlink', (data) => {
      this.setState(data);
      this.loading = false;
    }, 'json');
  }

  render() {
    const { article, oprLoadStatus, parallel } = this.state;

    return <div class="hyperlink">
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