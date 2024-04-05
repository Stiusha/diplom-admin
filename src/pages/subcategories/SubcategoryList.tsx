import React from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid';
import {CategoryDto} from "../../api/dtos/CategoryDto";
import {SubcategoryListProps} from "./SubcategoryListProps";
import {SubcategoryGridItem} from "./SubcategoryGridItem";
import {Button} from "@mui/material";

const SubcategoryList: React.FC<SubcategoryListProps> = ({subcategories}) => {

    const handleEditClick = (category: CategoryDto) => {
        console.log('Editing category:', category);
    };

    const handleDeleteClick = (category: CategoryDto) => {
        console.log('Deleting category:', category);
    };

    // Определите столбцы таблицы
    const columns: GridColDef[] = [
        {field: 'subcategoryId', headerName: 'Subcategory ID', flex: 2},
        {field: 'subcategoryName', headerName: 'Subcategory Name', flex: 2},
        {field: 'subcategoryImage', headerName: 'Subcategory Image', flex: 10},
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
            )
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
            )
        }
    ];

    let categoryGridItems: SubcategoryGridItem[] = subcategories.map(value => new SubcategoryGridItem(value.subcategoryId, value.subcategoryId, value.subcategoryImage, value.subcategoryName));

    return (
        <Box sx={{height: '100%', width: '100%'}}>
            <DataGrid
                rows={categoryGridItems}
                columns={columns}
                autoHeight
                autoPageSize
                disableAutosize
            />
        </Box>
    );
};

export default SubcategoryList;