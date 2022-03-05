import logo from '../../../common/img/logo.png'
import { Logo, WrapperImg } from './headerLogoStyles'



const HeaderLogo : React.FC = () => {
    return (
        <WrapperImg>
            <a href="/">
                <Logo src={logo} alt=""/>
            </a>
        </WrapperImg>
    )
}

export default HeaderLogo