import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import mountain from './assets/mountain.jpg';
import banner from './assets/suite_banner.jpg'
import styles from './styles.css'

class SuiteBanner extends Component {

    render() {

        return (
            <div className={styles.bannerContainer}>
                <ParallaxBanner
                    style={{
                        height: '100vh'
                    }}
                    layers={[
                        {
                            children: (
                                <div style={{position: "relative", width:"100%", height: "100vh",backgroundSize: 'cover', overflow:'hidden', backgroundImage: `url(${banner})`}}>
                                    <div style={{color: "white", marginTop: "25%", textAlign: "center", fontSize: "40px"}}><h1>Suites</h1></div>
                                </div>
                            ),
                            amount: 0.75,
                            expanded: false
                        },
                    ]}
                >
                </ParallaxBanner>
            </div>
        )
    }
}

export default SuiteBanner;