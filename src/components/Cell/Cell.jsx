import './Cell.css';
import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("foo");
    }

    render() {
        return (
            <div className="cell-container"></div>
        );
    }

}