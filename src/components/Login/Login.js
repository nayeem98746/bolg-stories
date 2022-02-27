import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const [loginFromData ,  setLoginFromData] = useState({})

    const handleLoginSubmit = e => {
        e.preventDefault()
        console.log();
      
    }


    return (
      <div className='main-section'>
            <div className='container'>
            <header className='header-font'>Login Form</header>
            <form  className='form-intro' action="" onSubmit={handleLoginSubmit} >
                <div className='input-field'>
                    <input
                     className='input-style' type="email" 
                     name='email'
                     label='email'
                    //  onBlur={handleOnBlur}  
                     required 
                     
                     />
                    <label htmlFor="">Email or Username</label>
                </div>
                <div className='input-field'>
                    <input className='input-style'
                      type="password" 
                      required 
                      name='password'
                    //   onBlur={handleOnBlur}  
                    label='password'
                      
                      />
                    <label htmlFor="">Password</label>
                </div>
                <div className='button'>
                    <div className='inner'></div>
                    <button className='from-button'  
                    type='submit'
                    >Login</button>
                    <NavLink style={{marginTop:'5px'}} as={Link} to='/register' >Please Register</NavLink>
                </div>
            </form>
        </div>
      </div>
    );
};

export default Login;