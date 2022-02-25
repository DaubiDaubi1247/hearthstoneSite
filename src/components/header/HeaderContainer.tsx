import HeaderLogo from "./HeaderLogo/HeaderLogo"
import HeaderNav from "./HeaderNav/HeaderNav"
import { HeaderWrapper } from "./headerWrapper"

const HeaderContainer : React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo/>
            <HeaderNav/>
        </HeaderWrapper>
    )
}

export default HeaderContainer