import React, { Component } from 'react';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styles from './banner.css'
import barkadaLogo from './logo.png'

class Banner extends Component {
    render() {

        return (
            <div>
          <ParallaxBanner
            style={{
              height: "100vh"
            }}
            layers={[
              {
                children: (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100vh",
                      backgroundSize: "cover",
                      overflow: "hidden",
                      backgroundImage: `url(${banner})`
                    }}
                  >
                    <img
                      src={barkadaLogo}
                      style={{
                        marginLeft: "10px",
                        marginTop: "30px",
                        position: "relative",
                        width: "200px",
                        height: "auto"
                      }}
                    />
                  </div>
                ),
                amount: 0.6,
                expanded: false
              }
            ]}
          />

            </div>
        )
    }
}

export default Banner;
