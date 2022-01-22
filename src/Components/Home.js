import React from 'react'
import Nav from './Nav/Nav'
import './Nav/Nav.css'
import vid from './images/vid.mp4'
import bit from './images/bit.png'
import { useNavigate } from 'react-router'
import Footer from './Footer/Footer'

function Home() {
  const history= useNavigate()
    return (
        <div>
            <Nav/>
            <div className='containr'>
            <video className='vid' autoPlay loop muted>
            <source src={vid} type='video/mp4' />
            </video>
            <div className='menu'>
              <h1 style={{fontSize:"50px"}} className='txt'>
            UNIVERSAL BEST CLOUD
            </h1>  
            <h1 style={{top:"25%"}} className='txt'>WELCOME ONBOARD</h1> 
            <button style={{top:"50%",left:"45%"}} className="btn"  onClick={()=>{
              history("/signup")
            }}>Join Now</button>
            </div>
            <div className='menu_m'>
              <h1 style={{fontSize:"30px"}} className='txt'>
            UNIVERSAL BEST CLOUD
            </h1>
            <h1 style={{top:"25%",fontSize:"25px"}} className='txt'>WELCOME ONBOARD</h1>  
            <button style={{top:"70%",left:"40%"}} className="btn" onClick={()=>{
              history("/signup")
            }}>Join Now</button>  
            </div>
            </div>
            <div>
              <h2>Join Coin Farm Today!!</h2>
              <div className='div_info'>
              <div className='div-small' style={{display:"inline-block", margin:"2rem"}}>
        <i class="fab fa-bitcoin" style={{fontSize:"50px",margin:"0.1rem"}}></i>
        <p>Open an account</p>
        </div>
        <div className='div-small' style={{display:"inline-block", margin:"2rem"}}>
        <i class="fab fa-ethereum" style={{fontSize:"55px",margin:"0.1rem"}}></i>
        <p>Fund your account</p>
        </div>
        <div className='div-small' style={{display:"inline-block", margin:"2rem"}}>
        <i class="fas fa-coins" style={{fontSize:"50px",margin:"0.1rem"}}></i>
        <p>Receive returns</p>
        </div>
              </div>
              <div className='div_info_m'>
              <div className='div-small_m' style={{display:"inline-block", margin:"2rem"}}>
        <i class="fab fa-bitcoin" style={{fontSize:"20px",margin:"0.1rem"}}></i>
        <p style={{fontSize:"10px"}}>Open an account</p>
        </div>
        <div className='div-small_m' style={{display:"inline-block", margin:"2rem"}}>
        <i class="fab fa-ethereum" style={{fontSize:"20px",margin:"0.1rem"}}></i>
        <p style={{fontSize:"10px"}}>Fund your account</p>
        </div>
        <div className='div-small_m' style={{display:"inline-block", margin:"2rem"}}>
        <i class="fas fa-coins" style={{fontSize:"20px",margin:"0.1rem"}}></i>
        <p style={{fontSize:"10px"}}>Receive returns</p>
        </div>
              </div>  
            </div>
            <div>
            <h2>User Experience</h2>
            <hr/>
            <div>
            <img src={"https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"} style={{
                     color:"white",borderRadius:"50%", display:"inline-block",width:"50px",height:"50px",lineHeight:"30px"}}/>
            <div style={{verticalAlign:"top",display:"inline-block"}}>
            <p style={{textAlign:"start"}}><b>محمد</b></p>
            <b><i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i></b>
            </div>
            <div>
              <b style={{}}>لقد استلمت للتو أول عشرة آلاف دولار ، وذلك بفضل Coin Farm</b>
            </div>
            </div>
            <hr/>
            <div>
            <img src={"https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"} style={{
                     color:"white",borderRadius:"50%", display:"inline-block",width:"50px",height:"50px",lineHeight:"30px"}}/>
            <div style={{verticalAlign:"top",display:"inline-block"}}>
            <p style={{textAlign:"start"}}><b>محمد</b></p>
            <b><i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i></b>
            </div>
            <div>
              <b >لقد استلمت للتو أول عشرة آلاف دولار ، وذلك بفضل Coin Farm</b>
            </div>
            </div>
            <hr/>
            <div>
            <img src={"https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"} style={{
                     color:"white",borderRadius:"50%", display:"inline-block",width:"50px",height:"50px",lineHeight:"30px"}}/>
            <div style={{verticalAlign:"top",display:"inline-block"}}>
            <p style={{textAlign:"start"}}><b>John</b></p>
            <b><i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i></b>
            </div>
            <div>
              <b>Amazing is an understatement!!</b>
            </div>
            </div>
            <hr/>
            <div>
            <img src={"https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"} style={{
                     color:"white",borderRadius:"50%", display:"inline-block",width:"50px",height:"50px",lineHeight:"30px"}}/>
            <div style={{verticalAlign:"top",display:"inline-block"}}>
            <p style={{textAlign:"start"}}><b>SISI</b></p>
            <b><i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star-half-alt" style={{fontSize:"10px"}}></i></b>
            </div>
            <div>
              <b>Great website but payment was a bit sow.</b>
            </div>
            <div style={{margin:"2rem"}}>
            <div >
            <i class="fas fa-coins" style={{margin:"0.5rem",fontSize:"20px"}}></i>
             <i class="fab fa-ethereum" style={{margin:"0.5rem",fontSize:"20px"}}></i>
             <i class="fab fa-bitcoin" style={{margin:"0.5rem",fontSize:"20px"}}></i>
             <b style={{fontSize:"12px"}}>Admin Reply: </b> 
            </div>
            <b style={{fontSize:"12px"}}>So sorry about that SISI, i can assure you that this as been completely resolved</b>
            </div>
            </div>
            <div>
            <hr />
            <img src={"https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"} style={{
                     color:"white",borderRadius:"50%", display:"inline-block",width:"50px",height:"50px",lineHeight:"30px"}}/>
            <div style={{verticalAlign:"top",display:"inline-block"}}>
            <p style={{textAlign:"start"}}><b>Robert</b></p>
            <b><i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i>
            <i class="fas fa-star" style={{fontSize:"10px"}}></i></b>
            </div>
            <div>
              <b>Honestly if you're looking to double or triple your crypto... coin farm is the way!!</b>
            </div>
            <hr style={{margin:"2rem 0rem"}}/>
            </div>
            <div style={{background:"#87ceeb", padding:"40px"}}>
            <h1 style={{color:"white",textAlign:"start"}}>Ready to start earning Crypto!?</h1>
            <button style={{float:"right"}} className="btn2">Join Now</button>
            <img src={bit} className='bit'></img>
            </div>
            </div>
            <Footer marg={"0rem"}></Footer>
        </div>
    )
}

export default Home
