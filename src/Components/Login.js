import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { auth } from '../firebase'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import './Regs/Form.css'


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useNavigate()
    const [user, setUser] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault()
      
        try {
          setError("")
          setLoading(true)
          await auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(userCredentials => {
            history("/dash")
          })
          .catch(error)
          
          
        } catch {
          setError("Failed to log in")
        }
        setLoading(false)
      }
    return (
        <div>
            <Nav/>
            <div className='dashboard-stats2'>
            <form onSubmit={handleSubmit} className='form' >
      <p style={{color: "red"}}>{error}</p>
      <div className='form-inputs'>
          <label className='form-label'>Email*</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            ref={emailRef} 
            required={true}
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password*</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            ref={passwordRef}
            required={true}
          />
        </div>
       
        <button className="form-inputlogin-btn" type='submit' disabled={loading} style={{
            width: "100px",
            margin:"2rem auto",
            display:"table"
           
        }}>
          Log in
        </button> 
        
        <div>
         <p className="form-content-right" style ={{ width:"100%"}}><Link to="/forgot">Forgot password?</Link></p>   
        </div> 
      </form>
      </div>
      <Footer/>
        </div>
    )
}

export default Login
