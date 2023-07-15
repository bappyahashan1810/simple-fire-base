import React from 'react';
import ReactRegister from '../ReactRegister/ReactRegister';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='m-3 rounded-5 p-2 btn btn-outline-primary' to='/'>Register</Link>
            <Link className='m-3 rounded-5 p-2 btn btn-outline-primary' to='/login'>LogIn</Link>
        </div>
    );
};

export default Header;