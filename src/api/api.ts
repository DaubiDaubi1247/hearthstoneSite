import { GetCardT, GetInfoT } from './apiT';
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
        return request.get<GetCardT>(`/cards/search/${name}`)
    },
    getInfo() {
        return request.get<GetInfoT>('/info')
    }
}

export default cardAPI