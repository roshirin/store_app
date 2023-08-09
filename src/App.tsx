import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Orders } from './pages/OrdersPage';
import { ProductsPage } from './pages/ProductsPage';
import { NotFound } from './pages/NotFound';
import { Sidebar } from './components/Sidebar';
import { DeleteProductModal } from './components/ProductsPage';
import { DeleteOrderModal } from './components/OrdersPage';
import { ChartsPage } from './pages/ChartsPage';
import { useEffect, useCallback } from 'react';
import { prepareProducts } from './store/actions/productsActions';
import { useDispatch } from 'react-redux';
import { getPreparedProducts } from './utils';

import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => {
  const dispatch = useDispatch();

  const fetchAndPrepareProducts = useCallback(async () => {
    const preparedProducts = await getPreparedProducts();
    dispatch(prepareProducts(preparedProducts));
  }, []);

  useEffect(() => {
    fetchAndPrepareProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      <main className="main">
        <Sidebar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/orders" element={<Navigate to="/" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <DeleteProductModal />
      <DeleteOrderModal />
    </div>
  );
};
