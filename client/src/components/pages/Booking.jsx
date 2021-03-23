import React from "react";
import { MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import  { Redirect } from 'react-router-dom'
import DatePicker from "react-datepicker"; // npm install react-datepicker (reference: https://www.npmjs.com/package/react-datepicker)
import "react-datepicker/dist/react-datepicker.css"; // css for react-datepicker
import TimePicker from "rc-time-picker"; // npm install react-time-picker rc-time-picker (reference: https://www.npmjs.com/package/rc-time-picker)
import 'rc-time-picker/assets/index.css';// css for  rc-time-picker 

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

    /**
     * Date Picker set up
     */
    // set up date picker variables
    const [startDate, setStartDate] = useState(new Date());
    // handle when the day changes
    const handleDayChange = (date) => {
        setStartDate(date);
        inputs.date = JSON.stringify(date);
    }

    /**
     * Time Picker set up
     */
    // set up time picker variables
    const [time, setTime] = useState('');
    // handle time value when it changes
    const timeOnChange = (e) => {
        setTime(e.format('LT'));
        inputs.time = JSON.stringify(time);
    }

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
    
    if (redirect) {
        return <Redirect to="/BookingInstructions"/>
    }
    


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

                        <Form.Row>
                            {/**Date */}
                            <Form.Group as={MDBCol}>
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="date">
                                    Date
                                </label>
                                <br />
                                <DatePicker selected={startDate} onChange={handleDayChange} />
                            </Form.Group>

                            {/**time -> needs to be in time format*/}
                            <Form.Group as={MDBCol}>
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="time">
                                    Time
                                </label>
                                <br />
                                <TimePicker
                                placeholder="Select Time"
                                use12Hours
                                showSecond={false}
                                focusOnOpen={true}
                                format="hh:mm A"
                                onChange={timeOnChange}
                                />
                            </Form.Group>
                        </Form.Row>

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

                        <div className= "formBtnDiv">
                            <Form.Group>
                                <button className="btn-style">Book Now!</button>
                            </Form.Group>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};
export default Booking