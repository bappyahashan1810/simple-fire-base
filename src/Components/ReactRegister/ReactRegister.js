import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../FireBase/Firebase.init';
import { Link } from 'react-router-dom';


const auth = getAuth(app);

const ReactRegister = () => {
    const [passwordError, setPasswordError] = useState('');
    const [sucess, setSucess] = useState(false);
    const handleRegister = event => {
        event.preventDefault();
        setSucess(false);
        // console.log(event.target.email.value);
        const field = event.target;
        const name = field.name.value;
        const email = field.email.value;

        const password = field.password.value;
        console.log(name, email, password);
        if (!/(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/.test(password)) {
            setPasswordError('Minimum 8 characters length,2 letters in Upper Case,1 Special Character,2 numerals and 3 letters in Lower Case:');
            return;

        }
        setPasswordError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSucess('Successful');
                console.log(user);
                handlerVarification();
                userUpdateProfile(name);

            })
            .catch(error => {
                console.error('error: ', error);
                setPasswordError(error.message);
            })
        // email.value = '';
        // password.value = '';
        field.reset();

    }

    const userUpdateProfile = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('User Profile Updated')
            })
            .catch(error => console.error(error))
    }

    const handlerVarification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Send your Email Verification Code,Please Check your Email')
            })
    }
    return (
        <div className='mx-auto w-50'>
            <h3 className='text-primary'>Please Register !</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                    <p className='text-danger'>{passwordError}</p>
                    <p className='text-success'>{sucess}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registation
                </Button>
            </Form>
            <p><small>Have an Account? Please <Link to='/login'>LogIn</Link></small></p>
        </div>
    );
};

export default ReactRegister;