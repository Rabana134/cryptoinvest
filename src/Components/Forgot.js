import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { auth } from '../firebase'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'

function Forgot() {
    const emailRef = useRef()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setMessage("")
        setError("")
        setLoading(true)
        await auth.sendPasswordResetEmail(emailRef.current.value)
        setMessage("Check your email and reset your password")
      } catch {
        setError("Failed to reset password")
      }
  
      setLoading(false)
    }
    return (
        <div>
            <Nav/>
            <div>
            <div className='dashboard-stats2'> 
      <form onSubmit={handleSubmit} className='form' noValidate>
      <p style={{color: "red"}}>{error}</p>
      <p style={{color: "green"}}>{message}</p>
      <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            ref={emailRef} required
          />
        </div>
        <button className="form-inputlogin-btn" type='submit' disabled={loading} style={{
            width: "100%",
            
            margin:"2rem 0",
            display:"block"
           
        }}>
          Reset Password
        </button> 
        
        <div>
         <p className="form-content-right" style ={{ width:"100%"}}><Link to="/signup">Sign Up</Link> | <Link to="/login">Login</Link></p>   
        </div> 
      </form>
    </div>   
            </div>
            <Footer/>
        </div>
    )
}

export default Forgot
