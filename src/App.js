import { Route, Routes } from "react-router-dom";

import AppMain from "./page/app/MainPage";

import AdminMain from "./page/admin/MainPage";
import CouponeManagement from "./page/admin/coupon/CouponeManagementPage";
import CouponIssuance from "./page/admin/coupon/CouponIssuancePage";
// import Login from "./page/admin/LoginPage";

function App() {
  return (
    <Routes>
      {/* APP */}
      <Route exact path="/app" element={<AppMain />} />
      {/* <Route path="/app/login" element={<Login />} />c */}
      {/* ADMIN */}
      <Route exact path="/admin" element={<AdminMain />} />
      <Route
        exact
        path="/admin/coupon/management"
        element={<CouponeManagement />}
      />
      <Route
        exact
        path="/admin/coupon/issuance"
        element={<CouponIssuance />}
      />
      {/* KDS */}
      <Route path="/*" element={<Main />} />
    </Routes>
  );
}

export default App;
