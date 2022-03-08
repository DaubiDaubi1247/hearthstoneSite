import { CardT } from "../../../api/apiT"
import DescriptionSpanItem from "../../../common/descriptionTemplate/DescriptionItem"
import { WrapperDescription } from "../../../common/styles/description"


const CardDescription: React.FC<CardT> = (props) => {

    const deleteFromStrUselessSymb = (str: string): string => {
        //удаляем \ ,\n , _ и все теги
        return str ? str.replace(/(\\n)|(<\/?[a-z]>)|_/g, " ") : str
    }

    const {
        cardSet,
        type,
        rarity,
        cost,
        attack,
        health,
        text,
        flavor,
    } = props

    return (
        <WrapperDescription>
            <DescriptionSpanItem
                display="block"
                margin={false}
                title={"Тип"}
                data={type}
            />

            <DescriptionSpanItem
                display="block"
                margin={false}
                title={"Набор"}
                data={cardSet}
            />

            <DescriptionSpanItem
                display="block"
                margin={false}
                title={"Редкость"}
                data={rarity}
            />

            <DescriptionSpanItem
                display="block"
                margin={false}
                title={"Описание"}
                data={deleteFromStrUselessSymb(text)}
            />


            <DescriptionSpanItem
                display="block"
                margin={false}
                title={"Описание"}
                data={flavor}
            />


            <DescriptionSpanItem
                display="block"
                margin={false}
                title={"Характеристики"}
                data=""
            >
                <DescriptionSpanItem
                    display="inline"
                    margin={true}
                    title="attack"
                    data={attack}
                />

                <DescriptionSpanItem
                    display="inline"
                    margin={true}
                    title="health"
                    data={health}
                />
            </DescriptionSpanItem>

            <DescriptionSpanItem
                display="block"
                margin={false}
                title={"Cтоимость"}
                data={cost}
                afterData="кристаллов маны"
            />

        </WrapperDescription>
    )
}

export default CardDescription