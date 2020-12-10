import "./App.css";

import React from "react";

import Canvas from "../Canvas/Canvas";
import ColourPicker from "../ColourPicker/ColourPicker";
import colourPickerContext from "../../context/ColourPickerContext";
import { USER_SELECTED_STARTING_COLOUR } from "../../constants";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: USER_SELECTED_STARTING_COLOUR,
        };
    }

    setColour = (event) => {
        this.setState({ colour: event.target.value });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Paintforce</h1>
                </header>
                <colourPickerContext.Provider
                    value={{
                        colour: this.state.colour,
                        setColour: this.setColour,
                    }}
                >
                    <Canvas />
                    <div className="brush-controls-container">
                        <ColourPicker />
                    </div>
                </colourPickerContext.Provider>
            </div>
        );
    }
}
