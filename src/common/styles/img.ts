import { ImgPropsT } from './../types/imgT';
import styled from "styled-components";

export const WrapperImg = styled.div<ImgPropsT>`
    img {
        max-width:400px;
        max-height:500px;
    }
    margin-right: 10px;
    cursor : ${props => props.isValidValue && "pointer"}
`