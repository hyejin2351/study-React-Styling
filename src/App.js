import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames/bind';

const blueBox = classNames.bind(styles);

class App extends Component {
  render() {
    const isBlue = true;
    
    return (
      <div className={blueBox('box', {
        blue: isBlue
        })}>
        <div className={blueBox('box-inside')}></div>
      </div>
    );
  }
}

export default App;
