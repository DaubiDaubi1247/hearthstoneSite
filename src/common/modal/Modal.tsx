import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BtnClose, ModalMain, WrapperModal } from "./modalStyles";
import { ModalPropsT } from "./modalT";


const Modal: React.FC<ModalPropsT> = ({closeModal,imgGold}) => {

    const exitFromModal = (e : any) => {
        closeModal(false)      
    }
    debugger
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown',exitFromModal)
        return () => {
            document.body.style.overflow = 'scroll'
            document.removeEventListener('keydown', exitFromModal)
        }
    }, [])
    return (
        <WrapperModal onClick={exitFromModal}>
            <ModalMain>
                <div className="modal__video">
                    <img src={imgGold} alt="" />
                </div>
                <BtnClose onClick={exitFromModal} >
                    X
                </BtnClose>
            </ModalMain>
        </WrapperModal>
    )
}

export default Modal;