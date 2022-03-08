import { GetFreeGamesItemT } from "../../../api/apiT"
import DescriptionSpanItem from "../../../common/descriptionTemplate/DescriptionItem"
import { WrapperDescription } from "../../../common/styles/description"


const EpicGamesItem: React.FC<GetFreeGamesItemT> = (props) => {

    const {
        description,
        effectiveDate,
        status,
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
        </WrapperDescription>
    )
}

export default EpicGamesItem