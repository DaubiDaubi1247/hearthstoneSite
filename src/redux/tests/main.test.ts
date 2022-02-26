import mainSlice, { setInput } from "../slices/mainSlice"
import { InitialStateT } from "../slices/mainSliceT"


test("should return not empty string", () => {
    const previosState : InitialStateT = {
        cardsInfo : [],
        userInput : "",
        requestError: null
    }
    expect(mainSlice(previosState,setInput("3"))).toEqual({
        cardsInfo : [],
        userInput : "3",
        requestError : null
    })
})

