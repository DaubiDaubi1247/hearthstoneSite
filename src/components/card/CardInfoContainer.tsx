import { CardT, GetCardT } from "../../api/apiT"
import { useAppSelector } from "../../redux/hooks/hooks"
import CardInfo from "./cardInfo/CardInfo"
import { CardInfoMidPropsT } from "./cardInfoContainerT"
import { Wrapper } from "./cardInfoContainerStyles"


const CardInfoContainer : React.FC<CardInfoMidPropsT> = ({cardsArray}) => {
    
    const ErrorMessage : string | null = useAppSelector(state => state.hearthstone.requestError)

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