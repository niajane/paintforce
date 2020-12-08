import './Canvas.css';
import Cell from '../Cell/Cell';
import React from 'react';

export default class Canvas extends React.Component {
    pixels = [];

    constructor(props) {
        super(props);

        this.generatePixels();
    }

    render() {
        return (
            <div className="grid">
                {this.pixels}
            </div>
        );
    }

    generatePixels() {
        let cells = new Array(20).fill(<Cell />).map(() => new Array(20).fill(<Cell />));

        this.pixels = cells;
    }
}
