import './App.css';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import the components
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Containers/Home/Home';
import Login from "./Containers/LoginContainer/LoginContainer";
import Register from "./Containers/RegisterContainer/RegisterContainer";
import { UserProvider } from './UserProvider';

function App() {

  return (
    <UserProvider>
      <Container fluid className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Container>
      </UserProvider>
  );


}

export default App;



