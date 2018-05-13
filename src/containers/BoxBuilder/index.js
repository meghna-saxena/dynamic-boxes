import React, { Component, Fragment } from 'react';
import BoxLayout from '../../components/BoxLayout';
import Controls from '../../components/BoxLayout/Controls';

class BoxBuilder extends Component {
    state = {
        boxes: [
            {color: "red", count: 2},
            {color: "green", count: 3},
        ]
    };

    render() {
        return (
            <Fragment>
                <BoxLayout boxes={this.state.boxes} />
                <Controls />
            </Fragment>
        )
    };
}

export default BoxBuilder;

