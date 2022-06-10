import React, { Component } from "react";
import { HomeWrapper, LeftArea, RightArea, RightItem } from "./style";

class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <RightArea>
                    <RightItem className="title">Welcome to Blendz</RightItem>
                    <RightItem className="text">
                    <p><strong>Blendz</strong> is the New Zealand and South Pacific distributor of slushy machines from <a href="http://www.elmeco.com/en/" target="_blank" rel="noreferrer">Elmeco</a> in Italy.<br></br>
                        We offer machine sales and support, rentals, servicing, spare parts, slushy concentrate and accessories as a complete hassle free solution.<br></br>
                        The ideas for <strong>Blendz</strong> are constantly being developed and tested to provide a range of unique and interesting beverages.<br></br>
                        '2 Mix it' was conceived in conjunction with <strong>Blendz</strong>, as the vehicle in which the blended beverages can be administered.<br></br>
                        On this site you will see our dispensing machinery and accessories which allows you to make this happen for your business.</p>
                    </RightItem>
                </RightArea>
                <LeftArea></LeftArea>
            </HomeWrapper>
        )
    }
}

export default Home;