import React, { Component } from 'react';
import styles from './App.css';
import classNames from 'classnames/bind';

const blueBox = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div className={blueBox('box', {
        blue: isBlue
        })}>
      </div>
    );
  }
}

export default App;
