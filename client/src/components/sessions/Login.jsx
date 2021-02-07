import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import {Form, Container} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify';

const Login = ({setUser}) => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''   
    }); 
    const [redirect, setRedirect] = useState(false)
    const handleSubmit = async event => {
        event.preventDefault();
        try{
                const resp = await Axios.post('/api/users/login-user', 
                inputs);
               
            if (resp.status=== 200){
                
                setUser(resp.data.user)
                toast('You have logged in successfully', {
                    type: toast.TYPE.SUCCESS
                });
                setRedirect(true)
            } else {
                console.log(resp.data.user);
                toast('There was an issue logging you in. Please check your credentials', {
                    type: toast.TYPE.ERROR
                });
            }
        } catch(error) {
            toast('There was an issue logging you in. Please check your credentials', {
                type: toast.TYPE.ERROR
            });
        }
        
    };
    const handleInputChange = event => {
        event.persist();
        const {name, value} = event.target;

        setInputs(inputs => ({...inputs, [name]: value}));
        console.log(inputs);
    };
    if (redirect) return <Redirect to="/"/>
 return (
        <Container className="my-5">
        <header>
        <h1>Login</h1>
        </header>
        <hr/>

         <Form onSubmit={handleSubmit}>
             
            <Form.Group>
                <label htmlFor="username">Username:</label>
                <Form.Control className="form-control" type="text" name="username" onChange={handleInputChange} value={inputs.email}/>
            </Form.Group>

            <Form.Group>
                <label htmlFor="password">Password:</label>
                <input className="form-control" type="password" name="password" onChange={handleInputChange} value={inputs.password}/>
            </Form.Group>

            <Form.Group>
                <button className="btn btn-primary">Login</button>
             </Form.Group>
             
        </Form>
        </Container>
    );
};

export default Login;