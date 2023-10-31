import { Route, Routes } from "react-router-dom";

import AppMain from "./page/app/MainPage";
import AppLogin from "./page/app/login/LoginPage";
import AppQRLogin from "./page/app/login/QRLoginPage";
import MenuDetail from "./page/app/order/MenuDetailPage";
import CartPage from "./page/app/cart/CartPage";
import Coupon from "./page/app/coupon/CouponPage";
import NoticeList from "./page/app/notice/NoticeListPage";
import NoticeDetail from "./page/app/notice/NoticeDetailPage";
import TermsList from "./page/app/terms/TermsListPage";
import TermsDetail from "./page/app/terms/TermsDetailPage";
import MyInfo from "./page/app/myinfo/MyInfo";

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
      <Route path="/order" element={<MenuDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/notice" element={<NoticeList />} />
      <Route path="/notice/detail" element={<NoticeDetail />} />
      <Route path="/terms" element={<TermsList />} />
      <Route path="/terms/detail" element={<TermsDetail />} />
      <Route path="/myinfo" element={<MyInfo />} />
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
