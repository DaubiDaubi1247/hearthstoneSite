import { GetInfoT } from '../../../api/apiT';
import { GetCardT } from "../../../api/apiT";

export interface InitialStateT {
    cardsInfo : GetCardT
    infoAboutRequests : GetInfoT | null
    userInput : string,
}