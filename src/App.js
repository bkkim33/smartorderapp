import { Route, Routes } from "react-router-dom";

import AppMain from "./page/app/MainPage";
import AppLogin from "./page/app/login/LoginPage";
import AppQRLogin from "./page/app/login/QRLoginPage";
import MenuDetailPage from "./page/app/order/MenuDetailPage";
import CartPage from "./page/app/cart/CartPage";
import Coupon from "./page/app/coupon/CouponPage";

import AdminMain from "./page/admin/MainPage";
import CouponeManagement from "./page/admin/coupon/CouponeManagementPage";
import CouponIssuance from "./page/admin/coupon/CouponIssuancePage";
// import Login from "./page/admin/LoginPage";

function App() {
  return (
    <Routes>
      {/* APP */}
      <Route exact path="/" element={<AppLogin />} />
      <Route path="/qr" element={<AppQRLogin />} />
      <Route path="/main" element={<AppMain />} />
      <Route path="/order" element={<MenuDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/coupon" element={<Coupon />} />
      {/* <Route path="/app/login" element={<Login />} />c */}
      {/* ADMIN */}
      <Route path="/admin" element={<AdminMain />} />
      <Route path="/admin/coupon/management" element={<CouponeManagement />} />
      <Route path="/admin/coupon/issuance" element={<CouponIssuance />} />
      {/* KDS */}
      {/* <Route path="/*" element={<Main />} /> */}
    </Routes>
  );
}

export default App;
