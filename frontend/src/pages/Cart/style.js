import styled from "styled-components";
import { mobile } from "../../responsive";

export const CartWrapper = styled.div`
    padding: 20px 100px;
    ${mobile({ padding: "10px 0px" })}

`;

export const CartHeader = styled.div`
    width:100%;
    background: pink;
`

export const CartHeaderTitle = styled.div`
    font-size: 40px;
    padding:20px 20px;
`
export const CartHeaderContent = styled.div`
    font-size: 20px;
    padding:10px 20px;
`
export const CartContentWrappet = styled.div`
    width: 100%;
    border: 5px solid #BD5D5D;
    margin-top:10px;
`

export const CartItemWrapper = styled.div`
    width: 80%;
    border: 2px solid #FF9900;
    padding: 20px 20px;
    margin: 10px auto;
`

export const CartItemTitleWrapper = styled.div`
    width: 80%;
    padding: 20px 20px;
    margin: 10px auto;
    font-size: 20px;
    display: flex;
`

export const CartItemTitle = styled.div`
    width:40%;
`

export const Item = styled.div`
    display: flex;
    font-size: 20px;;
`

export const ItemName = styled.div`
    width:42%;
`

export const ItemNumber = styled.div`
    width:40%;
`

export const Button = styled.button`
    color: #FDFEFE;
    background: #A0A0A0;
    border-radius: 5px;
    border: 1px solid #9EA482;
    text-decoration : none ;
    cursor: pointer;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    flow: right;
`


export const SummaryWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top:10px;
    background: lightblue;
    font-size: 40px;
`
export const Summarytext= styled.div`
    width: 90%;

`

export const Disappear=styled.div`
    display:none;
`