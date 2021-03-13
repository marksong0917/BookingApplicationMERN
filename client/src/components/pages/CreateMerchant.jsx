import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const New = function () {
  const [inputs, setInputs] = useState({
    businessName: '',
    address: '',
    city: '',
    postalCode: '',
    province: '',
    phone: '',
    email: '',
    status: 'DRAFT',
  });

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const resp = await Axios.post('/merchant', inputs);

      if (resp.status === 200)  {
        toast("The post was created successfully", {
          type: toast.TYPE.SUCCESS
        });
        setRedirect(true);
      } else {
        toast("There was an issue creating the post", {
          type: toast.TYPE.ERROR
        });
      }
    } catch (error) {
      toast("There was an issue creating the post", {
        type: toast.TYPE.ERROR
      });
    }
  };

  const handleInputChange = async event => {
    event.persist();

    const { name, value } = event.target;

    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  };

  if (redirect) return (<Redirect to="/message"/>);

  return (
    <Container className="my-5">
      <header>
        <h1>Create New Merchant</h1>
      </header>

      <hr/>

      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Business Name:</Form.Label>
            <Form.Control
              name="businessName"
              onChange={handleInputChange}
              value={inputs.businessName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Address:</Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              onChange={handleInputChange}
              value={inputs.address}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>City:</Form.Label>
            <Form.Control
              name="city"
              onChange={handleInputChange}
              value={inputs.city}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Postal Code:</Form.Label>
            <Form.Control
              name="postalCode"
              onChange={handleInputChange}
              value={inputs.postalCode}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Province:</Form.Label>
            <Form.Control
              name="province"
              onChange={handleInputChange}
              value={inputs.province}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              name="phone"
              onChange={handleInputChange}
              value={inputs.phone}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              name="email"
              onChange={handleInputChange}
              value={inputs.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status:</Form.Label>
            <Form.Control
              as="select"
              name="status"
              onChange={handleInputChange}
              defaultValue={inputs.status || 'DRAFT'}
            >
               <option value="DRAFT">DRAFT</option>
              <option value="PUBLISHED">PUBLISHED</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <button type="submit" className="btn btn-primary">Create</button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );

};

export default New;