import { useState } from "react"
import { setError, setLoading } from "../../../redux/slices/commonSlice/commonSlice"
import { setInput } from "../../../redux/slices/hearthstoneSlice/hearthstoneSlice"
import { getCard } from "../../../redux/thunks/hearthstoneThunk"
import { MainForm } from "./mainInputStyles"
import { PropsT } from "./mainInputT"


const MainInput : React.FC<PropsT> = ({dispatch,navigate}) => {
    
    const [userInput, setUserInput] = useState<string>("")

    const onChangeEvent = (e : React.FormEvent<HTMLInputElement>) : void => {
        setUserInput(e.currentTarget.value)
    }

    const onBlurEvent = () : void => {
        dispatch(setInput(userInput))
        dispatch(setLoading(true))
        dispatch(setError(null))
    }
    const getCards = () => {
        
        dispatch(getCard(userInput))
        navigate("/hearthstone/searchCard")
    }
    return (
        <MainForm onSubmit={e => e.preventDefault() }>
            <input type="text" value={userInput} onChange={onChangeEvent} onBlur={onBlurEvent}/>
            <button onClick={getCards}>Найти</button>
        </MainForm>
    )
}

export default MainInput