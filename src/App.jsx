import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import the components
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import Login from "./Containers/LoginContainer/LoginContainer";
import Register from "./Containers/RegisterContainer/RegisterContainer";
import Booking from "./Containers/BookingContainer/BookingContainer";
import Orders from "./Containers/OrdersContainer/OrdersContainer";
import CreateDish from './Containers/CreateDishContainer/CreateDishContainer';
import { UserProvider } from './UserProvider';

function App() {

  return (
    <UserProvider>
      <Container fluid className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/create-dish" element={<CreateDish/>} />
          </Routes>
        </BrowserRouter>
      </Container>
      </UserProvider>
  );
}

export default App;



