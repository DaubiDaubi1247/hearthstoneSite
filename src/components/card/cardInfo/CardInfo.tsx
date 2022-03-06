import { CardT } from "../../../api/apiT";
import { DescriptionItem, WrapperDescription } from "../../../common/styles/description";
import { WrapperImg } from "../../../common/styles/img";
import { Name, WrapperName } from "../../../common/styles/nameStyles";
import { GridWrapper, WrapperCard } from "./cardInfoStyles";
import emptyImg  from "../../../common/img/emptyImg.png"
import { useState } from "react";
import Modal from "../../../common/modal/Modal";

const CardInfo: React.FC<CardT> = (props) => {
    
    const [visibleModal, setVisibleModal] = useState(false)

    const deleteFromStrUselessSymb = (str : string) : string => {
        //удаляем \ ,\n , <b></b> и _
        return str ? str.replace(/(\\n)|(<\/?b>)|_/g," ") : str
    }
    
    const isValidValue = (value : string | number) : boolean => {
        return value !== undefined
    }

    const onClickImgHandler = () => {
        if (imgGold) {
            setVisibleModal(true)            
        }
    }

    const {
        name,
        cardSet,
        type,
        rarity,
        cost,
        attack,
        health,
        text,
        flavor,
        img,
        imgGold
    } = props

    return (
       <WrapperCard>
               <WrapperName>
                   <Name>{name}</Name>
               </WrapperName>
           <GridWrapper>
               <WrapperImg 
                    onClick={onClickImgHandler}
                    isValidValue={isValidValue(imgGold)}
                >
                   <img src={img || emptyImg}/>
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
                            <span>attack {attack}</span>
                        </DescriptionItem>
                        <DescriptionItem 
                            characteristic="inline"
                            margin={true}
                            visible={isValidValue(health)}
                        >
                            <span>health {health}</span>
                        </DescriptionItem>
                    </DescriptionItem>

                    <DescriptionItem 
                        characteristic="block"
                        margin={false}
                        visible={isValidValue(cost)}
                    >
                        <span>Cтоимость : </span>{cost} кристаллов маны
                    </DescriptionItem>
               </WrapperDescription>
           </GridWrapper>
           {visibleModal && <Modal closeModal={setVisibleModal} imgGold={imgGold}/>}
       </WrapperCard> 
    )
}

export default CardInfo