import React, { Component } from "react";
import mountain from "./assets/mountain.jpg";
import mariaclara from "./assets/maria_clara.jpg";
import modern from "./assets/modern.jpg";
import muslim from "./assets/muslim.jpg";
import rural from "./assets/rural.jpg";
import tribal from "./assets/tribal.jpg";
import "./styles.css";

const suite = [
    {id: '1', cover: mariaclara},
    {id: '2', cover: mountain},
    {id: '3', cover: modern},
    {id: '4', cover: tribal},
    {id: '5', cover: muslim},
    {id: '6', cover: rural},
]
class SuiteOverview extends Component {

    render(){
        return(
            <div style={{width: '100%', height: '100%'}}>
                {suite.map(s => <div key={s.id} style={{width: '30%', height: 'auto', marginLeft: '2%', marginTop: '3%',float: 'left', }}>
                    <img src={s.cover} style={{width: '100%', height: '100%'}} />
                </div>)}
            </div>
        )
    }
}

export default SuiteOverview;
