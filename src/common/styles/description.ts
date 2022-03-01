import { DescriptionPropsT } from './../types/descriptionStyleT';
import styled from "styled-components";


export const WrapperDescription = styled.div`
        align-self:center

`

export const DescriptionItem = styled.span<DescriptionPropsT>`
    display: ${props => props.visible ? props => props.characteristic : "none"};
    span:not([class]) {
        margin-right:${props => props.margin ? "10px" : 0};
        font-weight: 700;
    }
`