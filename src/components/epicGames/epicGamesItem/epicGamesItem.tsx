import { GetFreeGamesItemT } from "../../../api/apiT"
import DescriptionSpanItem from "../../../common/descriptionTemplate/DescriptionItem"
import { WrapperDescription } from "../../../common/styles/description"


const EpicGamesItem: React.FC<GetFreeGamesItemT> = (props) => {

    const {
        description,
        effectiveDate,
        status,
        price
    } = props



    return (
        <WrapperDescription>
            <DescriptionSpanItem
                display="block"
                title="Описание"
                margin={false}
                data={description}
            />

            <DescriptionSpanItem
                display="block"
                title="Дата вступления в силу"
                margin={false}
                data={new Date(effectiveDate).toLocaleDateString()}
            />

            <DescriptionSpanItem
                display="block"
                title="Статус"
                margin={false}
                data={status}
            />

            <DescriptionSpanItem
                display="block"
                title="Цена без скидки"
                margin={false}
                data={""}
            >
                <DescriptionSpanItem
                    display="inline"
                    title=""
                    margin={false}
                    data={price.totalPrice.originalPrice}
                />
                <DescriptionSpanItem
                    display="inline"
                    title=""
                    margin={false}
                    data={price.totalPrice.currencyCode}
                />
            </DescriptionSpanItem>
        </WrapperDescription>
    )
}

export default EpicGamesItem