import { useState } from "react"
import { ListInfo, ListItem, Title, WrapperDropDown, WrapperForVisible } from "./dropDownStyles"
import { DropDownPropsT } from "./dropDownT"


const DropDown: React.FC<DropDownPropsT> = ({info,title,backgroundColor}) => {

    const getListInfoItems = () => info.map(el => <ListItem>{el}</ListItem>)
    const [visible, setVisible] = useState(false)
    const onClickSetVisibility = (e : React.MouseEvent<HTMLElement>) => {
        setVisible(!visible);
    }
    return (
        <WrapperDropDown onClick={onClickSetVisibility} backgroundColor={backgroundColor}>
                <Title >
                    {title}
                </Title>
            <WrapperForVisible visible={visible}>
                <ListInfo>
                    {getListInfoItems()}
                </ListInfo>
            </WrapperForVisible>
        </WrapperDropDown>
    )
}

export default DropDown