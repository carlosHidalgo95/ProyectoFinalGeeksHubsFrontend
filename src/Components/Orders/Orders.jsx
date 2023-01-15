import React, { useState, useEffect } from 'react';
import './Orders.scss'
import { useJwt } from "react-jwt";
import DishBox from '../Dishes/DishBox'
import { Col, Row } from 'react-bootstrap';

const Orders = () => {
    const API_URL_USER = "https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/get";
    const API_URL_ADMIN = "https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/getAll";

    const token = localStorage.getItem("jwt");

    const { decodedToken, isExpired } = useJwt(token);
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState(['']);
    let isAdmin = false;
    const [error, setError] = useState("");

    const searchHandler =(e) =>{
        setSearch(e.target.value);
      console.log(search);
      }

    const fetchData = (url) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        };
        fetch(url,requestOptions)
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((err) => {
                console.log(err)
              });
            }

    useEffect(() => {
        if (decodedToken) {
            if (decodedToken.role === 1) {
                isAdmin = true;
                fetchData(API_URL_ADMIN);
            }
            else {
                fetchData(API_URL_USER);
            }
        }
    }, [decodedToken]);

    return (

        <div className="tarjetaOrder">
            <h2 className='error'>{error}</h2>
            {orders.map((order) => {
                return (
                    <div className='order'>
                        <div>
                            <h3>Fecha:{order.booking_date}</h3>
                            <h3>Hora:{order.time}</h3>
                        </div>
                        <div className="divDishes justify-content-around">
                            <Row>
                            {order.dishes.map((dish) => {
                                return (
                                    <Col xs={12} sm={5} md={4} lg={3}>
                                        <div key={dish.dish_name} >
                                            <DishBox key={dish.dish_name} dish={dish} />
                                        </div>
                                    </Col>
                                )
                            })}
                            </Row>
                        </div>
                    </div>
                )
            })}


        </div>
    );
}
export default Orders;