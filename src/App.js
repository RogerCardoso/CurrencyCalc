import React from 'react';

import './App.scss';
import Converter from './components/converter/converter.component.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App container mt-5">
        <h1 className="App-title">
          Currency Calculator
        </h1>
        <h4 className="App-subtitle">
          Convert the currency
        </h4>
        <Converter />
      </div>
    );
  }
}

export default App;
