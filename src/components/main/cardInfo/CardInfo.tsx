import { useEffect, useRef } from "react";
import { CardT } from "../../../api/apiT";
import { DescriptionItem, WrapperDescription } from "../../../common/styles/description";
import { WrapperImg } from "../../../common/styles/img";
import { Name, WrapperName } from "../../../common/styles/nameStyles";
import { GridWrapper, WrapperCard } from "./cardInfoStyles";

const CardInfo: React.FC<CardT> = (props) => {
    
    const deleteFromStrUselessSymb = (str : string) : string => {
        return str ? str.replace(/\\n/g," ") : str
    }
    
    const isValidValue = (value : string | number) : boolean => {
        return value !== undefined
    }

    const {
        cardId,
        name,
        cardSet,
        type,
        rarity,
        cost,
        attack,
        health,
        text,
        flavor,
        race,
        img
    } = props

    return (
       <WrapperCard>
               <WrapperName>
                   <Name>{name}</Name>
               </WrapperName>
           <GridWrapper>
               <WrapperImg>
                   <img src={img}/>
               </WrapperImg>
               <WrapperDescription>
                    <DescriptionItem 
                        characteristic="block"
                        margin={false}
                        visible={isValidValue(type)}
                    >
                        <span>Тип : </span>{type}
                    </DescriptionItem>

                    <DescriptionItem 
                        characteristic="block"
                        margin={false}
                        visible={isValidValue(cardSet)}
                    >
                        <span>Набор : </span>{cardSet}
                    </DescriptionItem>

                    <DescriptionItem 
                        characteristic="block"
                        margin={false}
                        visible={isValidValue(rarity)}
                    >
                        <span>Редкость : </span>{rarity}
                    </DescriptionItem>

                    <DescriptionItem 
                        characteristic="block"
                        margin={false}
                        visible={isValidValue(text)}
                    >
                        <span>Описание : </span>{deleteFromStrUselessSymb(text)}
                    </DescriptionItem>

                    <DescriptionItem 
                        characteristic="block"
                        margin={false}
                        visible={isValidValue(flavor)}
                    >  
                        <span>Описание : </span>{flavor}
                    </DescriptionItem>

                    <DescriptionItem 
                        characteristic="inline"
                        margin={false}
                        visible={true}
                    >
                        <span>Характеристики : </span>
                        <DescriptionItem
                            characteristic="inline"
                            margin={true}
                            visible={isValidValue(attack)}
                        >
                            <span>attack</span>{attack}
                        </DescriptionItem>
                        <DescriptionItem 
                            characteristic="inline"
                            margin={true}
                            visible={isValidValue(health)}
                        >
                            <span>health</span>{health}
                        </DescriptionItem>
                    </DescriptionItem>

                    <DescriptionItem 
                        characteristic="block"
                        margin={false}
                        visible={isValidValue(cost)}
                    >
                        <span>Cтоимость : </span>{cost} кристалл маны
                    </DescriptionItem>
               </WrapperDescription>
           </GridWrapper>
       </WrapperCard> 
    )
}

export default CardInfo