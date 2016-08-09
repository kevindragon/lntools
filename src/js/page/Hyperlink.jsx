import React from 'react';

export default class Hyperlink extends React.Component {
  render() {
    return <div class="hyperlink">
      {this.props.children}
    </div>;
  }
}