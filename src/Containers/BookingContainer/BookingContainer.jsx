import Times from '../../Components/Times/Times'
import Dishes from '../../Components/Dishes/Dishes'
import {Row,Col} from 'react-bootstrap'
import './BookingContainer.scss'

const BookingContainer = () =>{
    return (
        <Row className='bookingContainer'>
            <Col/>
            {/* <Col xs={10} sm={8} md={6} lg={4}> */}
            <Col xs={10}>
                <Times/>
                <Dishes/>
            </Col>
            <Col/>
        </Row>
  );
}
export default BookingContainer;