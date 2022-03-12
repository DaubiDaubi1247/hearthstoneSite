import { GetCardT, GetFreeGamesT, GetInfoT, GetFreeGamesMain } from './apiT';
import axios from "axios";

const hearthstone = axios.create({
    baseURL: "https://omgvamp-hearthstone-v1.p.rapidapi.com",
    withCredentials:true,
    params: {locale: 'ruRU'},
    headers: {
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f39fde93dfmsh5826dea42b24f57p16dca5jsnc759f8ee847c'
      }
})

const epicGames = axios.create({
    baseURL: 'https://free-epic-games.p.rapidapi.com',
    withCredentials:true,
    headers: {
        'x-rapidapi-host': 'free-epic-games.p.rapidapi.com',
        'x-rapidapi-key': 'f39fde93dfmsh5826dea42b24f57p16dca5jsnc759f8ee847c'
      }
  })

  export const cardAPI = {
    getCardByNameOrId(name : string) {
        return hearthstone.get<GetCardT>(`/cards/search/${name}`)
    },
    getInfo() {
        return hearthstone.get<GetInfoT>('/info')
    }
}

export const epicGamesAPI = {
    getFreeGames() {
        return epicGames.get<GetFreeGamesMain>('/free')
    },
}

