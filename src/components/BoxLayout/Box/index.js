import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        let box = null;
        console.log(this.props.color);
        switch (this.props.color) {
            case ('red'):
                box = <div className="red"></div>;
                break;
            case ('green'):
                box = <div className="green"></div>
                break;
            default:
                box = null;
        }

        return box;
    }
}

export default Box;