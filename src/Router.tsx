import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Info from '@components/Info/Info';
import FoodCard from '@components/FoodCard/FoodCard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="food" element={<FoodCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
