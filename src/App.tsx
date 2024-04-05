import React, { useState } from 'react';
import Categories from './pages/categories/Categories';
import Subcategories from './pages/subcategories/Subcategories';
import Products from './pages/products/Products';
import MyTabs from "./tabs/MyTabs";
import Characteristics from "./pages/characteristics/Characteristics";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('categories');

  const changePage = (pageName: string) => {
    setCurrentPage(pageName);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'categories':
        return <Categories />;
      case 'subcategories':
        return <Subcategories />;
      case 'characteristics':
        return <Characteristics />;
      case 'products':
        return <Products />;
      default:
        return <div>Страница не найдена</div>;
    }
  };

  return (
      <div>
        <MyTabs currentPage={currentPage} onChangePage={changePage} />
        <main>{renderPage()}</main>
      </div>
  );
};

export default App;