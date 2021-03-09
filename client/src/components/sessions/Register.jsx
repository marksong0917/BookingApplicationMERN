import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Form, Container } from 'react-bootstrap';


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
      console.log(resp.status);
      if (resp.status === 200) {
        //setUser(resp.data.user);
        sessionStorage.setItem('user', JSON.stringify(resp.data.user));
        toast('You have registered successfully and been logged in.', {
          type: toast.TYPE.SUCCESS
        });
        setRedirect(true);
      } else {
        toast(resp.status+"There was an issue registering you.", {
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
  } 
  

    return (
      <Container className="my-5 my-container">
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <Form onSubmit={handleSubmit} > {/* add this once we can use onSubmit: onSubmit={handleSubmit} */}
                        <p className="h4 text-center mb-4" >Register</p>

                        <Form.Group>
                            <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="firstName">
                                First Name
                            </label>
                            {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.firstName} */}
                            <Form.Control onChange={handleInputChange} value={inputs.firstName} type="text" id="defaultFormRegisterNameEx" className="form-control" name="firstName"/>
                        </Form.Group>

                        <Form.Group>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="lastName">
                            Last Name
                        </label>
                        {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.lastName} */}
                        <Form.Control onChange={handleInputChange} value={inputs.lastName} type="text" id="defaultFormRegisterNameEx" className="form-control" name="lastName"/>
                        </Form.Group>
                        <Form.Group>
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text" name="email">
                            Your email
                        </label>
                        {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.email} */}
                        <Form.Control onChange={handleInputChange} value={inputs.email} type="email" id="defaultFormRegisterEmailEx" className="form-control" name="email"/>
                        </Form.Group>

                        <Form.Group>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text" name="username">
                            Username
                        </label>
                        {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.lastName} */}
                        <Form.Control onChange={handleInputChange} value={inputs.username} type="text" id="defaultFormRegisterNameEx" className="form-control" name="username"/>
                        </Form.Group>

                        <Form.Group>
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Your password
                        </label>
                        {/**need to add this to the form control below: onChange={handleInputChange} value={inputs.password} */}
                        <Form.Control onChange={handleInputChange} value={inputs.password} type="password" id="defaultFormRegisterPasswordEx" className="form-control" name="password"/>
                        </Form.Group>

                        <div className="btn btn-primary">
                            <MDBBtn color="cyan" type="submit">
                                Register
                            </MDBBtn>

                            {/* <MDBBtn color="light-green" type="submit">
                                Clear
                            </MDBBtn> */}
                        </div>
                    </Form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </Container>
    );
  };
export default Register;