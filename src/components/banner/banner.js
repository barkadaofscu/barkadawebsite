import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styles from './banner.css'
import modern from '../suites/assets/modern.jpg'

class Banner extends Component {
    render() {

        return (
            <div>
                <ParallaxBanner
                    style={{
                        height: '100vh',
                    }}
                    layers={[{
                        children: (
                            <div style={{ width: "100%", height: "100%", backgroundColor: "black"}}>
                            </div>
                        ),
                        amount: 0.2,
                        expanded: false
                    }]}>

                </ParallaxBanner>

            </div>
        )
    }
}

export default Banner;
