import React from 'react';

export default class Loading extends React.Component {
  render() {
    const { show } = this.props;

    const style = {
      position: 'fixed',
      width: '100px',
      padding: '5px 10px',
      display: show ? '' : 'none',
      top: '0',
      left: '45%',
      backgroundColor: 'yellow',
      borderRadius: '3px'
    };

    return (
      <div class="loading" style={style}>Loading......</div>
    );
  }
}