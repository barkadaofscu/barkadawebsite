import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import mountain1 from './assets/mountain.jpg';

const mountain = (props) => {
    return(
        <div style={{width:"100%", height:"100%"}}>
            <ParallaxBanner
                    style={{
                        height: '100vh',
                    }}
                    layers={[
                        {
                            children: (
                                <div style={{width:"100%", height: "100vh", backgroundImage: `url(${mountain1})`}}>

                                </div>
                            ),
                            amount: 0.2,
                            expanded: false
                        },
                        {
                            children: (
                                <div style={{}}>
                                    <p style={{fontSize: "20px", float: "right", marginRight: "100px", width:"25%", height:"25%", marginTop: "25%", color:"white"}}>Budong refers to the peace pact, or peace council, used in the province of Kalinga in the northern part of the Philippines. In this dance, male members of different tribes come together to form a peace pact or some type of allyship.</p>
                                </div>
                            ),
                            amount: 0.5,
                            expanded: false
                        },
                    ]}
                >
                </ParallaxBanner>    
        </div>
        
    )
}

export default mountain;
