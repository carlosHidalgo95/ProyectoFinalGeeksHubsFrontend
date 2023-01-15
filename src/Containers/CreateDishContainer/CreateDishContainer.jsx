import CreateDish from '../../Components/CreateDish/CreateDish'
import {Row,Col} from 'react-bootstrap'
import './CreateDishContainer.scss'

const CreateDishContainer = () =>{
    return (
        <Row className='containerlogin'>
            <Col/>
            <Col xs={10} sm={8} md={6} lg={4}>
                <CreateDish/>
            </Col>
            <Col/>
        </Row>
  );
}
export default CreateDishContainer;