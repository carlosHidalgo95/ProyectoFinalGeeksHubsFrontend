import Times from '../../Components/Times/Times'
import Dishes from '../../Components/Dishes/Dishes'
import {Row,Col} from 'react-bootstrap'
import './BookingContainer.scss'
import  React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import { useJwt } from "react-jwt";


const BookingContainer = () =>{
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [entrante,setEntrante]= useState({dish_name:""});
    const [primero,setPrimero]= useState({dish_name:""});
    const [segundo,setSegundo]= useState({dish_name:""});
    const [error, setError] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");

    const API_URL="https://proyectofinalgeekshubsbackend-production.up.railway.app/bookings/create";

    const token = localStorage.getItem("jwt");
    const { decodedToken, isExpired } = useJwt(token);


    const handleButtonClick = () =>{
        let valid = true;
        if (!entrante || !primero || !segundo) {
            setError("Debes seleccionar los 3 platos a reservar")
            valid=false;
        }
        if (!date||!time) {
            setError("Debes seleccionar fecha y hora");
            valid=false;
        }
        if(valid){
            const body=JSON.stringify({
                booking_date: date,
                time: time,
                entrante_id:entrante.id,
                primero_id:primero.id,
                segundo_id:segundo.id
            });
            
            const requestOptions = {
                method:'POST',
                headers:{'Content-Type': 'application/json',Authorization: `Bearer ${token}`},
                body: body
            }

            try {
                fetch(API_URL,requestOptions)
                  .then((res) => res.json())
                  .then(data => {
                    setSuccessMessage("Reserva creada con exito");
                  })
              } catch (err) {
                setError("Ha ocurrido un error inesperado en el servidor");
                console.log(err);
              }
        }
    }

    const setSelectedDish = (dish) => {
        switch (dish.id_type) {
            case 1:
            setEntrante(dish);
              break;
            case 2:
            setPrimero(dish);
              break;
            case 3:
            setSegundo(dish);
              break;
            default:
            setError("Ha ocurrido un error al seleccionar el plato");
              break;
          }
    }

    return (
        <Row className='bookingContainer'>
            <Col/>
            <Col xs={10}>
                <Times setSelectedDate={setDate} setSelectedTime={setTime}/>
                <Dishes setSeletectedDish={setSelectedDish}/>
                <Row className='resumeRow'>
      <h3>Resumen</h3>
      <h4>Fecha: {date}</h4>
      <h4>Hora: {time}</h4>
      <h4>Entrante: {entrante.dish_name}</h4>
      <h4>Primer Plato: {primero.dish_name}</h4>
      <h4>Segundo Plato: {segundo.dish_name}</h4>
      <h5 className='error'>{error}</h5>
      <h5 className='success'>{successMessage}</h5>
        <Button onClick={handleButtonClick} className='orderButton' variant="primary">Reservar</Button>
    </Row>
            </Col>
            <Col/>
        </Row>
  );
}
export default BookingContainer;