import { GetCardT, GetAllCardsT } from './apiT';
import axios from "axios";

const request = axios.create({
    baseURL: "https://omgvamp-hearthstone-v1.p.rapidapi.com",
    withCredentials:true,
    params: {locale: 'ruRU'},
    headers: {
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f39fde93dfmsh5826dea42b24f57p16dca5jsnc759f8ee847c'
      }
})

const cardAPI = {
    getCardByNameOrId(name : string) {
        return request.get<GetCardT>(`/cards/${name}`)
    },
    getAllCards() {
        return request.get<GetAllCardsT>('/cards')
    }
}

export default cardAPI