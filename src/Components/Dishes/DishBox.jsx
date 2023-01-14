import React from 'react';
// import { Card } from 'antd';
import {Row,Col,Card} from 'react-bootstrap';
import './DishBox.scss';

const DishBox = ({dish}) => {

    return (
        
        // <Card className='dishCard' key={dish.name} hoverable style={{width: 240,margin:10}}
        // cover={<img alt="dish_poster" src={dish.img} />}>
        //     <h4>{dish.dish_name}</h4>
        // </Card>



<Card>
<Card.Img variant="top" src={dish.img} />
<Card.Body>
  <Card.Title>{dish.dish_name}</Card.Title>
</Card.Body>
</Card>
    );
};

export default DishBox;