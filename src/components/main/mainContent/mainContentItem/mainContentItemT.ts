import { GetCardT } from './../../../../api/apiT';


export interface MainContentItemPropsT {
    cardsInfo : GetCardT,
    cardSetName : string
}

export interface MainContentItemStyles {
    visible : boolean
}