import axios, {AxiosResponse} from "axios";
import {CategoryDto} from "./dtos/CategoryDto";
import {SubcategoryDto} from "./dtos/SubcategoryDto";

export class ApiService {

    private baseUrl: string = "http://localhost:2004"

    async getCategories(): Promise<CategoryDto[]> {
        try {
            const response: AxiosResponse<CategoryDto[]> = await axios.get<CategoryDto[]>(`${this.baseUrl}/categories`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data');
        }
    }

    async getSubcategories(category: number): Promise<SubcategoryDto[]> {
        try {
            const response: AxiosResponse<SubcategoryDto[]> = await axios.get<SubcategoryDto[]>(`${this.baseUrl}/subcategories/${category}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Failed to fetch data');
        }
    }


}