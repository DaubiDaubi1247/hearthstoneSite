import { GetFreeGamesItemT } from './../../../api/apiT';


export interface EpicGamesMainPropsT {
    current : Array<GetFreeGamesItemT>
    upcoming : Array<GetFreeGamesItemT>
    loading : boolean
}