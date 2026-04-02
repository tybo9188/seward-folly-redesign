import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import RealEstatePage from './pages/RealEstatePage/RealEstatePage';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/iditarod-2026" element={<ArticlePage />} />
        <Route path="/real-estate" element={<RealEstatePage />} />
      </Routes>
    </MainLayout>
  );
}
