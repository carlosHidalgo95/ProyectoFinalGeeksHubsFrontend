import Times from '../../Components/Times/Times'
import Dishes from '../../Components/Dishes/Dishes'
import {Row,Col} from 'react-bootstrap'
import './BookingContainer.scss'
import  React,{useState} from 'react';
import {Button} from 'react-bootstrap';

const BookingContainer = () =>{
    const [prueba,setPrueba] = useState();
    const [prueba2,setPrueba2] = useState();
    const [date, setDate] = useState([]);
    const [time, setTime] = useState([]);

    return (
        <Row className='bookingContainer'>
            <Col/>
            {/* <Col xs={10} sm={8} md={6} lg={4}> */}
            <Col xs={10}>
                <Times setSelectedDate={setDate} setSelectedTime={setTime}/>
                <Dishes setSeletectedDish={setPrueba2}/>
                <Row className='resumeRow'>
      <h3>Resumen</h3>
      <h4>Fecha {date}</h4>
      <h4>Hora {time}</h4>
      <h4>Entrante</h4>
      <h4>Primer Plato</h4>
      <h4>Segundo Plato</h4>
        <Button className='orderButton' variant="primary">Reservar</Button>
    </Row>
            </Col>
            <Col/>
        </Row>
  );
}
export default BookingContainer;