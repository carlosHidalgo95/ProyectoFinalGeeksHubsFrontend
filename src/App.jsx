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
import { UserProvider } from './UserProvider';

function App() {

  return (
    <UserProvider>
      <Container fluid className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Booking />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/booking" element={<Booking/>} />
            <Route path="/orders" element={<Orders/>} />
          </Routes>
        </BrowserRouter>
      </Container>
      </UserProvider>
  );
}

export default App;



