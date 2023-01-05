import React, {useEffect,useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import DishBox from './DishBox'

import "./Dishes.scss";

const API_URL= "https://proyectofinalgeekshubsbackend-production.up.railway.app/dishes/getAll";

const Dishes= () => {
const [dishes, setDishes] = useState([]);

useEffect(() => {
fetch(API_URL)
.then((res) => res.json())
.then(data => {
  console.log(data);
  setDishes(data);
})
}, [])
return(
    <Container fluid className='dishesContainer'>
      <Row className='d-flex dishBox'>
        <h2>Entrantes</h2>
            {dishes.map((dish) => {
                console.log(dish.dish_name);
              return (
                <Col xs={12} sm={5} md={4} lg={3}>
                <DishBox  key={dish.dish_name} dish={dish} />
                </Col>
              )
              })}
      </Row>
      <Row className='d-flex dishBox'>
      <h2>Primeros</h2>
            {dishes.map((dish) => {
                console.log(dish.dish_name);
              return (
                <Col xs={12} sm={5} md={4} lg={3}>
                <DishBox  key={dish.dish_name} dish={dish} />
                </Col>
              )
              })}
      </Row>
      <Row className='d-flex dishBox'>
      <h2>Segundos</h2>
            {dishes.map((dish) => {
                console.log(dish.dish_name);
              return (
                <Col xs={12} sm={5} md={4} lg={3}>
                <DishBox  key={dish.dish_name} dish={dish} />
                </Col>
              )
              })}
      </Row>
    </Container>
)

};

export default Dishes;