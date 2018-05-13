import React from 'react';
import './BoxLayout.css';
import Box from './Box';

const boxLayout = (props) => {
    const xy = props.boxes.map(box => {
        let boxCount = box["count"];

        const transformedBoxes = [...Array(boxCount)];
             
        const x = transformedBoxes.map((_, i) => {
            return <Box key={i} color={box.color} />
            // console.log(box.color);
        })

        return x;
    })
    console.log('transformedBoxes', xy);
    return (
        <div className="BoxLayout">
            {xy}
        </div>
    )
}

export default boxLayout;