import { Route, Routes } from "react-router-dom";

// app import
import AppMain from "./page/app/MainPage";
import AppLogin from "./page/app/login/LoginPage";
import AppQRLogin from "./page/app/login/QRLoginPage";
import MenuDetail from "./page/app/order/MenuDetailPage";
import CartPage from "./page/app/cart/CartPage";
import OrderHistory from "./page/app/orderhistory/OrderHistoryPage";
import Payment from "./page/app/payment/PaymentPage";
import Coupon from "./page/app/coupon/CouponPage";
import NoticeList from "./page/app/notice/NoticeListPage";
import NoticeDetail from "./page/app/notice/NoticeDetailPage";
import TermsList from "./page/app/terms/TermsListPage";
import TermsDetail from "./page/app/terms/TermsDetailPage";
import MyInfo from "./page/app/myinfo/MyInfo";
import Faq from "./page/app/faq/Faq";
import OrderComplete from "./page/app/ordercomplete/OrderComplete";


// admin import
import AdminLogin from "./page/admin/login/LoginPage";
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
      <Route path="/order/history" element={<OrderHistory />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/notice" element={<NoticeList />} />
      <Route path="/notice/detail" element={<NoticeDetail />} />
      <Route path="/terms" element={<TermsList />} />
      <Route path="/terms/detail" element={<TermsDetail />} />
      <Route path="/myinfo" element={<MyInfo />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/complete" element={<OrderComplete />} />

      {/* <Route path="/app/login" element={<Login />} />c */}
      {/* ADMIN */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/coupon/management" element={<CouponeManagement />} />
      <Route path="/admin/coupon/issuance" element={<CouponIssuance />} />
      {/* KDS */}
      {/* <Route path="/*" element={<Main />} /> */}
    </Routes>
  );
}

export default App;
