import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { getFreeGame } from "../../redux/thunks/epicGamesThunk"


const EpicGamesContainer : React.FC = () => {
    
    
    
    const {current,error,upcoming} = useAppSelector(state => state.epicGames)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!current) {
            dispatch(getFreeGame())            
        }
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default EpicGamesContainer