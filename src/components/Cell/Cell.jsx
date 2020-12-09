import './Cell.css';
import React from 'react';

const DEFAULT_COLOUR = '#ffffff';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            cellColour: this.props.cellColour ? this.props.cellColour : DEFAULT_COLOUR
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        // if the user is dragging over, or clicking on the cell
        if((event.type === 'mouseover' && event.buttons === 1) || event.type === 'mousedown') {
            // TODO: change colour to be what was selected in colour picker
            this.setState({cellColour: '#FF0000'});
        }
    }

    render() {
        return (
            <div 
                className="cell-container"
                style={ { background: `${this.state.cellColour}` } }
                onMouseOver={this.handleClick}
                onClick={this.handleClick}
                onMouseDown={this.handleClick}
            ></div>
        );
    }
}