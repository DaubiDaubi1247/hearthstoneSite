import { GetFreeGamesItemT } from "../../../api/apiT"
import TemplateInfoDescription from "../../../common/descriptionTemplate/descriptionTemplateMain/descriptionTemplate"
import WithPreloader from "../../../HOC/withPreloader"
import { Wrapper } from "../../card/cardInfoContainerStyles"
import EpicGamesItem from "../epicGamesItem/epicGamesItem"
import { EpicGamesMainPropsT } from "./epicGamesMainT"


const EpicGamesMain : React.FC<EpicGamesMainPropsT> = ({current,upcoming}) => {

    const getFreeGamesArray = (array: Array<GetFreeGamesItemT>) => array.map((el: GetFreeGamesItemT) => {
        return <TemplateInfoDescription
            img={el.keyImages[0].url}
            name={el.title}
        >
            <EpicGamesItem {...el} />
        </TemplateInfoDescription>
    })

    return (
        <Wrapper>
            {
                getFreeGamesArray(current)
            }
            <hr />
            {
                getFreeGamesArray(upcoming)
            }
        </Wrapper>
    )
}




export default EpicGamesMain