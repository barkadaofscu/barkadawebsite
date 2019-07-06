import React, { Component } from 'react'
import barkadaLogo from './logo1.png'
import { Parallax } from 'react-scroll-parallax';

class navBar extends Component {

    render() {

        return (
            <Parallax>
                <div style={{ height: "auto", width: "100%" }}>
                    <img src={barkadaLogo} style={{ width: "10%", height: "10%" }} />
                </div>
            </Parallax>

        )
    }
}

export default navBar;
