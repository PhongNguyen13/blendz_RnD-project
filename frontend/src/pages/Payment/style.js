import styled from "styled-components";
import { mobile } from "../../responsive";

export const PayPalScriptProvider = styled.div`
    padding: 50px 100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
`

export const PayPalHostedFieldsProvider = styled.div`
    padding: 50px 100px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
    }
`

export const PayPalHostedField = styled.div`
    height: 50px;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    display: inline-block;
    box-shadow: none;
    font-family: 'monospace';
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #dddddd;
    line-height: 20px;
    background: #fcfcfc;
    margin-bottom: 12px;
    background: linear-gradient(to right, white 50%, #fcfcfc 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 300ms ease-in-out;
    font-size: 16px;
    color: #3A3A3A;
`