import './ColourPicker.css';
import React from 'react';

import colourPickerContext from '../../context/ColourPickerContext';

export default class ColourPicker extends React.Component {
    render() {
        return (
            <div className="colour-picker-container">
                <div className="left">
                <span>
                    Choose A Colour:
                </span>

                <colourPickerContext.Consumer>
                    {({ colour, setColour }) => {
                        return (
                            <>
                                <input type="color" value={colour} onChange={(event) => {
                                    setColour(event);
                                }}></input>
                                <p className="selected-colour">{colour}</p>
                            </>
                        );
                    }}
                </colourPickerContext.Consumer>
                </div>

                <p className="eraser-text">Eraser: Right Click</p>
            </div>
        );
    }
}