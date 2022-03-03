
export type GetCardT = Array<CardT>

export type GetAllCardsT = Array<GetCardT>

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
}