import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import app, { auth } from '../../firebase'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

function RegForm() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const addressRef= useRef()
    const usernameRef = useRef()
    const [error, setError] = useState("")
    const [value, setValue] = useState("Bitcoin")
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault() 
    
        if (!passwordRef.current.value) {
          return setError("Passwords is required")
        } else if (passwordRef.current.value < 8) {
          return setError('Password needs to be 8 characters or more');
        }
      
        if (!passwordConfirmRef.current.value) {
          return setError("Passwords is required")
        } else if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
      
    
        if (!emailRef.current.value) {
          return setError('Email required');
        } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
          return setError('Email address is invalid');
        }
    
        if (!usernameRef.current.value) {
          return setError('Username required');
        }
        if (!passwordRef.current.value) {
          return setError("Wallet Address is required")
        }
     
        try {
            setLoading(true)
            setError("")
            await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value).then(userCredentials => {
                const user = userCredentials.user;
                user.sendEmailVerification();
                app.database().ref('Rabolution/users/'+userCredentials.user.uid).set({
                    username:usernameRef.current.value,
                    email:emailRef.current.value,
                    address:addressRef.current.value,
                    coin: value
                  })
            })
            
            history("/dash")
            
          } catch (e) {
            setError("Failed to create an account")
            console.log(e)
          }
        setLoading(false)
  }
  function handleChange(params) {
    setValue(params.target.value)
  }
    return (
        <div>
            <Nav/>
            <div>
            <div className='dashboard-stats2' style={{display:"inline-block"}}>
    
    <form onSubmit={handleSubmit} className='form' >
    <p style={{color: "red"}}>{error}</p>
    <div className='form-inputs'>
        <label className='form-label'>Username*</label>
        <input
          className='form-input'
          type='name'
          name='username'
          placeholder='Enter your username'
           ref={usernameRef}
           required
        />
        
      </div>
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
      <div>
      <label>
        Select Your Withdrawal Method
            <select className="form-input" value={value} onChange={handleChange}>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Doge">Doge</option>
            </select>
          </label>
      </div>
    </form>
    </div> 
    <div className='dashboard-stats2' style={{display:"inline-block"}}>
    <div className='form-inputs'>
        <label className='form-label'>Wallet Address*</label>
        <input
          className='form-input'
          type='name'
          name='username'
          placeholder='Enter your Wallet Address'
           ref={addressRef}
           required
        />
        
      </div>
    <div className='form-inputs'>
        <label className='form-label'>Password*</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
          onChange={() => setPassword(passwordRef.current.value)}
          ref={passwordRef}
          required={true}
        />
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Re-enter password*</label>
        <input
          className='form-input'
          type='password'
          name='password2'
          placeholder='Confirm your password'
          ref={passwordConfirmRef} required
        />
      </div>
    </div>
    <form onSubmit={handleSubmit} className='form' >
      <button className="form-inputlogin-btn" type='submit' disabled={loading} style={{
          width: "100px",
          margin:"2rem auto",
          display:"table"
         
      }}>
       Register
      </button>    
    </form>   
      <div>
      <p style={{fontSize:"13px", display:"inline"}}><b>Do You Already Have An Account? <Link to="/login" >Sign In</Link></b></p>
       
      </div> 
            </div>
            <Footer/>
        </div>
    )
}

export default RegForm
