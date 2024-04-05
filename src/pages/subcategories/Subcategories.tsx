import React, {useEffect, useState} from "react";
import {ApiService} from "../../api/ApiService";
import {SubcategoryDto} from "../../api/dtos/SubcategoryDto";
import SubcategoryList from "./SubcategoryList";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";

const Subcategories: React.FC = () => {
    const apiService = new ApiService();
    const [subcategoryDtos, setSubcategoryDtos] = useState<SubcategoryDto[]>([]);
    const [categoryId, setCategoryId] = useState<number>(1);

    useEffect(() => {
        fetchData(categoryId);
    }, []);

    const fetchData = async (categoryId: number) => {
        try {
            const data = await apiService.getSubcategories(categoryId);
            setSubcategoryDtos(data);
            console.log('Data:', data);
        } catch (error) {
            console.error('Error:', error);
            setSubcategoryDtos([]);
        }
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCategoryId = parseInt(event.target.value);
        setCategoryId(newCategoryId);
        fetchData(newCategoryId)
    };

    return (
        <Box p={2}>
            <Box mb={2}>
                <TextField
                    label="Category"
                    type="number"
                    value={categoryId}
                    onChange={handleCategoryChange}
                />
            </Box>
            <div>
                <SubcategoryList subcategories={subcategoryDtos}/>
            </div>
        </Box>
    );
};

export default Subcategories;