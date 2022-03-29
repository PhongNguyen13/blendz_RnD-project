import React, { Component } from "react";
import { AboutWrapper, InfoWrapper, Title, Content } from "./style";

class About extends Component {
    render(){
        return(
            <AboutWrapper>
                <InfoWrapper>
                    <Title>WELCOME TO BLENDZ</Title>
                    <Content>
                        Blendz is the New Zealand and South Pacific distributor of slushy machines from Elmeco in Italy.

                        We offer machine sales and support, rentals, servicing, spare parts, slushy concentrate and accessories as a complete hassle free solution.

                        The ideas for Blendz are constantly being developed and tested to provide a range of unique and interesting beverages.

                        '2 Mix it' was conceived in conjunction with Blendz, as the vehicle in which the blended beverages can be administered.

                        On this site you will see our dispensing machinery and accessories which allows you to make this happen for your business.
                    </Content>
                </InfoWrapper>
            </AboutWrapper>
        )
    }
}

export default About;