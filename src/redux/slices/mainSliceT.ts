import { GetAllCardsT } from './../../api/apiT';
import { GetCardT } from "../../api/apiT";

export interface InitialStateT {
    cardsInfo : GetCardT
    allCardsInfo : GetAllCardsT
    userInput : string,
    requestError : string | null
}