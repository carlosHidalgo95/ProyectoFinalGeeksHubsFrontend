import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import DishBox from './DishBox'

import "./Dishes.scss";

const API_URL = "https://proyectofinalgeekshubsbackend-production.up.railway.app/dishes/getAll";

const Dishes = ({ setSeletectedDish }) => {
  const [dishes, setDishes] = useState([]);
  const [errorApi, setErrorApi] = useState("");

  function clickHandler(dish) {
    console.log(dish);
    setSeletectedDish(dish);
  }

  useEffect(() => {
    try {
      fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
          setDishes(data);
        })
    } catch (err) {
      setErrorApi("Ha ocurrido un error al descargar los platos");
    }

  }, [])
  return (
    <Container fluid className='dishesContainer'>
      <Row className='d-flex dishBox'>
        <h3>{errorApi}</h3>
        <h2>Entrantes</h2>
        {dishes.map((dish) => {
          if (dish.id_type === 1) {
            return (
              <Col xs={12} sm={5} md={4} lg={3}>
                <div key={dish.dish_name} onClick={(e) => clickHandler(dish)}>
                  <DishBox key={dish.dish_name} dish={dish} />
                </div>
              </Col>
            )
          }
          return [];
        })}
      </Row>
      <Row className='d-flex dishBox'>
        <h2>Primeros</h2>
        {dishes.map((dish) => {
          if (dish.id_type === 2) {
            return (
              <Col xs={12} sm={5} md={4} lg={3}>
                <div key={dish.dish_name} onClick={(e) => clickHandler(dish)}>
                  <DishBox key={dish.dish_name} dish={dish} />
                </div>
              </Col>
            )
          }
        })}
      </Row>
      <Row className='d-flex dishBox'>
        <h2>Segundos</h2>
        {dishes.map((dish) => {
          if (dish.id_type === 3) {
            return (
              <Col xs={12} sm={5} md={4} lg={3}>
                <div key={dish.dish_name} onClick={(e) => clickHandler(dish)}>
                  <DishBox key={dish.dish_name} dish={dish} />
                </div>
              </Col>
            )
          }
        })}
      </Row>

    </Container>
  )

};

export default Dishes;