import { Route, Routes } from "react-router-dom";



// admin import
import "./styles/adminglobal.scss";

import AdminLogin from "./page/admin/login/AdminLoginPage";
// 프로필
import Profile from "./page/admin/myprofile/Profile";
import ChangePassword from "./page/admin/myprofile/ChangePassword";
// 카테고리 관리
import ProductList from "./page/admin/product/ProductListPage";
import ProductRegister from "./page/admin/product/ProductRegisterPage";
import ProductDetail from "./page/admin/product/ProductDetailPage";
import ProductCategory from "./page/admin/product/ProductCategoryPage";
// 주문내역 관리
import OrderHistoryList from "./page/admin/order/OrderHistoryListPage";
//매출 관리


// 공지사항 관리
import AdminNotice from "./page/admin/customer/NoticeListPage";
import NoticeRegister from "./page/admin/customer/NoticeregisterPage";
import NoticeModify from "./page/admin/customer/NoticeModifyPage";
// 자주하는 질문
import AdminQna from "./page/admin/customer/QnaListPage";
import QnaRegister from "./page/admin/customer/QnaRegisterPage";
import QnaModify from "./page/admin/customer/QnaModifyPage";
// 이용약관
import AdminTerms from "./page/admin/customer/TermsListPage";
import TermsRegister from "./page/admin/customer/TermsRegisterPage";
import TermsModify from "./page/admin/customer/TermsModifyPage";
// 매장별 설정관리
import StoreInfo from "./page/admin/store/StoreListPage";
import StoreRegister from "./page/admin/store/register/StoreRegisterPage";

import StoreInfoModifyePage from "./page/admin/store/modify/StoreInfoModifyePage";
// 사용자 관리
import UserList from "./page/admin/user/UserListPage";
// 계정/권한 관리
import AccountList from "./page/admin/account/AccountListPage";
import AccountCreate from "./page/admin/account/AccountCreatePage";
import AccountModify from "./page/admin/account/AccountModifyPage";


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
        {/* ADMIN 프로필 - 프로필 상세 */}
        <Route path="/admin/myprofile/profile" element={<Profile />} />
        {/* ADMIN 프로필 - 비밀번호 변경 */}
        <Route
          path="/admin/myprofile/changepassword"
          element={<ChangePassword />}
        />
        {/* ADMIN 상품전시관리 - 상품 관리 리스트 */}
        <Route path="/admin/product/product" element={<ProductList />} />
        {/* ADMIN 상품전시관리 - 상품 관리 등록 */}
        <Route
          path="/admin/product/product/register"
          element={<ProductRegister />}
        />
        {/* ADMIN 상품전시관리 - 상품 관리 상세 */}
        <Route
          path="/admin/product/product/detail"
          element={<ProductDetail />}
        />
        {/* ADMIN 상품전시관리 - 카테 고리 관리 */}
        <Route path="/admin/product/category" element={<ProductCategory />} />

        {/* ADMIN 주문/매출 관리 - 주문 내역 관리 */}
        <Route path="/admin/order/history" element={<OrderHistoryList />} />
        {/* ADMIN 주문/매출 관리 - 매출 관리 */}
        {/* 작업 필요! */}

        {/* ADMIN 고객 지원 관리 - 공지사항 리스트 */}
        <Route path="/admin/customer/notice" element={<AdminNotice />} />
        {/* ADMIN 고객 지원 관리 - 공지사항 등록 */}
        <Route
          path="/admin/customer/notice/register"
          element={<NoticeRegister />}
        />
        {/* ADMIN 고객 지원 관리 - 공지사항 상세 */}
        <Route
          path="/admin/customer/notice/modify"
          element={<NoticeModify />}
        />
        {/* ADMIN 고객 지원 관리 - 자주하는 질문 리스트 */}
        <Route path="/admin/customer/qna" element={<AdminQna />} />
        {/* ADMIN 고객 지원 관리 - 자주하는 질문 등록 */}
        <Route path="/admin/customer/qna/register" element={<QnaRegister />} />
        {/* ADMIN 고객 지원 관리 - 자주하는 질문 상세 */}
        <Route path="/admin/customer/qna/modify" element={<QnaModify />} />
        {/* ADMIN 고객 지원 관리 - 이용약관 리스트 */}
        <Route path="/admin/customer/terms" element={<AdminTerms />} />
        {/* ADMIN 고객 지원 관리 - 이용약관 등록 */}
        <Route
          path="/admin/customer/terms/register"
          element={<TermsRegister />}
        />
        {/* ADMIN 고객 지원 관리 - 이용약관 상세 */}
        <Route path="/admin/customer/terms/modify" element={<TermsModify />} />
        {/* ADMIN 매장별 설정관리 - 리스트 */}
        <Route path="/admin/store" element={<StoreInfo />} />
        {/* ADMIN 매장별 설정관리 - 리스트 */}
        <Route path="/admin/store/register" element={<StoreRegister />} />

        <Route
          path="/admin/store/info/modify"
          element={<StoreInfoModifyePage />}
        />
        {/* ADMIN 사용자 관리 */}
        <Route path="/admin/user" element={<UserList />} />
        {/* ADMIN 계정/권한 관리 - 계정/권한 관리 리스트 */}
        <Route path="/admin/account" element={<AccountList />} />
        {/* ADMIN 계정/권한 관리 - 계정/권한 관리 계정생성 */}
        <Route path="/admin/account/create" element={<AccountCreate />} />
        {/* ADMIN 계정/권한 관리 - 계정/권한 관리 계정상세 */}
        <Route path="/admin/account/modify" element={<AccountModify />} />
      </Route>
      {/* KDS */}
      {/* <Route path="/*" element={<Main />} /> */}
    </Routes>
  );
}

export default App;
