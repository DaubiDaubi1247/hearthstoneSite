import { useState } from "react"
import { setInput, setRequestError } from "../../../redux/slices/mainSlice"
import { getCard } from "../../../redux/thunks/mainThunk"
import { PropsT } from "./mainInputT"


const MainInput : React.FC<PropsT> = ({dispatch}) => {
    const [userInput, setUserInput] = useState<string>("")

    const onChangeEvent = (e : React.FormEvent<HTMLInputElement>) : void => {
        setUserInput(e.currentTarget.value)
    }

    const onBlurEvent = () : void => {
        dispatch(setInput(userInput))
        dispatch(setRequestError(null))
    }
    const getCards = () => {
        dispatch(getCard(userInput))
    }
    return (
        <div>
            <input type="text" value={userInput} onChange={onChangeEvent} onBlur={onBlurEvent}/>
            <button onClick={getCards}>Найти</button>
        </div>
    )
}

export default MainInput