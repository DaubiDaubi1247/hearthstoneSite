import { useState } from "react";
import CardInfoContainer from "../../../card/CardInfoContainer";
import { WrapperForVisible } from "./MainContentItemStyles";
import { MainContentItemPropsT } from "./mainContentItemT";


const MainContentItem : React.FC<MainContentItemPropsT> = ({cardsInfo,cardSetName}) => {
    const [visible, setVisible] = useState(false)
    const onClickSetVisibility = () => {
        setVisible(!visible);
    }
    return (
        <div>

            <WrapperForVisible visible={visible} onClick={onClickSetVisibility}>
                <span>{cardSetName}</span>
                <CardInfoContainer cardsArray={cardsInfo}/>
            </WrapperForVisible>
        </div>
    );
}

export default MainContentItem;