import { NavLink } from "react-router-dom"
import headerS from "./headerNav.module.css"

const HeaderNav : React.FC = () => {
    return(
        <nav className={headerS.headerNav}>
            <NavLink to="/" >На Главную</NavLink>
        </nav>
    )
}

export default HeaderNav