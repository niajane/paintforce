import "./Canvas.css";
import Cell from "../Cell/Cell";
import React from "react";
import { db } from "../../services/firebase";

export default class Canvas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pixels : [],
        }
        this.generatePixels();
    }
    

    render() {
        console.log("render");
        return <div className="grid">{this.state.pixels}</div>;
    }

    generatePixels() {
        this.pixels = new Array(20)
            .fill()
            .map(() => new Array(20).fill(null));
        for(let i = 0; i < 20; i++){
            for(let j = 0; j < 20; j++){
                this.pixels[i][j] = <Cell pos={i*20+j} cellColour={''}/>
            }
        }
    }

    componentDidMount() {
        const canvasRef =  db.ref("canvas");
        canvasRef.on('value', (snapshot) => {
            let colors = snapshot.val();
            let newPixels = new Array(20)
            .fill()
            .map(() => new Array(20).fill(null));
            for(let i = 0; i < 20; i++){
                for(let j = 0; j < 20; j++){
                    newPixels[i][j] = <Cell key={i*20+j} pos={i*20+j} cellColour={colors[i][j]}/>
                }
            }
            this.setState({
                pixels: newPixels
            })
        })
    }
}
