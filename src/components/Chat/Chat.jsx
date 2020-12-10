import React, { Component } from "react";
import { db } from "../services/firebase";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    async componentDidMount() {
        try {
            this.setState({message: (await db.ref("welcomeMsg").get()).val()});
        } catch(error) {
            this.setState({message: "error"});
        }
    }

    render() {
        return (
            <p>{this.state.message}</p>
        );
    };

}