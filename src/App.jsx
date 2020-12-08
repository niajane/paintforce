import './App.css';

import React from 'react';

import Canvas from './components/canvas/Canvas';
import ColourPicker from './components/ColourPicker/ColourPicker';

const STARTING_COLOUR = '#000000';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { colour: STARTING_COLOUR };

    this.handleColourPickerChangeEvent = this.handleColourPickerChangeEvent.bind(this);
  }

  handleColourPickerChangeEvent(event) {
    this.setState({ colour: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Paintforce
          </h1>
        </header>
        <Canvas />
        <div className="brush-controls-container">
          <ColourPicker colour={STARTING_COLOUR} colourChangeHandler={this.handleColourPickerChangeEvent} />
        </div>
        <p>Global colour: {this.state.colour}</p>
      </div>
    );
  }
}
