import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../../FireBase/Firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const handlerSubmit = event => {
        setSuccess(false);
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);

            })
            .catch(error => {
                console.error('error :', error);
                setError(error.message);
            })
        form.reset();
    }
    const handlerGetEmail = (event) => {
        const email = event.target.value;
        setUserEmail(email);

    }

    const handlerResetPassword = () => {
        if (!userEmail) {
            alert('Enter your Email');
            return;

        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Send your Reset password,please check your Email');
            })
            .then(() => console.error(error))
    }

    return (
        <div className='mx-auto w-50'>
            <h3 className='text-success'>Please Login !</h3>

            <Form onSubmit={handlerSubmit}>
                {success && <h6 className='text-success'>SuccessFull LogIn</h6>}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handlerGetEmail} type="email" name='email' placeholder="Enter email" required />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                <p className='text-danger'>{error}</p>
            </Form>
            <p><small>Have'nt You Register? please <Link to='/'>Register</Link></small></p>
            <p>Forget Password? Please<button onClick={handlerResetPassword} type="button" className="btn btn-link">Reset Password</button></p>
        </div>
    );
};

export default Login;