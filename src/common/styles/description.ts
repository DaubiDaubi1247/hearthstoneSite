import { DescriptionPropsT, DescriptionTitleT } from './../types/descriptionStyleT';
import styled from "styled-components";


export const WrapperDescription = styled.div`
        align-self:center

`

export const DescriptionItem = styled.span<DescriptionPropsT>`
    display: ${props => props.visible ? props => props.display : "none"};
    margin-bottom: 5px;
    
`

export const DescriptionTitle = styled.span<DescriptionTitleT>`
    margin-right:${props => props.margin ? "10px" : 0};
    font-weight: 700;
    span {
        font-weight:400;
    }
`