import './ColourPicker.css';
import React from 'react';

export default class ColourPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = { colour: '#000000' };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <div className="colour-picker-container">
                <span>
                    Choose A Colour:
                </span>
                <input type="color" value={this.state.colour} onChange={this.handleInputChange}></input>
                <p className="selected-colour">{this.state.colour}</p>
            </div>
        );
    }

    /**
     * This method will update the component's state with a colour when a new colour is selected on the colour picker.
     * @param {Object} event passed when onchange event is triggered for the colour-picker input field
     */
    handleInputChange(event) {
        this.setState({ colour: event.target.value });
    }
}