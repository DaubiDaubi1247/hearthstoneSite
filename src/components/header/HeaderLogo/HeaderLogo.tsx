import logo from '../../../common/img/logo.png'
import { Logo, WrapperImg } from './headerLogoStyles'



const HeaderLogo : React.FC = () => {
    return (
        <WrapperImg>
            <Logo src={logo} alt=""/>
        </WrapperImg>
    )
}

export default HeaderLogo