import React from 'react';
import { Tabs, Tab } from '@mui/material';

interface TabsProps {
    currentPage: string;
    onChangePage: (pageName: string) => void;
}

const MyTabs: React.FC<TabsProps> = ({ currentPage, onChangePage }) => {
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        onChangePage(newValue);
    };

    return (
        <Tabs value={currentPage} onChange={handleChange} aria-label="Tabs">
            <Tab label="Категории" value="categories" />
            <Tab label="Подкатегории" value="subcategories" />
            <Tab label="Характеристики" value="characteristics" />
            <Tab label="Товары" value="products" />
        </Tabs>
    );
};

export default MyTabs;
