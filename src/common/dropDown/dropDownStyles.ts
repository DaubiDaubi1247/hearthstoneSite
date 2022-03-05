import styled from "styled-components";
import { MainContentItemStyles } from "./dropDownT";



export const ListInfo = styled.div`
    
`

export const WrapperDropDown = styled.div<{backgroundColor?: string}>`
    display: grid;
    grid-template-columns : 1fr;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 6px;
    background-color : ${props => props.backgroundColor || "rgb(180,180,180)"};
    padding: 10px;
    cursor: pointer;
`

export const WrapperForVisible = styled.div<MainContentItemStyles>`
    opacity : ${props => +props.visible};
    visibility : ${props => props.visible ? "visible" : "hidden"};
    transition: all ease 1s;
    div {
        display : ${props => props.visible ? "block" : "none"}
    }
`


export const ListItem  = styled.p `
    margin: 10px 0;
`

export const Title = styled.span `

`