import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks/hooks"
import MainContentContainer from "./mainContent/mainContenContainer"
import MainInput from "./mainInput/mainInput"
import { MainWrapper } from "./mainStyles"


const MainContainer : React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    return (
        <MainWrapper>
            <MainInput dispatch={dispatch} navigate={navigate}/>
            <MainContentContainer/>
        </MainWrapper>
    )
}

export default MainContainer