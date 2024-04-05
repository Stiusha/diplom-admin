import React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid';
import {CategoryDto} from '../../api/dtos/CategoryDto';
import {Button} from "@mui/material";

interface CategoryListProps {
    categories: CategoryDto[];
}

class CategoryGridItem implements CategoryDto {
    id: number;
    categoryId: number;
    categoryImage: string;
    categoryName: string;

    constructor(id: number, categoryId: number, categoryImage: string, categoryName: string) {
        this.id = id;
        this.categoryId = categoryId;
        this.categoryImage = categoryImage;
        this.categoryName = categoryName;
    }
}

const CategoryList: React.FC<CategoryListProps> = ({categories}) => {
    const handleEditClick = (category: CategoryDto) => {
        console.log('Editing category:', category);
    };

    const handleDeleteClick = (category: CategoryDto) => {
        console.log('Deleting category:', category);
    };

    // Определите столбцы таблицы
    const columns: GridColDef[] = [
        {field: 'categoryId', headerName: 'Category ID', flex: 2},
        {field: 'categoryName', headerName: 'Category Name', flex: 2},
        {field: 'categoryImage', headerName: 'Category Image', flex: 10},
        {
            field: 'edit',
            headerName: 'Edit',
            sortable: false,
            filterable: false,
            flex: 1,
            renderCell: (params: GridCellParams) => (
                <Button variant="contained" color="primary" onClick={() => handleEditClick(params.row)}>
                    Edit
                </Button>
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            sortable: false,
            filterable: false,
            flex: 1,
            renderCell: (params: GridCellParams) => (
                <Button variant="contained" color="error" onClick={() => handleDeleteClick(params.row)}>
                    Delete
                </Button>
            ),
        }
    ];

    let categoryGridItems: CategoryGridItem[] = categories.map(value => new CategoryGridItem(value.categoryId, value.categoryId, value.categoryImage, value.categoryName));

    return (
        <Box sx={{height: '100%', width: '100%'}}>
            <DataGrid
                rows={categoryGridItems}
                columns={columns}
                autoHeight
                autoPageSize
            />
        </Box>
    );
};

export default CategoryList;