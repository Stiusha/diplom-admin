import {SubcategoryDto} from "../../api/dtos/SubcategoryDto";

export class SubcategoryGridItem implements SubcategoryDto {
    id: number;
    subcategoryId: number;
    subcategoryImage: string;
    subcategoryName: string;

    constructor(id: number, subcategoryId: number, subcategoryImage: string, subcategoryName: string) {
        this.id = id;
        this.subcategoryId = subcategoryId;
        this.subcategoryImage = subcategoryImage;
        this.subcategoryName = subcategoryName;
    }
}