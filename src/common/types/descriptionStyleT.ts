export interface DescriptionPropsT {
    display : string;
    visible:boolean | number;
}

export interface DescriptionTitleT {
    margin:boolean;
}

export interface DescriptionSpanItemProps {
    data? : string | number,
    title : string,
    display : string,
    margin : boolean,
    afterData? : string
}