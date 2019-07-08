import React, { Component } from 'react';
import {Parallax, ParallaxProvider, ParallaxBanner} from 'react-scroll-parallax'
import './styles.css'

const SuiteGroupTitle = (props) =>{
    
    return(
        <div style={{width:"100%", height:"100%"}}>

			<Parallax y={[0,"0%"]}>
				<div style={{width: "100%", height: "150px", backgroundColor: "black", textAlign: "center", overflow: "hidden"}}>

						{/**
						
						                        <img src={mountain} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={mariaclara} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        <img src={modern} style={{float: "left", marginLeft: "2.5%", width: "40%", height: "auto"}} />
                        <img src={muslim} style={{float: "right", marginRight: "2.5%", width: "40%", height: "auto"}} />
                        */}
                        <h1 className="suiteTitle">{props.title}</h1>

				</div>
			</Parallax>

        </div>       
    );
};


export default SuiteGroupTitle;
