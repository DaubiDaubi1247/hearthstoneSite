import { useEffect } from "react"
import { GetFreeGamesItemT } from "../../api/apiT"
import TemplateInfoDescription from "../../common/descriptionTemplate/descriptionTemplateMain/descriptionTemplate"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import { getFreeGame } from "../../redux/thunks/epicGamesThunk"
import { Wrapper } from "../card/cardInfoContainerStyles"
import EpicGamesItem from "./epicGamesItem/epicGamesItem"


const EpicGamesContainer : React.FC = () => {
    
    const {current,error,upcoming} = useAppSelector(state => state.epicGames)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!current.length) {
            dispatch(getFreeGame())            
        }
    }, [])


    const ErrorMessage : string | null = useAppSelector(state => state.hearthstone.requestError)

    const getCardsArray = () => current.map((el : GetFreeGamesItemT) => {
        return <TemplateInfoDescription 
            img={el.keyImages[0].url}
            name={el.title}
            imgArray={el.keyImages}
        >
            <EpicGamesItem {...el}/>
        </TemplateInfoDescription>
    })

    return (
        <Wrapper>
            {
                current.length ?   
                getCardsArray() : null
            }
        </Wrapper>
    )
}

export default EpicGamesContainer