import React from "react";
import { MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import  { Redirect } from 'react-router-dom'

const CheckIn = () => {
    const [inputs, setInputs] = useState({
      merchantId: '',
      bookingId: '',
    });

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const resp = await Axios.post('/checkins/', inputs);
            if (resp.status === 200) {
                toast('You have checked in successfully!', {
                    type: toast.TYPE.SUCCESS
                });
                setRedirect(true);
            } else {
                toast(resp.status + "There was an issue checking you in.", {
                    type: toast.TYPE.ERROR
                });
            }
        } catch (error) {
            toast("There was an issue checking you in.", {
              type: toast.TYPE.ERROR
            });
            console.log(error)
          }
    };

    if (redirect) {
        return <Redirect to="/CheckInInstructions"/>
    }

    const handleInputChange = event => {
        event.persist();
    
        const {name, value} = event.target;
    
        setInputs(inputs => ({
          ...inputs,
          [name]: value
        }));
      };
    

    /**
     * note for code below: process of binding mongodb to selection input type
     * [ NOT FINISHED ]
     */
     // const mountMerchants = () => {
     //     Axios.get('/merchants/')
     //     .then((response) => {
     //         const data = response.data
     //         console.log(data);
     //     })
     // }
     //
     // const mountBookings = () => {
     //     Axios.get('/bookings/')
     //     .then((response) => {
     //         const data = response.data
     //         console.log(data);
     //     })
     // }
     //

    return (
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <h1 className="header">Check In Form </h1>
                    <Form onSubmit={handleSubmit} > 
                        <Form.Row>
                            {/**Merchant ID -> make drop down */}
                            <Form.Group  as={MDBCol}>
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="merchantId">
                                    Merchant ID
                                </label>
                                <Form.Control onChange={handleInputChange} value={inputs.merchantId} type="text" id="defaultFormRegisterNameEx" className="form-control" name="merchantId"/>
                            </Form.Group>

                            {/**Booking ID -> make drop down */}
                            <Form.Group  as={MDBCol}>
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="merchantId">
                                Booking ID
                                </label>
                                <Form.Control onChange={handleInputChange} value={inputs.bookingId} type="text" id="defaultFormRegisterNameEx" className="form-control" name="bookingId"/>
                            </Form.Group>
                        </Form.Row>
                        <div className= "formBtnDiv">
                            <Form.Group>
                                <button className="btn-style">Check In Now!</button>
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CheckIn