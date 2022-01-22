import React, { useEffect, useRef, useState } from 'react'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import doge from './images/doge.png'
import { useNavigate } from 'react-router'
import app, { auth } from '../firebase'
import Modal from 'react-modal';
import Settinguser from './Settinguser'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background:"black"
    },
  };
function Dash() {
    const [user, setUser] =  useState()
    const history = useNavigate()
    const [number, setNumber] = useState(0)
    const [bal, setBal] = useState(0.00)
    const [dep, setDep] = useState(0.00)
    var [name,setName] = useState("Maola")
    const amountRef = useRef()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user!=null)
            {
               setUser(user)
               app.database().ref().child('Rabolution/users/'+user.uid+'/username').on('value', snapshot => {
            
                setName(snapshot.val()) 
                 
            })
            app.database().ref().child('Rabolution/users/'+user.uid+'/bal').on('value', snapshot => {
            
                setBal(snapshot.val()) 
                 
            })
            app.database().ref().child('Rabolution/users/'+user.uid+'/dep').on('value', snapshot => {
            
                setDep(snapshot.val()) 
                 
            })
            } 
          })
    }, [])
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

   function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <Nav/>
            <div>
            <div className='dash_opt'>
            <p style={{textAlign:"left",margin:"1rem",cursor:"pointer",fontWeight:"bold"}} className='dash_clicks'
            onClick={()=>{setNumber(0)}}><i class="fas fa-user" ></i> Dashboard</p>
            <p style={{textAlign:"left",margin:"1rem",cursor:"pointer",fontWeight:"bold"}} className='dash_clicks'
             onClick={()=>{setNumber(1)}}><i class="fas fa-chart-area" ></i> Select Plan</p>
            <p style={{textAlign:"left",margin:"1rem",cursor:"pointer",fontWeight:"bold"}} className='dash_clicks'
             onClick={()=>{setNumber(2)}}><i class="fas fa-wallet" ></i> Withdraw</p>
            <p style={{textAlign:"left",margin:"1rem",cursor:"pointer",fontWeight:"bold"}} className='dash_clicks'
             onClick={()=>{setNumber(3)}}><i class="fas fa-cog" ></i> Settings</p>
            
            </div>
            <div style={{display:"inline-block",width:"75vw",verticalAlign:"top",height:"100vh",overflowY:"scroll"}}>
            {
                number == 0?
                <>
                <p style={{textAlign:"right"}}><b>Hello, {name}😀</b></p>
            <div style={{background:"lightgray",padding:"1.5rem",display:"inline-block",margin:"0.5rem"}}>
            <p>My Balance</p>
                <p style={{textAlign:"left",margin:"1rem"}} className='dash_clicks'><i class="fas fa-wallet" ></i> ${bal}</p>
            </div>
            <div style={{background:"lightgray",padding:"1.5rem",display:"inline-block",margin:"0.5rem"}}>
            <p>Total Withdrawal</p>
                <p style={{textAlign:"left",margin:"1rem"}} className='dash_clicks'><i class="fas fa-dollar-sign" ></i> 0.00</p>
            </div>
            <div style={{background:"lightgray",padding:"1.5rem",display:"inline-block",margin:"0.5rem"}}>
            <p>Total Deposit</p>
                <p style={{textAlign:"left",margin:"1rem"}} className='dash_clicks'><i class="fas fa-dollar-sign" ></i> {dep}</p>
            </div>
            <div style={{background:"lightgray",padding:"1.5rem",display:"inline-block",margin:"0.5rem"}}>
            <p>Current Plan</p>
                <p style={{textAlign:"left",margin:"1rem"}} className='dash_clicks'> You are not on any plan</p>
            </div>
                </>
                :  number == 1?
                <>
                    <h2 style={{marginLeft:"1rem"}}><i class="fas fa-chart-area" ></i> Select Plan</h2>
                    <div style={{background:"grey",margin:"0 1rem"}}>
                    <p style={{margin:"0 1rem", color:"white",background:"black",textAlign:"center"}}>Bronze Plan</p>
                    <p style={{margin:"1rem", color:"white",background:"grey",textAlign:"center"}}>*5% weekly interest</p>
                    <button style={{margin:"1rem",background:"red",color:"white"}} className="btn2" onClick={()=>{openModal()}}>Invest Now</button>
                    <p style={{margin:"0 1rem", color:"white",background:"black",textAlign:"center"}}>Silver Plan</p>
                    <p style={{margin:"1rem", color:"white",background:"grey",textAlign:"center"}}>*10% weekly interest</p>
                    <button style={{margin:"1rem",background:"red",color:"white"}} className="btn2" onClick={()=>{openModal()}}>Invest Now</button>
                    <p style={{margin:"0 1rem", color:"white",background:"black",textAlign:"center"}}>Gold Plan</p>
                    <p style={{margin:"1rem", color:"white",background:"grey",textAlign:"center"}}>*20% weekly interest</p>
                    <button style={{margin:"1rem",background:"red",color:"white"}} className="btn2" onClick={()=>{openModal()}}>Invest Now</button>
                    <p style={{margin:"0 1rem", color:"white",background:"black",textAlign:"center"}}>Diamond Plan</p>
                    <p style={{margin:"1rem", color:"white",background:"grey",textAlign:"center"}}>*50% weekly interest</p>
                    <button style={{margin:"1rem",background:"red",color:"white"}} className="btn2" onClick={()=>{openModal()}}>Invest Now</button>
                    </div>
                </>
                : number == 2?
                <>
                <h2 style={{marginLeft:"1rem"}}><i class="fas fa-wallet" ></i> Withdraw</h2>
                <p style={{color:"red"}}>You're not yet eligible for a Withdrawal</p>
                </>
                : number == 3?
                <>
                <h2 style={{marginLeft:"1rem"}}><i class="fas fa-cog" ></i> Settings</h2>
                <Settinguser/>
                </>
                :
                <>    
                </>
            }
            
           </div>
            </div>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <p style={{color:"white"}}>Please copy and send to this address</p>
        <b style={{color:"white"}}>Bitcoin👇</b>
        <h3 style={{border:"1px solid white", color:"white",borderStyle:"dashed"}}>3JJkChNXjF1HTU36bbEd1QiYmkqqmjUS25</h3>
        <b style={{color:"white"}}>LightCoin👇</b>
        <h3 style={{border:"1px solid white", color:"white",borderStyle:"dashed"}}>3JJkChNXjF1HTU36bbEd1QiYmkqqmjUS25</h3>
        <b style={{color:"white"}}>Ethereum👇</b>
        <h3 style={{border:"1px solid white", color:"white",borderStyle:"dashed"}}>3JJkChNXjF1HTU36bbEd1QiYmkqqmjUS25</h3>
      
        <button className="form-inputlogin-btn" type='submit' style={{
            width: "100%", 
        }} onClick={closeModal}>
          Cancel
        </button> 
      </Modal>
            <Footer marg={"0rem"}/>
        </div>
    )
}

export default Dash
