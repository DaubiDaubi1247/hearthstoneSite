import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks"
import { getInfo } from "../../../redux/thunks/mainThunk"
import { WrapperInfo } from "./mainContentContainerStyles"
import DropDown from "../../../common/dropDown/DropDown"


const MainContentContainer : React.FC = () => {

    const infoAboutRequests = useAppSelector(state => state.main.infoAboutRequests)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!infoAboutRequests) dispatch(getInfo())
    },[])


    
    const getCardsItems = () => {
        let infoArr : Array<any> = [];
        for (const key in infoAboutRequests) {
            infoArr.push(
                <DropDown 
                    info={infoAboutRequests[key]} 
                    title={key}
                />
            )
        }
        return infoArr
    }

    return (
        <WrapperInfo>
            {getCardsItems()}
        </WrapperInfo>
    )
}

export default MainContentContainer