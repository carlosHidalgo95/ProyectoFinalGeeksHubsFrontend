import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CreateDish.scss'
import DishBox from '../Dishes/DishBox'
import { useNavigate } from "react-router-dom";


const CreateDish = () => {
    const token = localStorage.getItem("jwt");
    const API_URL="https://proyectofinalgeekshubsbackend-production.up.railway.app/dishes/create";
    const navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState([]);

    const [form, setForm] = useState({
        dish_name: '',
        id_type: 0,
        img:''
    });

    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null
            })
    }

    const validateForm = () => {
        const { dish_name, id_type, img } = form;
        //Volvemos a dejar los errores en blanco antes de validar el formulario
        setErrors({
            name: '',
            type: '',
            img: ''
        })
        const newErrors = {};
        if (!dish_name || dish_name === '') {
            newErrors.name = 'Debes introducir un nombre'
        }
        if (!img || img === '') newErrors.img = 'Debes introducir una url para la imagen'
        if (!id_type ||id_type==0) newErrors.type = 'Debes introducir un tipo para el plato'
        return newErrors;
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {};
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            const dish={dish_name:form.dish_name,img:form.img}

            const body=JSON.stringify({
                name: form.dish_name,
                id_type: form.id_type,
                img:form.img
            });
            console.log(body);
            
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
                    navigate("/booking");
                  })
              } catch (err) {
                setError("Ha ocurrido un error inesperado en el servidor");
                console.log(err);
              }
        }
    }

    return (
        <div>
            <Form className="containerform">
                <h2>Rellena los siguientes campos para crear un plato</h2>
                <Form.Group controlId='name'>
                    <Form.Label className="lbl">Nombre</Form.Label>
                    <Form.Control
                        value={form.dish_name}
                        onChange={(e) => setField('dish_name', e.target.value)}
                        isInvalid={!!errors.name}
                        className="input"
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.name}

                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='type'>
                    <Form.Label className="lbl">Tipo de plato</Form.Label>
                    <Form.Select
                        value={form.id_type}
                        onChange={(e) => setField('id_type', e.target.value)}
                        isInvalid={!!errors.type}
                        className="input"
                    >
                        <option value={0}>--SELECCIONAR--</option>
                        <option value={1}>Entrante</option>
                        <option value={2}>Primero</option>
                        <option value={3}>Segundo</option>
                        <option value={4}>Postre</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>
                        {errors.type}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='img'>
                    <Form.Label className="lbl">Url de imagen</Form.Label>
                    <Form.Control
                        value={form.img}
                        onChange={(e) => setField('img', e.target.value)}
                        isInvalid={!!errors.img}
                        className="input"
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.img}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="boxboton" controlId='submit'>
                    <Button type='submit' className="Boton"
                        onClick={handleSubmit} >
                        Crear
                    </Button>

                </Form.Group>
                <Form.Group>
                    <Form.Control.Feedback type='invalid'>
                        {errors.notCreated}
                    </Form.Control.Feedback>
                    <p className="error">{error}</p>
                    <p className='success'>{successMessage}</p>

                </Form.Group>
            </Form>
        </div>
    );
}
export default CreateDish;