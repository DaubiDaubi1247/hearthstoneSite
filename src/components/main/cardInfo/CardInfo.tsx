import { CardT } from "../../../api/apiT"


const CardInfo : React.FC<CardT> = (props) => {
    return (
        <div>
            <div>{props.name}</div>
        </div>
    )
}

export default CardInfo