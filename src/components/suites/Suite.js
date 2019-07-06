import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import mountain from './assets/mountain.jpg';
import mountain1 from './assets/mountain1.jpg';
import mariaclara from './assets/maria_clara.jpg';
import mariaclara1 from './assets/maria_clara1.jpg';
import modern from './assets/modern.jpg';
import muslim from './assets/muslim2.jpg';
import muslim1 from './assets/muslim1.jpg';
import rural from './assets/rural.jpg';
import tribal from './assets/tribal.jpg'
import './styles.css'

class Suite extends Component{
	
	render(){
		
		return(
			
			<Parallax y={[0,"0%"]}>
				<div style={{width: "100%", height: "2000px", backgroundColor: "black", margin: 0, textAlign: "center"}}>

						{/**
						
						                        <img src={mountain} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={mariaclara} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        <img src={modern} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={muslim} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        */}

                        <div style={{ width:"auto", height:"25%" }} >
                            
                                <img src={mountain} style={{marginTop: "10px", marginLeft: "auto", width: "auto", marginRight:"10px", height: "100%"}}/>
                                
                                <img src={mountain1} style={{marginRight: "auto", width: "auto", height: "100%"}}/>
                            </div>

                            <div style={{width:"100%", height:"25%", marginTop:"10px"}} >
                            
                                <img src={mariaclara1} style={{marginLeft: "5%", width: "auto", marginRight:"10px", height: "100%"}}/>
                                <img src={mariaclara} style={{marginRight: "5%", width: "auto", height: "100%"}}/>
                                
                            </div>
                            <div style={{marginTop: "10px", width:"auto", height:"25%"}} >
                            
                                <img src={muslim} style={{marginLeft: "auto", width: "auto", marginRight:"10px", height: "100%"}}/>
                                
                                <img src={muslim1} style={{marginRight: "auto", width: "auto", height: "100%"}}/>
                            </div>
				</div>
			</Parallax>
		)
	}
}

export default Suite;
