import styled from "styled-components";
import { MainContentItemStyles } from "./mainContentItemT";

export const WrapperForVisible = styled.div<MainContentItemStyles>`
    visibility : ${props => +props.visible}
`