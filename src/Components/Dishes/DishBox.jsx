import React from 'react';
import { Card } from 'antd';

const MovieBox = ({dish}) => {

    return (
        <Card hoverable style={{width: 240,margin:10}}
        cover={<img alt="dish_poster" src={dish.img} />}>
            <h4>{dish.dish_name}</h4>
        </Card>
    );
};

export default MovieBox;