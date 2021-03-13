import React from "react";
import { MDBCol, MDBBtn } from 'mdbreact';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker"; // npm install react-datepicker (reference: https://www.npmjs.com/package/react-datepicker)
import "react-datepicker/dist/react-datepicker.css"; // npm install react-datepicker



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
        event.preventDefault();
        try {
            const resp = await Axios.post('/bookings/', inputs);
            if (resp.status === 200) {
                toast('You have booked successfully!', {
                    type: toast.TYPE.SUCCESS
                });
                setRedirect(true);
            } else {
                toast(resp.status + "There was an issue booking you.", {
                    type: toast.TYPE.ERROR
                  });
            }
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


    /**
     * note for code below: process of binding mongodb to selection input type
     * [ NOT FINISHED ]
     */
     // const componentDidMount = () => {
     //     Axios.get('/merchants/')
     //     .then((response) => {
     //         const data = response.data
     //         console.log(data);
     //     })
     // }
    //componentDidMount()
      
    // add date picker variables
    const [startDate, setStartDate] = useState(new Date());
    // handle when the day changes
    const handleDayChange = (date) => {
        setStartDate(date);
        inputs.date = JSON.stringify(date);
    }

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

                        {/**Date */}
                        <Form.Group>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="date">
                                Date
                            </label>
                            <DatePicker selected={startDate} onChange={handleDayChange} />
                        </Form.Group>

                        {/**time -> needs to be in time format*/}
                        <Form.Group>
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="time">
                                Time
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.time} type="text" id="defaultFormRegisterEmailEx" className="form-control" name="time"/>
                        </Form.Group>

                        <Form.Row>
                        {/**Service*/}
                        <Form.Group as={MDBCol} >
                            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="service">
                                Service
                            </label>
                            <Form.Control onChange={handleInputChange} value={inputs.service} type="text" id="defaultFormRegisterEmailEx" className="form-control" name="service"/>
                        </Form.Group>

                        {/**Comments*/}
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