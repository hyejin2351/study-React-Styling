import React, { Component } from 'react';
import styles from './App.css';
import classNames from 'classnames'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className={classNames(styles.box, styles.blue)}>
      
      </div>
    );
  }
}

export default App;
