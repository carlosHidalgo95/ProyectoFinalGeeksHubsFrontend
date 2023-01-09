import {Row,Col} from 'react-bootstrap'
import './OrderContainer.scss'
import  React,{useState} from 'react';
import Times from '../../Components/Orders/Orders'

const BookingContainer = () =>{

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
export default BookingContainer;