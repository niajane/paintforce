import './Canvas.css';
import React from 'react';

export default class Canvas extends React.Component {
    render() {
        return (
            <div className="canvas">
                <div className="grid"></div>
            </div>
        );
    }
}