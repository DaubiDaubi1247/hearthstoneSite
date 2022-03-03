import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks"
import { getAllCards } from "../../../redux/thunks/mainThunk"
import MainContentItem from "./mainContentItem/MainContentItem"

const MainContentContainer : React.FC = () => {

    const allCardsInfo = useAppSelector(state => state.main.allCardsInfo)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!allCardsInfo.length) dispatch(getAllCards())
    },[])



    const getCardsItems = () => {
        let cardsArray : Array<any> = [];
        for (const key in allCardsInfo) {
            cardsArray.push(<MainContentItem cardsInfo={allCardsInfo[key]} cardSetName={key}/>)
        }
        return cardsArray
    }

    return (
        <div>
            {getCardsItems()}
        </div>
    )
}

export default MainContentContainer