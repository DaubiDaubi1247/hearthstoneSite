import { ComponentType } from "react"
import Preloader from "../common/preloader/Preloader"
import { CardInfoMidPropsT } from "../components/card/cardInfoContainerT"
import { EpicGamesMainPropsT } from "../components/epicGames/epicGames/epicGamesMainT"
import { useAppSelector } from "../redux/hooks/hooks"

type PropsTypes = EpicGamesMainPropsT | CardInfoMidPropsT | {}

const WithPreloader = (Component : ComponentType<any>) => {
    const loading = useAppSelector(state => state.common.loading)
    return (props : PropsTypes) => {
        if (loading) {
            return <Preloader/>
        }
        return (
            <>
                <Component {...props}/>
            </>
        )
    }
}

export default WithPreloader