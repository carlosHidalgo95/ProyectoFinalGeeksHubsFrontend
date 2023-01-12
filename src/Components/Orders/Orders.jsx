import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Orders.scss'
import { useJwt } from "react-jwt";
import DishBox from '../Dishes/DishBox'


const Orders = () => {
    const API_URL = "https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/getAll";
    const token = localStorage.getItem("jwt");

    const { decodedToken, isExpired } = useJwt(token);
    const [orders, setOrders] = useState([]);
    let isAdmin = false;



    useEffect(() => {
        if (decodedToken) {
            console.log(decodedToken);
            if (decodedToken.role === 1) {
                isAdmin = true;
            }
            else {
                const body =
                {
                    id_user: decodedToken.id
                };
                fetch(API_URL, body)
                    .then((res) => res.json())
                    .then((data) => setOrders(data))
            }
            console.log(orders);
        }
    }, [decodedToken])
    return (
        <div className="tarjetaOrder">
            {orders.map((order) => {
                return (
                    <div className='order'>
                        <h3>Fecha:{order.booking_date}</h3>
                        <h3>Hora:{order.time}</h3>
                        {/* <h3>Platos:{order.dishes}</h3> */}
                        {order.dishes.map((dish) => {
                            <div >
                                {console.log(dish.dish_name)}
                                <DishBox key={dish.dish_name} dish={dish} />
                            </div>
                            console.log(dish);
                        })}
                    </div>
                )
            })}


        </div>
    );
}
export default Orders;