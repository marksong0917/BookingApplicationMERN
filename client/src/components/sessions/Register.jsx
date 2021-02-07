import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Form, Container } from 'react-bootstrap';


{/**
import { useState } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = ({setUser}) => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const resp = await Axios.post('/api/users/register-user', inputs);

      if (resp.status === 200) {
        setUser(resp.data.user);
        sessionStorage.setItem('user', JSON.stringify(resp.data.user));
        toast('You have registered successfully and been logged in.', {
          type: toast.TYPE.SUCCESS
        });
        setRedirect(true);
      } else {
        toast("There was an issue registering you.", {
          type: toast.TYPE.ERROR
        });
      }
    } catch (error) {
      toast("There was an issue registering you.", {
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
    return (<Redirect to="/"/>);
  } */}
  
function Register() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <Form> {/* add this once we can use onSubmit: onSubmit={handleSubmit} */}
                        <p className="h4 text-center mb-4">Register</p>

                        <Form.Group>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="firstName">
                                First Name
                            </label>
                            {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.firstName} */}
                            <Form.Control type="text" id="defaultFormRegisterNameEx" className="form-control" name="firstName"/>
                        </Form.Group>

                        <Form.Group>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="lastName">
                            Last Name
                        </label>
                        {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.lastName} */}
                        <Form.Control type="text" id="defaultFormRegisterNameEx" className="form-control" name="lastName"/>
                        </Form.Group>

                        <Form.Group>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="role">
                            Role
                        </label>
                        <div>
                            {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.role} */}
                            <Form.Control as="select" className="browser-default custom-select" name="role">
                                <option value="1">user</option>
                                <option value="2">admin</option>
                                <option value="3">merchant</option>
                            </Form.Control>
                        </div>
                        </Form.Group>
                        
                        <Form.Group>
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="email">
                            Your email
                        </label>
                        {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.email} */}
                        <Form.Control type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                        </Form.Group>

                        <Form.Group>
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Your password
                        </label>
                        {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.password} */}
                        <Form.Control type="password" id="defaultFormRegisterPasswordEx" className="form-control" name="password"/>
                        </Form.Group>

                        <Form.Group>
                            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Password Confirmation:</label>
                            <Form.Control type="password" id="defaultFormRegisterPasswordEx" className="form-control" name="passwordConfirmation"/>
                        </Form.Group>

                        <div className="text-center mt-4">
                            <MDBBtn color="cyan" type="submit">
                                Register
                            </MDBBtn>

                            <MDBBtn color="light-green" type="submit">
                                Clear
                            </MDBBtn>
                        </div>
                    </Form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
    };

export default Register;