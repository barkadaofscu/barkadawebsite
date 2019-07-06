import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';

class About extends Component{
	
	render(){
		
		return(
			
			<Parallax y={[0,"0%"]}>
				<div style={{width: "100%", height: "800px", backgroundColor: "black", textAlign: "center"}}>

						{/**
						
						                        <img src={mountain} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={mariaclara} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        <img src={modern} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={muslim} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        */}
                        <h1 style={{color: "white", margin: 0}}>About</h1>

                        <p style={{color: "white", margin: "50px"}}>Philippino Culture Night is the largest student run culture show at Santa Clara University</p>
				</div>
			</Parallax>
		)
	}
}

export default About;
