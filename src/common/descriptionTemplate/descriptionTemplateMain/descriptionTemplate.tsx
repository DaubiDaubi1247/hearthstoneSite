import { WrapperImg } from "../../styles/img";
import { Name, WrapperName } from "../../styles/nameStyles";
import { GridWrapper, WrapperCard } from "./descriptionTemplateStyles";
import emptyImg from "../../../common/img/emptyImg.png"
import { useState } from "react";
import Modal from "../../modal/Modal";
import { DescriptionTemplateT } from "./descriptionTemplateT";

const TemplateInfoDescription: React.FC<DescriptionTemplateT> = (props) => {

    const [visibleModal, setVisibleModal] = useState(false)

    const isValidValue = (value: string | number | undefined): boolean => {
        return value !== undefined
    }

    const onClickImgHandler = () => {
        if (imgGold) {
            setVisibleModal(true)
        }
    }

    const {
        name,
        img,
        imgGold,
        children
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
                    <img src={img || emptyImg} alt=""/>
                </WrapperImg>
                {children}
            </GridWrapper>
            {visibleModal && <Modal closeModal={setVisibleModal} imgGold={imgGold || emptyImg} />}
        </WrapperCard>
    )
}

export default TemplateInfoDescription