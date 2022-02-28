import { DescriptionPropsT } from './../types/descriptionStyleT';
import styled from "styled-components";


export const WrapperDescription = styled.div`

`

export const DescriptionItem = styled.span<DescriptionPropsT>`
    display: ${props => props.characteristic};
`