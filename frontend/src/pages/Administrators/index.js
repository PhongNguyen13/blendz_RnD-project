import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Title, Button} from "./style";

class Administrators extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <Title>Administrators</Title>
                    <Button><a href="/Administrators/ManageProduct">Product</a></Button>
                    <Button><a href="/Administrators/ManageUser">User</a></Button>
                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
}

export default Administrators;