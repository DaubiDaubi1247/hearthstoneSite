import { useEffect } from "react"
import WithPreloader from "../../HOC/withPreloader"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { setLoading } from "../../redux/slices/commonSlice/commonSlice"
import { getFreeGame } from "../../redux/thunks/epicGamesThunk"
import EpicGamesMain from "./epicGames/epicGames"



const EpicGamesContainer: React.FC = () => {

    const { current, upcoming } = useAppSelector(state => state.epicGames)
    const loading = useAppSelector(state => state.common.loading)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!current.length) {
            dispatch(setLoading(true))
            dispatch(getFreeGame())
        }
    }, [])

    const EpicGameWithPreloader = WithPreloader(EpicGamesMain)
    return (
        <EpicGameWithPreloader current={current} upcoming={upcoming} loading={loading}/>
    )
}


export default EpicGamesContainer