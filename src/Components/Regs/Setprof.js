import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import app, { auth, storage } from '../../firebase.js'
import Nav from '../Nav/Nav.js'
import validator from 'validator'

function Setprof() {
    const [user, setUser] =  useState()
    const history = useNavigate()
    const bioRef = useRef()
    const usernameRef = useRef()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    var [image,setImage] = useState("")
    const [imagef,setImagef] = useState(null)
    var [name,setName] = useState("")
    let myCurrentDate = new Date()
let year = myCurrentDate.getFullYear();
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user!=null)
            {
               setUser(user)
               app.database().ref().child('Rabolution/users/'+user.uid+'/username').on('value', snapshot => {
            
                setName(snapshot.val()) 
                 
            })
            }else{
            auth.signOut()
             history("/signup")
            }
           
          })
    }, [])
    const [value, setValue] = useState('')
    
  const validate = (inputText) => {
    var myString=inputText.toLowerCase()
     var noSpacesString= myString.replace(/ /g,'_');
      setValue(noSpacesString)
  }
    async function handleSubmit(e) {
        e.preventDefault()
        setMessage("")
        app.database().ref('Rabolution/users/'+user.uid).update({
            bio: bioRef.current.value,
            username:usernameRef.current.value,
            search: value,
            year: year,
            uid: user.uid
          }).then(() => {
            setMessage("Successful!")
          history("/")
          })
          .catch((error) => {
            setError("Error while processing, please try again")
          });
    }
    const onImagechange= async (event) =>
    {
      
        if (event.target.files &&event.target.files[0]) {
           setImage(URL.createObjectURL(event.target.files[0]));
           setImagef(event.target.files[0])

           console.log(event.target.files[0])
            const uploadTask = storage.ref(`images/${user.uid}.png`).put(event.target.files[0]);
     await uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(user.uid+".png").getDownloadURL().then(url => {
          app.database().ref('Rabolution/users/'+user.uid+"/profile").update({
          url: url
          })
        })
        
    });
          }
    }
    return (
        <div>
            <Nav/>
            <div className='dashboard-stats2'>
            <form onSubmit={handleSubmit} className='form' noValidate>
      <p style={{color: "red"}}>{error}</p>
      <p style={{color: "green"}}>{message}</p>
      <input type="file" onChange={onImagechange}/>
            <img src={image || 'https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png'} 
             style={{
          borderRadius: "50%",
          width: 100,
          height: 100,
      
        }}
         alt="logo" width="100" height="100"/>
          <div className='form-inputs'>
        <label className='form-label'>Username*</label>
        <input
          className='form-input'
          type='name'
          name='username'
          placeholder='Enter your username'
          defaultValue={name}
          onChange={(e) => validate(e.target.value)}
           ref={usernameRef}
           required
        />
        
      </div>
      <div className='form-inputs'>
          <label className='form-label'>Biography</label>
          <textarea
            className='form-input'
            type='text'
            name='Bio'
            placeholder='Enter Your Biography'
            ref={bioRef} 
            style={{height:"10rem"}}
          />
        </div>
        <button className="form-inputlogin-btn" type='submit' disabled={loading} style={{
            width: "100%",
            
            margin:"2rem 0",
            display:"block"
           
        }}>
          Proceed
        </button> 
      </form>
            </div>
        </div>
    )
}

export default Setprof
