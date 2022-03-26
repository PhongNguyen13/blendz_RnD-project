import React, { Component } from "react";
import { AboutWrapper, InfoWrapper, Title, Content } from "./style";

class About extends Component {
    render(){
        return(
            <AboutWrapper>
                <InfoWrapper>
                    <Title>We are Blendz</Title>
                    <Content>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown prin
                        ter took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
                        Ipsum.
                    </Content>
                </InfoWrapper>
            </AboutWrapper>
        )
    }
}

export default About;