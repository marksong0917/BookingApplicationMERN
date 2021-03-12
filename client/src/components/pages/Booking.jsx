import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Form, Container } from 'react-bootstrap';
import {UpdateTokenContext} from '../sessions/TokenContext'

import { useState } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Booking = () => {
    const [inputs, setInputs] = useState({
      merchantId: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      comments: '',
    });

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async event => {
        toast('You clicked submit')
        event.preventDefault();
        try {
            const resp = await Axios.post('/bookings/', inputs);
            console.log(resp.status);
        } catch (error) {
            toast("There was an issue booking you.", {
              type: toast.TYPE.ERROR
            });
          }
    };

    const handleInputChange = event => {
        event.persist();
    
        const {name, value} = event.target;
    
        setInputs(inputs => ({
          ...inputs,
          [name]: value
        }));
      };

    return (
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <h1 className="header"> Booking Form </h1>
                    <Form onSubmit={handleSubmit} > 
   
                        {/**Merchant ID -> make drop down */}
                        <Form.Group>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="merchantId">
                                Merchant ID
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.merchantId} type="text" id="defaultFormRegisterNameEx" className="form-control" name="merchantId"/>
                        </Form.Group>
                        <Form.Row>
                            {/**First Name */}
                            <Form.Group as={MDBCol} >
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="firstName">
                                    First Name
                                </label>
                                <Form.Control onChange={handleInputChange} value={inputs.firstName} type="text" id="defaultFormRegisterNameEx" className="form-control" name="firstName"/>
                            </Form.Group>

                            {/**Last Name */}
                            <Form.Group as={MDBCol} >
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="lastName">
                                    Last Name
                                </label>
                                <Form.Control onChange={handleInputChange} value={inputs.lastName} type="text" id="defaultFormRegisterNameEx" className="form-control" name="lastName"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                        {/**Phone Number */}
                        <Form.Group as={MDBCol} >
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="phone">
                            Phone Number
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.phone} type="text" id="defaultFormRegisterNameEx" className="form-control" name="phone"/>
                        </Form.Group>

                        {/**Email */}
                        <Form.Group as={MDBCol} >
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="email">
                                Your email
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.email} type="email" id="defaultFormRegisterEmailEx" className="form-control" name="email"/>
                        </Form.Group>
                        </Form.Row>

                        {/**Date -> need to be calendar */}
                        <Form.Group>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="date">
                                Date
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.date} type="text" id="defaultFormRegisterEmailEx" className="form-control" name="date"/>
                        </Form.Group>

                        {/**time -> needs to be in time format*/}
                        <Form.Group>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="time">
                                Time
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.time} type="text" id="defaultFormRegisterEmailEx" className="form-control" name="time"/>
                        </Form.Group>

                        <Form.Row>
                        {/**Service -> needs to be in time format*/}
                        <Form.Group as={MDBCol} >
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="service">
                                Service
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.service} type="text" id="defaultFormRegisterEmailEx" className="form-control" name="service"/>
                        </Form.Group>

                        {/**Comments -> needs to be in time format*/}
                        <Form.Group as={MDBCol} >
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="comments">
                                Comments
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.comments} type="text" id="defaultFormRegisterEmailEx" className="form-control" name="comments"/>
                        </Form.Group>
                        </Form.Row>

                        <div className="btn btn-primary">
                            <MDBBtn type="submit">
                                Book now!
                            </MDBBtn>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};
export default Booking