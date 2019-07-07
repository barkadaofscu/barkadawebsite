import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import './styles.css'

class About extends Component{
	
	render(){
		
		return(
			
			<Parallax y={[0,"0%"]}>
				<div style={{width: "100%", height: "800px", backgroundColor: "black", textAlign: "center", overflow: "auto"}}>

						{/**
						
						                        <img src={mountain} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={mariaclara} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        <img src={modern} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={muslim} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        */}
                        <h1 className="header">About</h1>

                        <p className="content">Philippino Culture Night is the largest student run culture show hosted by Barkada of Santa Clara University. Our title, Pagyakap Sa Pananaw: Embracing Perspectives, explores the idfferent outlooks of what it means to grow up Pilipino, whether that was in the Philippines, the struggles to come to America, and what this means for the following generations of Pilipino Americans. This skit reminds us that our historical past shapes our identity today. We explore the generational and cultural differences we face within our community. By acknowledging our differences, we are better able to embrace our identities and embrace others, bridging our communities together. </p>
				</div>
			</Parallax>
		)
	}
}

export default About;
