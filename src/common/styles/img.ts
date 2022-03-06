import { ImgPropsT } from './../types/imgT';
import styled from "styled-components";

export const WrapperImg = styled.div<ImgPropsT>`
    cursor : ${props => props.isValidValue && "pointer"}
`