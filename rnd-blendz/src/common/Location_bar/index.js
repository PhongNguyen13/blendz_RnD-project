import React, { Component } from "react";
import {LocaBar, Pages } from './style';

class LocationBar extends Component {
    render(){
        return(
            <div>
                <LocaBar>Location: 
                    <Pages href="/home">Home</Pages>
                </LocaBar>
            </div>
        )
    }
}

export default LocationBar;