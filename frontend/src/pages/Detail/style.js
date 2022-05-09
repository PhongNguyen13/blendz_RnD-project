import styled from "styled-components";

export const DetailWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap;
    padding: 5% 10%;
    // background: grey;
`;

export const Itemimg = styled.div`
    
    background: grey;
    margin-right: 5%;
    padding: 3%;
    img {
        width: 350px;
        height: 400px;
    }
`;

export const ItemInfo = styled.div`
    background:lightblue; 
    h1 {
        font-size:30px;
        // text-align: center;
        line-height: 150%;
        font-weight: bold;
        margin-bottom: 2%;

    }
    p {
        font-size:20px;
        line-height: 150%;

    }
`;

export const Description = styled.div`
    padding: 2%;

    h1 {
        font-size:30px;
        line-height: 150%;
        font-weight: bold;
        margin-bottom: 2%;  
    }
    li {
        font-size: 20px;
    }
`;

export const Button = styled.div`
    height: 50px;
    float: right;
    color: #FDFEFE;
    background: #A0A0A0  ;
    margin-top: 25px;
    margin-right: 50px;
    padding: 0 30px;
    line-height:45px;
    border-radius: 5px;
    border: 1px solid #9EA482;
    text-decoration : none ;
    cursor: pointer;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
 `;