import { NavLink } from "react-router-dom"
import headerS from "./headerNav.module.css"

const HeaderNav : React.FC = () => {
    return(
        <nav className={headerS.headerNav}>
            <NavLink to="/" >На Главную</NavLink>
            <NavLink to="/hearthstone">HEARSTONE</NavLink>
            <NavLink to="/epicGames">EPIC GAMES</NavLink>
        </nav>
    )
}

export default HeaderNav