import { Route, Routes } from "react-router-dom";



// admin import
import "./styles/adminglobal.scss";

import AdminLogin from "./page/admin/login/AdminLoginPage";
import ProductList from "./page/admin/product/ProductListPage";
import ProductCreate from "./page/admin/product/ProductCreatePage";
import OrderDetail from "./page/admin/order/OrderDetailPage";
import AdminNotice from "./page/admin/customer/NoticeListPage";
// 진현주 231113 -  등록 페이지 추가 
import NoticeRegistrationPage from "./page/admin/customer/NoticeRegistrationPage";
import QnaRegistrationPage from "./page/admin/customer/QnaRegistrationPage";
import TermsRegistrationPage from "./page/admin/customer/TermsRegistrationPage";
import StoreInfoRegistrationPage from "./page/admin/store/info/registration/StoreInfoRegistrationPage";
// 진현주 매장관리 페이지 추가
import StoreInfoPage from "./page/admin/store/info/StoreInfoPage";
import StoreInfoModifyePage from "./page/admin/store/info/modify/StoreInfoModifyePage";

import UserList from "./page/admin/user/UserListPage";
import AccountList from "./page/admin/account/AccountListPage";
import AccountCreate from "./page/admin/account/AccountCreatePage";
import AccountModify from "./page/admin/account/AccountModifyPage";
// 진현주 - 내 프로필 페이지 추가
import Profile from "./page/admin/myprofile/Profile";
import ChangePassword from "./page/admin/myprofile/ChangePassword";
// 진현주 231113 - 카테고리 관리 페이지 추가 
// import CategoryManagementPage from "./page/admin/product/CategoryManagementPage";


// app import

import "./styles/appglobal.scss";

import AppMain from "./page/app/MainPage";
import QRAppMain from "./page/app/QRMainPage";
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

function App() {
  return (
    <Routes>
      {/* APP */}
      <Route>
        <Route exact path="/" element={<AppLogin />} />
        <Route path="/qr" element={<AppQRLogin />} />
        <Route path="/main" element={<AppMain />} />
        <Route path="/qrmain" element={<QRAppMain />} />
        <Route path="/order" element={<MenuDetail />} />
        <Route path="/qrorder" element={<MenuDetail QR />} />
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
      </Route>

      {/* <Route path="/app/login" element={<Login />} />c */}
      {/* ADMIN */}
      <Route>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/product/list" element={<ProductList />} />
        <Route path="/admin/product/create" element={<ProductCreate />} />
        {/* <Route path="/admin/product/category"  element={<CategoryManagementPage />} /> */}
        <Route path="/admin/order/detail" element={<OrderDetail />} />
        <Route path="/admin/customer/notice" element={<AdminNotice />} />
        {/* 진현주 - 등록페이지 추가 */}
        <Route path="/admin/customer/notice/registration"  element={<NoticeRegistrationPage/>} />
        <Route path="/admin/customer/qna/registration"  element={<QnaRegistrationPage/>} />
        <Route path="/admin/customer/terms/registration"  element={<TermsRegistrationPage/>} />
        <Route path="/admin/store/info/registration"  element={<StoreInfoRegistrationPage/>} />
        {/* 진현주 - 매장정보 관리 페이지 추가  */}
        <Route path="/admin/store/info"  element={<StoreInfoPage/>} />
        {/* 진현주 - 매장정보 수정 페이지 추가  */}
        <Route path="/admin/store/info/modify"  element={<StoreInfoModifyePage/>} />

        <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/account" element={<AccountList />} />
        <Route path="/admin/account/create" element={<AccountCreate />} />
        <Route path="/admin/account/modify" element={<AccountModify />} />
        {/* 진현주 - 내 프로필 페이지 추가 */}
        <Route path="/admin/myprofile/profile" element={<Profile />} />
        <Route path="/admin/myprofile/changepassword"  element={<ChangePassword />} />

      </Route>
      {/* KDS */}
      {/* <Route path="/*" element={<Main />} /> */}
    </Routes>
  );
}

export default App;
