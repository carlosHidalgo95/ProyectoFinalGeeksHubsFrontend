import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserToggleContext } from "../../UserProvider";

const RegisterContainer = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const changeLogin=useUserToggleContext();

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
        const { username, email, dob, password, password2 } = form;
        const newErrors = {};
        
        if (!username || username === 'Introduce nombre de usuario') newErrors.username = 'Debes introducir un nombre de usuario'
        if (!email || email === 'Introduce un email'){
            newErrors.email = 'Debes introducir un email'
        } else if (!/.+\@.+\..+/.test(email)) newErrors.email = 'Debes introducir un email válido'
        if (!password || password === 'Introduce una contraseña') newErrors.password= 'Por favor,introduce una contraseña'
        else {
            if (!/[?=.*[0-9]]*/.test(password)) newErrors.password = 'La contraseña debe contener un número'
            if (!/[?=.*[a-z]]*/.test(password)) newErrors.password = 'La contraseña debe contener una minuscula'
            if (!/[?=.*[A-Z]]*/.test(password)) newErrors.password = 'La contraseña debe contener una mayúscula'
            if (!/[[a-zA-Z0-9]{8,}]*/.test(password)) newErrors.password = 'La contraseña debe contener al menos 8 caracteres'
        }

        if (!password2 || password2 === 'Repite tu contraseña') newErrors.password2 = 'Debes repetir la contraseña'
        else if (password2 !== password) newErrors.password2 = 'Las contraseñas no coinciden'

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log("submited form")
            e.preventDefault()
            console.log(form);
             axios.post("https://proyectofinalgeekshubsbackend-production.up.railway.app/auth/register",form)
            .then(response=>{
              console.log(response);
              if (response) {
                console.log("Intentando login");
                const body ={
                    email:form.email,
                    password:form.password
                }
                axios.post("https://proyectofinalgeekshubsbackend-production.up.railway.app/auth/login", body)
                .then(response => {
                        localStorage.setItem('jwt', JSON.stringify(response.data.jwt));
                        localStorage.setItem('username', response.data.username);
                        localStorage.setItem('isAdmin', response.data.admin);
                        changeLogin(response.data.username,response.data.admin);
                        navigate("/");
                });
            }
            });

        }
    }

    return (
        <Form className='Principal1'>
            <Form.Group controlId='username'>
                <Form.Label className='words'>Username</Form.Label>
                <Form.Control
                    placeholder='Introduce nombre de usuario'
                    value={form.username}
                    onChange={(e) => setField('username', e.target.value)}
                    isInvalid={!!errors.username}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.username}

                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label className='words'>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Introduce email'
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    isInvalid={!!errors.email}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password' className='password'>
            <Form.Label className='words'>Contraseña</Form.Label>

                <Form.Control
                    type='password'
                    placeholder='Introduce una contraseña'
                    value={form.password}
                    onChange={(e) => setField('password', e.target.value)}
                    isInvalid={!!errors.password}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password};

                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='password2'>
                <Form.Label className='words'>Repite Contraseña</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Repite tu contraseña'
                    value={form.password2}
                    onChange={(e) => setField('password2', e.target.value)}
                    isInvalid={!!errors.password2}
                    className='input'
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'>
                    {errors.password2}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='submit'>
                <Button className='Boton' type='submit'
                    onClick={handleSubmit} >
                    Submit
                </Button>
            </Form.Group>
        </Form>
    )
}

export default RegisterContainer;