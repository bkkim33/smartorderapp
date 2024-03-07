import { Route, Routes } from "react-router-dom";

import Error from "./page/Error";
import KDSError from "./page/kds/KDSError";
import Loading from "./components/Loading";
import KDSLoading from "./components/KDSLoading";

// DID import
import "./styles/didglobal.scss";
import DIDMain from "./page/did/MainPage";
import DIDLogin from "./page/did/login/DIDLoginPage";

// KDS import
import "./styles/kdsglobal.scss";
import KDSLogin from "./page/kds/login/KDSLoginPage";
// 비밀번호 찾기
import KDSMailVerify from "./page/kds/login/KDSMailVerifyPage";
// 제조완료
import EndOrder from "./page/kds/endorder/EndOrderPage";
// 픽업현황
import Pick from "./page/kds/pick/PickPage";
// 환경설정
import KDSSetting from "./page/kds/setting/KDSSettingPage";
// 제조현황
import KDSMain from "./page/kds/MainPage";


// admin import
import "./styles/adminglobal.scss";

import AdminLogin from "./page/admin/login/AdminLoginPage";
// 비밀번호 찾기
import AdminMailVerify from "./page/admin/login/AdminMailVerifyPage";
// 비밀번호 찾기 안내
import AdminMailVerifyInfo from "./page/admin/login/AdminMailVerifyInfoPage";
// 비밀번호 변경
import AdminPassword from "./page/admin/password/AdminPasswordPage";

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
import SalesList from "./page/admin/order/SalesListPage";


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
// 유의사항 관리
import AdminCaution from "./page/admin/customer/CautionPage";

// 매장별 설정관리

import Store from "./page/admin/store/StoreListPage";
import StoreRegister from "./page/admin/store/StoreInfoRegisterPage";
import StoreInfoModify from "./page/admin/store/StoreInfoModifyPage";
import StoreReceiptModify from "./page/admin/store/StoreReceiptModifyPage";
import StoreDisplayModify from "./page/admin/store/StoreDisplayModifyPage";

// import StoreInfo from "./page/admin/store/info/StoreInfoListPage";
// import StoreRegister from "./page/admin/store/info/StoreInfoRegisterPage";
// import StoreInfoModify from "./page/admin/store/info/StoreInfoModifyPage";

// import StoreReceipt from "./page/admin/store/receipt/StoreReceiptListPage";
// import StoreReceiptModify from "./page/admin/store/receipt/StoreReceiptModifyPage";

// import StoreDisplay from "./page/admin/store/display/StoreDisplayListPage";
// import StoreDisplayModify from "./page/admin/store/display/StoreDisplayModifyPage";

// 사용자 관리
import UserList from "./page/admin/user/UserListPage";
import UserCreate from "./page/admin/user/UserCreatePage";
import UserModify from "./page/admin/user/UserModifyPage";
import Company from "./page/admin/user/CompanyPage";
// 계정/권한 관리
import AccountList from "./page/admin/account/AccountListPage";
import AccountCreate from "./page/admin/account/AccountCreatePage";
import AccountModify from "./page/admin/account/AccountModifyPage";


// app import

import "./styles/appglobal.scss";
// 메인 (임직원) : app
import AppMain from "./page/app/MainPage";
// 메인 (QR-외부인) : mobile web
import QRAppMain from "./page/app/QRMainPage";
// 로그인 (임직원) : app
import AppLogin from "./page/app/login/LoginPage";
// 로그인 (임직원) : mobile web
import AppQRLogin from "./page/app/login/QRLoginPage";
// 메일인증 (임직원) : app
import MailVerify from "./page/app/login/MailVerifyPage";
// 비밀번호 찾기 안내
import MailVerifyInfo from "./page/app/login/MailVerifyInfoPage";
// 비밀번호 변경 (임직원) : app
import CustomerChangePassword from "./page/app/password/ChangePasswordPage";
// 메뉴상세 (공통) : app & mobile web
import MenuDetail from "./page/app/order/MenuDetailPage";
// 장바구니 (공통) : app & mobile web
import CartPage from "./page/app/cart/CartPage";
// 주문상세 (공통) : app & mobile web
import OrderHistory from "./page/app/orderhistory/OrderHistoryPage";
// 구매 (공통) : app & mobile web
import Payment from "./page/app/payment/PaymentPage";
// 쿠폰 (공통) : app & mobile web
import Coupon from "./page/app/coupon/CouponPage";
// 공지사항 - 리스트 (공통) : app & mobile web
import NoticeList from "./page/app/notice/NoticeListPage";
// 공지사항 - 상세 (공통) : app & mobile web
import NoticeDetail from "./page/app/notice/NoticeDetailPage";
// 약관 - 리스트 (공통) : app & mobile web
import TermsList from "./page/app/terms/TermsListPage";
// 약관 - 상세 (공통) : app & mobile web
import TermsDetail from "./page/app/terms/TermsDetailPage";
// 내정보 - 상세 (공통) : app & mobile web
import MyInfo from "./page/app/myinfo/MyInfo";
// 자주하는 질문 (공통) : app & mobile web
import Faq from "./page/app/faq/Faq";
// 구매완료 (공통) : app & mobile web
import OrderComplete from "./page/app/ordercomplete/OrderComplete";

