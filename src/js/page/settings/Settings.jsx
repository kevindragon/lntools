import React from 'react';

export default class Settings extends React.Component {
  render() {
    return <div class="settings">
      {this.props.children}
    </div>;
  }
}