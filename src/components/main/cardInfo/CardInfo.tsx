import { useEffect, useRef } from "react";
import { CardT } from "../../../api/apiT";
import { DescriptionItem, WrapperDescription } from "../../../common/styles/description";
import { WrapperImg } from "../../../common/styles/img";
import { Name, WrapperName } from "../../../common/styles/nameStyles";
import { WrapperCard } from "./cardInfoStyles";

const CardInfo: React.FC<CardT> = (props) => {
    
    
    const {
        cardId,
        name,
        cardSet,
        type,
        faction,
        rarity,
        cost,
        attack,
        health,
        text,
        flavor,
        race,
        img
    } = props

    const temp = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        if (temp.current !== null) { 
            temp.current.innerHTML = text
        }
    },[text])
    return (
       <WrapperCard>
           <WrapperName>
               <Name>{name}</Name>
           </WrapperName>
           <WrapperImg>
               <img src={img}/>
           </WrapperImg>
           <WrapperDescription>
                <DescriptionItem characteristic="block" ref={temp}></DescriptionItem>
                <DescriptionItem characteristic="block">{flavor}</DescriptionItem>
                <DescriptionItem characteristic="inline">{attack}</DescriptionItem>
                <DescriptionItem characteristic="inline">{health}</DescriptionItem>
           </WrapperDescription>
       </WrapperCard> 
    )
}

export default CardInfo