function App() {
  return (
    <Routes>
      <Route>
        {/* 공통 */}
        <Route
          exact
          path="/error503"
          element={
            <Error
              title="시스템 점검중"
              txt={"지금은 시스템 점검중입니다.\n 잠시 후 다시 이용해 주세요."}
              type="503"
            />
          }
        />
        <Route
          exact
          path="/error403"
          element={
            <Error
              title="페이지 접근 불가"
              txt={
                "원하시는 페이지를 찾을 수 없습니다.\n 잠시 후 다시 이용해 주세요."
              }
              type="403"
              btn
            />
          }
        />
        <Route
          exact
          path="/error404"
          element={
            <Error
              title="페이지 없음"
              txt={
                "원하시는 페이지를 찾을 수 없습니다.\n 잠시 후 다시 이용해 주세요."
              }
              type="404"
              btn
            />
          }
        />
        <Route
          exact
          path="/kdserror"
          element={
            <KDSError
              title="인터넷 연결 없음"
              txt={
                "원하시는 페이지를 찾을 수 없습니다.\n 잠시 후 다시 이용해 주세요."
              }
              btn
            />
          }
        />
        <Route exact path="/loading" element={<Loading />} />
        <Route exact path="/kdsloading" element={<KDSLoading />} />
      </Route>
      {/* APP : 각 페이지에 레이어 팝업이 있을시 페이지 내부에 존재합니다. */}
      <Route>
        {/* APP로그인 */}
        <Route exact path="/" element={<AppLogin />} />
        {/* APP 메일 */}
        <Route exact path="/mail" element={<MailVerify />} />
        {/* APP 메일 안내 */}
        <Route exact path="/mail/info" element={<MailVerifyInfo />} />
        {/* APP 비밀번호 변경 */}
        <Route exact path="/change-password" element={<CustomerChangePassword />} />
        {/* APP 비밀번호 변경 */}
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
        {/* ADMIN 비밀번호 찾기 */}
        <Route path="/admin/mail" element={<AdminMailVerify />} />
        {/* ADMIN 메일 안내 */}
        <Route path="/admin/mail/info" element={<AdminMailVerifyInfo />} />
        {/* ADMIN 메일 비밀번호 변경 */}
        <Route path="/admin/password" element={<AdminPassword />} />
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
        <Route path="/admin/order/sales" element={<SalesList />} />
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
        {/* ADMIN 고객 지원 관리 - 유의사항 */}
        <Route path="/admin/customer/caution" element={<AdminCaution />} />

        {/* ADMIN 고객 지원 관리 - 이용약관 상세 */}
        <Route path="/admin/customer/terms/modify" element={<TermsModify />} />
        {/* ADMIN 매장별 설정관리 - 리스트 */}
        <Route path="/admin/store" element={<Store />} />
        {/* ADMIN 매장별 설정관리 - 매장관리 리스트 */}
        {/* <Route path="/admin/store/info" element={<StoreInfo />} /> */}
        {/* ADMIN 매장별 설정관리 - 매장관리 등록 */}
        <Route path="/admin/store/info/register" element={<StoreRegister />} />
        {/* ADMIN 매장별 설정관리 - 매장관리 상세 */}
        <Route path="/admin/store/info/modify" element={<StoreInfoModify />} />
        {/* ADMIN 매장별 설정관리 - 상품 수령방법 리스트 */}
        {/* <Route path="/admin/store/receipt" element={<StoreReceipt />} /> */}
        {/* ADMIN 매장별 설정관리 - 상품 수령방법 상세 */}
        <Route
          path="/admin/store/receipt/modify"
          element={<StoreReceiptModify />}
        />
        {/* ADMIN 매장별 설정관리 - 상품 전시관리 리스트 */}
        {/* <Route path="/admin/store/display" element={<StoreDisplay />} /> */}
        {/* ADMIN 매장별 설정관리 - 상품 전시관리 상세 */}
        <Route
          path="/admin/store/display/modify"
          element={<StoreDisplayModify />}
        />
        {/* ADMIN 고객 관리 */}
        <Route path="/admin/users/user" element={<UserList />} />
        {/* ADMIN 고객 등록 */}
        <Route path="/admin/users/user/create" element={<UserCreate />} />
        {/* ADMIN 고객 상세 */}
        <Route path="/admin/users/user/modify" element={<UserModify />} />
        {/* ADMIN 소속 관리 */}
        <Route path="/admin/users/company" element={<Company />} />
        {/* ADMIN 계정/권한 관리 - 계정/권한 관리 리스트 */}
        <Route path="/admin/account" element={<AccountList />} />
        {/* ADMIN 계정/권한 관리 - 계정/권한 관리 계정생성 */}
        <Route path="/admin/account/create" element={<AccountCreate />} />
        {/* ADMIN 계정/권한 관리 - 계정/권한 관리 계정상세 */}
        <Route path="/admin/account/modify" element={<AccountModify />} />
      </Route>
      {/* KDS : 각 페이지에 레이어 팝업이 있을시 페이지 내부에 존재합니다.  */}
      <Route>
        {/* KDS 로그인 */}
        <Route path="/kds" element={<KDSLogin />} />
        {/* KDS 비밀번호 찾기 */}
        <Route path="/kds/mail" element={<KDSMailVerify />} />
        {/* KDS 제조완료 */}
        <Route path="/kds/endorder" element={<EndOrder />} />
        {/* KDS 픽업현황 */}
        <Route path="/kds/pick" element={<Pick />} />
        {/* KDS 환경설정 */}
        <Route path="/kds/setting" element={<KDSSetting />} />
        {/* KDS 비밀번호 변경 */}
        {/* <Route path="/kds/setting/changepassword" element={<KDSChangePW />} /> */}
        {/* KDS 제조현황 */}
        <Route path="/kds/main" element={<KDSMain />} />
      </Route>

      <Route>
        {/* DID 메인 */}
        <Route path="/did/main" element={<DIDMain />} />
        <Route path="/did" element={<DIDLogin />} />
      </Route>
      {/* <Route path="/*" element={<Main />} /> */}
    </Routes>
  );
}

export default App;
