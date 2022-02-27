import { CardT, GetCardT } from "../../api/apiT"
import { useAppSelector } from "../../redux/hooks/hooks"
import CardInfo from "./cardInfo/CardInfo"
import { Wrapper } from "./cardInfoContainerStyles"


const CardInfoContainer : React.FC = () => {
    const cardsArray : GetCardT = useAppSelector(state => state.main.cardsInfo)
    const ErrorMessage : string | null = useAppSelector(state => state.main.requestError)

    const getCardsArray = () => cardsArray.map((el : CardT) => <CardInfo {...el}/>)

    return (
        <Wrapper>
            {
                ErrorMessage ? ErrorMessage :  
                getCardsArray()
            }
        </Wrapper>
    )
}

export default CardInfoContainer