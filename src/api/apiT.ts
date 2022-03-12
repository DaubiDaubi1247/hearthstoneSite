
export type GetCardT = Array<CardT>



export interface GetInfoT {
    [index : string]: Array<string>
    classes: Array<string>,
    sets : Array<string>
    wild : Array<string>
    races : Array<string>
}

export interface CardT {
    cardId: string
    name: string
    cardSet:string
    type:string
    rarity:string
    cost:number
    attack:number
    health:number
    text:string
    flavor:string
    race:string
    img:string
    imgGold : string
}

export interface GetFreeGamesT {
    current : Array<GetFreeGamesItemT>
    upcoming : Array<GetFreeGamesItemT>
}

export interface GetFreeGamesMain {
    freeGames : GetFreeGamesItemT
}

export interface PriceItems {
    originalPrice : string
    currencyCode : string
}

export interface GetFreeGamesItemT {
    title:string,
    id:string
    description:string
    effectiveDate:string
    status:string
    keyImages: Array<{url:string}>
    price : {totalPrice : PriceItems}
}