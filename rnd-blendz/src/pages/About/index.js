import React, { Component } from "react";
import './About.css'

class About extends Component {
    render(){
        return(
            <div className="AboutWrapper">
                <div className="InfoWrapper">
                    <h1 className="title">We are Blendz</h1>
                    <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown prin
                    ter took a galley of type and scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
                    Ipsum.</p>
                </div>
            </div>
        )
    }
}

export default About;