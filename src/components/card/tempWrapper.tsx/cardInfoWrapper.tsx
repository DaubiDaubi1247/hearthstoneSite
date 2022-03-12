import WithPreloader from "../../../HOC/withPreloader"
import { useAppSelector } from "../../../redux/hooks/hooks"
import CardInfoContainer from "../CardInfoContainer"


const CardInfoWrapper : React.FC = () => {

    const cardsArray = useAppSelector(state => state.hearthstone.cardsInfo)
    const loading = useAppSelector(state => state.common.loading)
    const CardInfoContainerWithPreloader = WithPreloader(CardInfoContainer)

    return (
        <div>
            <CardInfoContainerWithPreloader 
                cardsArray={cardsArray} 
                loading={loading}
            />
        </div>
    )
}

export default CardInfoWrapper