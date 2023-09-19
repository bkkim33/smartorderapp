import { Route, Routes } from "react-router-dom";
import Main from "./page/MainPage";
import Login from "./page/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
