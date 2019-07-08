import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import mountain from './assets/mountain.jpg';
import mariaclara from './assets/maria_clara.jpg';
import modern from './assets/modern.jpg';
import muslim from './assets/muslim.jpg';
import rural from './assets/rural.jpg';
import tribal from './assets/tribal.jpg'
import './styles.css';

const SuiteOverview = (props) =>{

        return(
            <div style={{width: "100%", height:"100%"}}>
                    <ParallaxBanner
                    style={{
                        height: '100vh',
                    }}
                    layers={[
                        {
                            children: (
                                <div style={{position: "relative", width:"100%", height: "100vh",backgroundSize: 'cover', overflow:'auto', backgroundColor: "red"}}>

                                </div>
                            ),
                            amount: 0.2,
                            expanded: false
                        },
                        {
                            children: (
                                <div style={{}}>
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

export default SuiteOverview;
