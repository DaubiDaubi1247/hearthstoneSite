import logo from '../../../common/img/logo.png'
import { Logo } from './headerLogoStyles'



const HeaderLogo : React.FC = () => {
    return (
        <div>
            <Logo src={logo} alt=""/>
        </div>
    )
}

export default HeaderLogo