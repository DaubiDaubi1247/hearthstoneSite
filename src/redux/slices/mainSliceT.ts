import { GetCardT } from "../../api/apiT";

export interface InitialStateT {
    cardsInfo : GetCardT
    userInput : string,
    requestError : string | null
}