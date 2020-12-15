import "./Cell.css";
import React from "react";
import { db } from "../../services/firebase";

import { CELL_STARTING_COLOUR } from "../../constants";

import colourPickerContext from "../../context/ColourPickerContext";

export default class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pos: this.props.pos,
            cellColour: this.props.cellColour
                ? this.props.cellColour
                : CELL_STARTING_COLOUR,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, colour) {
        // if the user is dragging over, or clicking on the cell
        if (
            (event.type === "mouseover" && event.buttons === 1) ||
            (event.type === "mousedown" && event.buttons === 1)
        ) {
            this.setState({ cellColour: colour });
            let ref = "canvas/"+Math.floor(this.state.pos/20)+"/"+this.state.pos%20;
            db.ref(ref).set(colour);
        }

        if (
            (event.type === "mouseover" && event.buttons === 2) ||
            (event.type === "mousedown" && event.buttons === 2)
        ) {
            this.setState({ cellColour: CELL_STARTING_COLOUR });
        }
    }

    render() {
        return (
            <colourPickerContext.Consumer>
                {({ colour }) => {
                    return (
                        <div
                            className="cell-container"
                            style={{ background: `${this.state.cellColour}` }}
                            onMouseOver={(event) => {
                                this.handleClick(event, colour);
                            }}
                            onMouseDown={(event) => {
                                this.handleClick(event, colour);
                            }}
                            onContextMenu={(e)=> e.preventDefault()}
                        ></div>
                    );
                }}
            </colourPickerContext.Consumer>
        );
    }
}
