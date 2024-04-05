import React, { useEffect, useState } from "react";
import { ApiService } from "../../api/ApiService";
import { CategoryDto } from "../../api/dtos/CategoryDto";
import CardList from "./CategoryList";
import Box from "@mui/material/Box";

const Categories: React.FC = () => {
    const apiService = new ApiService();

    // Здесь установим пустой массив в качестве начального значения для state
    const [categoryDtos, setCategoryDtos] = useState<CategoryDto[]>([]);

    const fetchData = async () => {
        try {
            // Выполняем запрос на получение категорий
            const data = await apiService.getCategories();
            // Обновляем state с полученными категориями
            setCategoryDtos(data);
            console.log('Data:', data);
        } catch (error) {
            // Обрабатываем ошибку, если она возникла при выполнении запроса
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        // Вызываем функцию fetchData при монтировании компонента
        fetchData();
        // Передаем вторым аргументом массив зависимостей пустой, чтобы fetchData вызывалась только один раз при монтировании
    }, []);

    return (
        <Box p={2}>
            <CardList categories={categoryDtos} />
        </Box>
    );
};

export default Categories;
