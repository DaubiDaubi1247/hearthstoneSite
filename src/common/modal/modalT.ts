import { Dispatch, SetStateAction } from "react";


export interface ModalPropsT {
    closeModal : Dispatch<SetStateAction<boolean>>
    imgGold : string
}