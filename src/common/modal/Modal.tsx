import { useEffect } from "react";
import SimpleSlider from "../descriptionTemplate/slider/Slider";
import { BtnClose, ModalImg, ModalMain, WrapperModal } from "./modalStyles";
import { ModalPropsT } from "./modalT";


const Modal: React.FC<ModalPropsT> = ({ closeModal, imgGold }) => {

    const exitFromModal = () => {
        closeModal(false)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', exitFromModal)
        return () => {
            document.body.style.overflow = 'scroll'
            document.removeEventListener('keydown', exitFromModal)
        }
    }, [])
    return (
        <WrapperModal onClick={exitFromModal}>
            <ModalMain>
                <ModalImg>
                    <img src={imgGold} alt="" />
                </ModalImg>
                <BtnClose onClick={exitFromModal} >
                    X
                </BtnClose>
            </ModalMain>
        </WrapperModal>
    )
}

export default Modal;