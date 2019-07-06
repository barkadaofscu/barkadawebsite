import React, { Component } from 'react'
import barkadaLogo from './logo1.png'

class nav extends Component{

	render(){

		return(
			<div style={{display: "block", height: "100px", width: "100%", backgroundColor: "black"}}>
					<img src={barkadaLogo} style={{width:"10%", height:"10%"}} />
			</div>	
		)
	}
}

export default nav;
