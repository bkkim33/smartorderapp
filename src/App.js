import { Route, Routes } from "react-router-dom";



// admin import
import "./styles/adminglobal.scss";

import AdminLogin from "./page/admin/login/AdminLoginPage";
import ProductList from "./page/admin/product/ProductListPage";
import ProductRegistrationPage from "./page/admin/product/ProductRegistrationPage";
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
import CategoryManagementPage from "./page/admin/product/CategoryManagementPage";
// 공지사항 수정
import NoticeModifyPage from "./page/admin/customer/NoticeModifyPage";


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
      {/* APP : 각 페이지에 레이어 팝업이 있을시 페이지 내부에 존재합니다. */}
      <Route>
        {/* APP로그인 */}
        <Route exact path="/" element={<AppLogin />} />
        {/* APP QR접근 로그인 */}
        <Route path="/qr" element={<AppQRLogin />} />
        {/* APP 메인 */}
        <Route path="/main" element={<AppMain />} />
        {/* APP QR접근 메인 */}
        <Route path="/qrmain" element={<QRAppMain />} />
        {/* APP 메뉴 상세 */}
        <Route path="/order" element={<MenuDetail />} />
        {/* APP 메뉴 QR접근 상세 */}
        <Route path="/qrorder" element={<MenuDetail QR />} />
        {/* APP 주문내역 */}
        <Route path="/order/history" element={<OrderHistory />} />
        {/* APP 장바구니 */}
        <Route path="/cart" element={<CartPage />} />
        {/* APP 구매(결제) */}
        <Route path="/payment" element={<Payment />} />
        {/* APP 결제 완료 */}
        <Route path="/complete" element={<OrderComplete />} />
        {/* APP 쿠폰 */}
        <Route path="/coupon" element={<Coupon />} />
        {/* APP 공지사항 리스트 */}
        <Route path="/notice" element={<NoticeList />} />
        {/* APP 공지사항 상세 */}
        <Route path="/notice/detail" element={<NoticeDetail />} />
        {/* APP 약관 리스트 */}
        <Route path="/terms" element={<TermsList />} />
        {/* APP 약관 상세 */}
        <Route path="/terms/detail" element={<TermsDetail />} />
        {/* APP 내 정보 */}
        <Route path="/myinfo" element={<MyInfo />} />
        {/* APP 자주하는 질문 */}
        <Route path="/faq" element={<Faq />} />
      </Route>

      {/* ADMIN : 각 페이지에 레이어 팝업이 있을시 페이지 내부에 존재합니다. */}
      <Route>
        {/* ADMIN 로그인 */}
        <Route path="/admin" element={<AdminLogin />} />
        {/* ADMIN 상품 전시 관리 - 상품관리 */}
        <Route path="/admin/product/list" element={<ProductList />} />
        {/* ADMIN 상품 전시 관리 - 상품정보등록 */}
        <Route
          path="/admin/product/registration"
          element={<ProductRegistrationPage />}
        />
        {/* ADMIN 상품 전시 관리 - 카테고리 관리 */}
        <Route
          path="/admin/product/category"
          element={<CategoryManagementPage />}
        />







        
        <Route path="/admin/order/detail" element={<OrderDetail />} />
        <Route path="/admin/customer/notice" element={<AdminNotice />} />
        {/* 진현주 - 등록페이지 추가 */}
        <Route
          path="/admin/customer/notice/registration"
          element={<NoticeRegistrationPage />}
        />
        <Route
          path="/admin/customer/qna/registration"
          element={<QnaRegistrationPage />}
        />
        <Route
          path="/admin/customer/terms/registration"
          element={<TermsRegistrationPage />}
        />
        <Route
          path="/admin/store/info/registration"
          element={<StoreInfoRegistrationPage />}
        />
        {/* 진현주 - 매장정보 관리 페이지 추가  */}
        <Route path="/admin/store/info" element={<StoreInfoPage />} />
        {/* 진현주 - 매장정보 수정 페이지 추가  */}
        <Route
          path="/admin/store/info/modify"
          element={<StoreInfoModifyePage />}
        />
        {/* 공지사항 수정 */}
        <Route
          path="/admin/customer/notice/modify"
          element={<NoticeModifyPage />}
        />

        <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/account" element={<AccountList />} />
        <Route path="/admin/account/create" element={<AccountCreate />} />
        <Route path="/admin/account/modify" element={<AccountModify />} />
        {/* 진현주 - 내 프로필 페이지 추가 */}
        <Route path="/admin/myprofile/profile" element={<Profile />} />
        <Route
          path="/admin/myprofile/changepassword"
          element={<ChangePassword />}
        />
      </Route>
      {/* KDS */}
      {/* <Route path="/*" element={<Main />} /> */}
    </Routes>
  );
}

export default App;
