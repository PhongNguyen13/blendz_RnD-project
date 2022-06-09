import React, { Component } from "react";
import { AboutWrapper, RightWrap, Title, Content, Image } from "./style";
import about from '../../assets/about.png';



class About extends Component {
    render(){
        return(
            <AboutWrapper>
                <RightWrap>
                    <Title>ABOUT<span>BLENDZ</span></Title>
                    <Content> 
                        <p>In 1961 a very clever Italian man named Salvatore Cortese invented the first slush machine, he went
                             on to found the company Elmeco who make the most advanced slush machines available worldwide. </p><br></br><br></br>
                             <img width={250} height={250} src={about}/>
                         <p>    In 2010 Blendz was founded to bring these exceptional desert machines (Granita) to New Zealand
                              and the South Pacific, Blendz has gone on to produce the best natural flavours available in New
                               Zealand specifically designed for satisfaction and operation in the Elmeco slush machines.
                        </p>
                    </Content>
                </RightWrap>
            </AboutWrapper>
        )
    }
}

export default About;