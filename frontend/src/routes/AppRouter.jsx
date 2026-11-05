import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";
import MyPage from "../pages/MyPage";
import MainLayout from "../layouts/MainLayout";
import ProductDetailPage from "../pages/ProductDetailPage";

function AppRouter() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/products/:productId" element={<ProductDetailPage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default AppRouter;