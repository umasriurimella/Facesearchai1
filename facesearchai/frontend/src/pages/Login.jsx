import React, { useState } from 'react'
import './login.css'
const Login = () => {

    const [currentState, setCurrentState] = useState('Login');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='login'>
        <div className='column-col'>
        <form onSubmit={onSubmitHandler} className=''>
            
               
                 <h2>Login Page</h2> <br/>
                {/* <hr className='column-col' /> */}
            
            {currentState === 'Login' ? null : <input className='' type="text" placeholder='Name' required />}<br/><br/>
            <input className='' type="email" placeholder='Email' required /><br/><br/>
            <input className='' type="password" placeholder='Password' required />
            </form>
            </div>  
            <br/><br/>
            <div className=''>
                <p className=''>Forgot your password?</p><br/>
                {
                    currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className=''>Create account</p>
                        : <p onClick={() => setCurrentState('Login')} className=''>Login here</p>
                }
           </div><br/><br/>
            <button type='submit' className='btn'>{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
            
               
        
        </div>
           
         
        
        
        
    )
}

export default Login
