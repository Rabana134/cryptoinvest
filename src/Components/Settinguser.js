import React, { useEffect, useRef, useState } from 'react'
import {getAuth, updateEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import app from '../firebase';


function Settinguser() {
    var [name,setName] = useState("")
    var [email,setEmail] = useState("")
    const nameRef = useRef()
    const emailRef = useRef()
    const auth = getAuth();
  
    const [message, setMessage] = useState("")
    const history = useNavigate()
  
    
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user!=null)
      {
        app.database().ref().child('Rabolution/users/'+user.uid+'/username').on('value', snapshot => {
          
          setName(snapshot.val()) 
            
      })
      app.database().ref().child('Rabolution/users/'+user.uid+'/email').on('value', snapshot => {
          
        setEmail(snapshot.val()) 
          
    })
  } 
})
  
  }, [])
    async function handleSubmit(e){
      e.preventDefault()
      setMessage("")
      var user = app.auth().currentUser;
      user.updateEmail(email).then(() => {
        app.database().ref("Rabolution/users/"+user.uid).update({
          username: nameRef.current.value,
          email: emailRef.current.value,
       
        })
        setMessage("Successful!")
      }).catch((error) => {
        // An error occurred
        // ...
      });
       
    }
   
    return (
        <div >
        <div>
             <div className='dashboard-stats2' >
             <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit} className="form-input">
            <div className="form-content-right">   
            <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            defaultValue= {email}
            ref={emailRef} required
          />
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
              placeholder='Username'
              defaultValue= {name}
              ref={nameRef}
            />
        </div>
        
        <p style={{color: "green"}}>{message}</p> 
        <p style={{color: "blue",cursor:"pointer"}} onClick={()=>{
          history("/forgot")
        }}>Change Password</p> 
<button  className="form-inputlogin-btn" type='submit'>
          Update
        </button>
      </div>
      
            </form>
            </div>
            </div>
        </div>
    )
}

export default Settinguser
