import React, { useState } from 'react';
import axios from "axios";
import './Orders.scss'
import { useJwt } from "react-jwt";

const Orders = () => {
    const API_URL = "https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/get";
    const token = localStorage.getItem("jwt");

    const { decodedToken, isExpired } = useJwt(token);
    const [orders, setOrders] = useState([]);

    let isAdmin = false;

    if (decodedToken) {
        if (decodedToken.role === 1) {
            isAdmin = true;
        }
        else {
            console.log(decodedToken);
            const body = 
            {
                id_user:decodedToken.id
            };
            console.log(body);
            fetch(API_URL, body)
            .then((res) => console.log(res.body))
        }
    }

    return (
        <div className="tarjetaOrder">

        </div>
    );
}
export default Orders;