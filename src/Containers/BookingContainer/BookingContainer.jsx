import Times from '../../Components/Times/Times'
import Dishes from '../../Components/Dishes/Dishes'
import {Row,Col} from 'react-bootstrap'
import './BookingContainer.scss'
import  React,{useState} from 'react';

const BookingContainer = () =>{
    const [prueba,setPrueba] = useState();
    const [prueba2,setPrueba2] = useState();

    return (
        <Row className='bookingContainer'>
            <Col/>
            {/* <Col xs={10} sm={8} md={6} lg={4}> */}
            <Col xs={10}>
                <Times setSelectedTime={setPrueba}/>
                <Dishes setSeletectedDish={setPrueba2}/>
            </Col>
            <Col/>
        </Row>
  );
}
export default BookingContainer;