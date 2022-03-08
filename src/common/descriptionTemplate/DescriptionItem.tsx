import { DescriptionItem, DescriptionTitle } from "../styles/description"
import { DescriptionSpanItemProps } from "../types/descriptionStyleT"


const DescriptionSpanItem: React.FC<DescriptionSpanItemProps> = ({display,margin,data,title,children,afterData}) => {
    
    const isValidValue = (value : string | number | undefined) : boolean => {
        return value !== undefined
    }
    return (
        <DescriptionItem
            display={display}
            visible={isValidValue(data)}
        >
            <DescriptionTitle margin={margin}>
                {title} : {children}
                <span>
                    {data} {afterData}
                </span>
            </DescriptionTitle>
        </DescriptionItem>
    )
}

export default DescriptionSpanItem