import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import "./Nav.css"
import 'reactjs-popup/dist/index.css';
import {MenuItem} from './MenuItem'
import { auth } from '../../firebase';
import '../../App.css'


function Nav() {
    const history = useNavigate()
    const [clicked, setClicked] = useState(false)
    const [logged, setLogged] = useState(false)

    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if(user!=null)
        {
         setLogged(true)
        } 
  })
    
    }, [])
    return (
        <div>
             <nav className = "NavbarItems">
             <div>
                  <i class="fas fa-coins" style={{float:"left",margin:"0.5rem",fontSize:"25px",color:"red"}}></i>
             <i class="fab fa-ethereum" style={{float:"left",margin:"0.5rem",fontSize:"25px",color:"red"}}></i>
             <i class="fab fa-bitcoin" style={{float:"left",margin:"0.5rem",fontSize:"25px",color:"red"}}></i>
             </div>
            
             <div className='menu'>
             {
               logged? 
               <span style={{float:"right",margin:"0.5rem",fontSize:"15px",cursor:"pointer",color:"red"}} onClick={()=>{history("/dash")}}>My Dashboard</span>
               :
               <>

               </>
             }
             <span style={{float:"right",margin:"0.5rem",fontSize:"15px",cursor:"pointer",color:"red"}}>Contact Us</span>
             <span style={{float:"right",margin:"0.5rem",fontSize:"15px",cursor:"pointer",color:"red"}}>About Us</span>
             <span style={{float:"right",margin:"0.5rem",fontSize:"15px",cursor:"pointer",color:"red"}}  onClick={()=>{
              history("/")
            }}>Home</span>   
             </div>
             <div className='menu_m'>
             <i className={clicked ? 'fas fa-times':'fas fa-bars'} style={{float:"right",margin:"0.5rem",fontSize:"17px",color:"red"}}
             onClick={()=>{setClicked(!clicked)}}></i>
             <ul className= {clicked ? 'nav-menu active' : 'nav-menu'}>
               {MenuItem.map((item,index)=>{
                   return(
                     <div className='App'>
                       <li key ={index} >
                    <a className={item.cName} href={item.url} style={{marginTop:"1rem",color:"white",textDecoration:"none"}}>
                    {item.title}
                    </a> 
                    </li>
                     </div>
                    
                   )
               })} 
               {
               logged? 
               <div className='App'>
                <b style={{color:"white",textAlign:"center"}} onClick={()=>{history("/dash")}}>My Dashboard</b>
    
               </div>
               :
               <>

               </>
             } 
               </ul>
             </div>
             
              </nav>
        </div>
    )
}

export default Nav
