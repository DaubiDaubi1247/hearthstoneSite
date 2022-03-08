

export interface DescriptionTemplateT {
    img? : string;
    imgGold? : string;
    name : string;
    imgArray? : Array<imgArrayItemT>;
}

interface imgArrayItemT {
    url : string;
}