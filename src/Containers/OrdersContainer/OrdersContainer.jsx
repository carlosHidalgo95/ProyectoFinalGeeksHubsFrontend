import {Row,Col} from 'react-bootstrap'
import './OrdersContainer.scss'
import './OrdersContainer.scss'
import  React,{useState} from 'react';
import Orders from '../../Components/Orders/Orders'
const OrdersContainer = () =>{

    return (
        <Row className='bookingContainer'>
            <Col/>
            {/* <Col xs={10} sm={8} md={6} lg={4}> */}
            <Col xs={10}>
            <Orders/>
            </Col>
            <Col/>
        </Row>
  );
}
export default OrdersContainer;