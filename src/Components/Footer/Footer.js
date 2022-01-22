import React, { useEffect } from 'react'
import  './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return (
        <div className="footer-background" style={{marginTop:props.marg}}>
        <div className="foot-title">
        <h3 className="foot-title">Join Us</h3>
        <div>
					<ul className="nobull">
							<li>
					<Link to="/signup">			
										<span className="footer-list">Signup</span>
											</Link>
                                            
									</li>
                                    <li>
					<Link to="/">			
										<span className="footer-list">Why Coin Farm</span>
											</Link>
                                            
									</li>
						</ul>
				</div>
        </div>
		<div className="foot-title">
		<h3 className="foot-title">More Info</h3>
        <div>
					<ul className="nobull">
							<li>
					<Link to="/">			
										<span className="footer-list">Press</span>
											</Link>
                                            
									</li>
                                    <li>
					<Link to="/">			
										<span className="footer-list">Awards</span>
											</Link>
                                            
									</li>
                                    <li>
					<a href="/">			
										<span className="footer-list">News</span>
											</a>
                                            
									</li>
						</ul>
				</div>
        </div>
		<div className="foot-title">
		<h3 className="foot-title">About Coin Farm</h3>
        <div>
					<ul className="nobull">
							<li>
					<Link to="/contactus">			
										<span className="footer-list">Contact Us</span>
											</Link>
                                            
									</li>
                                    <li>
					<Link to="/">			
										<span className="footer-list">FAQ</span>
											</Link>
                                            
									</li>
                                    <li>
					<Link to="/policies">			
										<span className="footer-list">About Us</span>
											</Link>
                                            
									</li>
						</ul>
				</div>
			
		</div>
	<div>
	
	</div>
        </div>
    )
}
