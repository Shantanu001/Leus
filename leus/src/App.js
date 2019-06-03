import React, { Component } from 'react';
import './App.css';
import AppRouter from '../src/router/appRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter></AppRouter>
      </div>
    );
  }
}

export default App;
