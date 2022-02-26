import { CardT, GetCardT } from "../../api/apiT"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks"
import CardInfo from "./cardInfo/CardInfo"
import { Wrapper } from "./cardInfoContainerStyles"
import MainInput from "./mainInput/MainInput"


const MainContainer : React.FC = () => {
    const cardsArray : GetCardT = useAppSelector(state => state.main.cardsInfo)
    const ErrorMessage : string | null = useAppSelector(state => state.main.requestError)
    const dispatch = useAppDispatch()
    const getCardsArray = () => {
        return cardsArray.map((el : CardT) => <CardInfo {...el}/>)
    } 

    return (

        <Wrapper>
            <MainInput dispatch={dispatch}/>
            {
                ErrorMessage ? ErrorMessage :  
                getCardsArray()
            }
        </Wrapper>
    )
}

export default MainContainer