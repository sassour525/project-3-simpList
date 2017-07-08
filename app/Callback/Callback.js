import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Callback extends Component {
  
  render() {
    const style = {
      container: {
        position: 'relative',
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
      },
    };

    return (
      <div>
        <CircularProgress size={600} thickness={5} />
      </div>
    );
  }
}

export default Callback;