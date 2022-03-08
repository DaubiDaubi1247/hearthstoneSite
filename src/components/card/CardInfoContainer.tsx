import { CardT, GetCardT } from "../../api/apiT"
import { useAppSelector } from "../../redux/hooks/hooks"
import CardInfo from "../../common/descriptionTemplate/descriptionTemplateMain/descriptionTemplate"
import { CardInfoMidPropsT } from "./cardInfoContainerT"
import { Wrapper } from "./cardInfoContainerStyles"
import CardDescription from "./cardDescription/CardDescription"


const CardInfoContainer : React.FC<CardInfoMidPropsT> = ({cardsArray}) => {
    
    const ErrorMessage : string | null = useAppSelector(state => state.hearthstone.requestError)

    const getCardsArray = () => cardsArray.map((el : CardT) => {
        return <CardInfo 
            img={el.img} 
            imgGold={el.imgGold} 
            name={el.name}
        >
            <CardDescription {...el}/>
        </CardInfo>
    })

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