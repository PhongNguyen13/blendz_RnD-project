import React, { Component } from "react";
import { HomeWrapper, LeftArea, RightArea, RightItem } from "./style";

class Home extends Component {
    render(){
        return(
            <HomeWrapper>
<<<<<<< HEAD
                <Title>WELCOME TO BLENDZ</Title>
                <Text>
                    <p><strong>Blendz</strong> is the New Zealand and South Pacific distributor of slushy machines from <a href="http://www.elmeco.com/en/" target="_blank">Elmeco</a> in Italy.</p>
                    <p>We offer machine sales and support, rentals, servicing, spare parts, slushy concentrate and accessories as a complete hassle free solution.</p>
                    <p> The ideas for <strong>Blendz</strong> are constantly being developed and tested to provide a range of unique and interesting beverages.</p>
                    <p>'2 Mix it' was conceived in conjunction with <strong>Blendz</strong>, as the vehicle in which the blended beverages can be administered.</p>
                    <p>On this site you will see our dispensing machinery and accessories which allows you to make this happen for your business.</p>
                </Text>
=======
                <RightArea>
                    <RightItem className="title">Welcome to Blendz</RightItem>
                    <RightItem className="text">Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan.</RightItem>
                </RightArea>
                <LeftArea></LeftArea>
>>>>>>> 80c3a7c2b4bfa0aa80059741afb7eaf2e3e04827
            </HomeWrapper>
        )
    }
}

export default Home;